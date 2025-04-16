import { useState } from "react";
import { useEffect } from "react";
function App() {
    //https://github.com/GuaguaMing/vsc_my_react_demo
    //const data = await axios.get('https://coffeeteacher.github.io/weather/F-C0032-001.json');

    //*天氣資料
    //https://data.gov.tw/dataset/6069

    //*天氣圖
    //https://www.cwa.gov.tw/V8/C/K/Weather_Icon.html

    //設定state變數city，儲存各縣市天氣資料
    const [citys, setCitys] = useState([]);

    //渲染前，使用useEffect先取得天氣資料
    useEffect(() => {
        (async () => {
            //取得遠端資料
            const data = await axios.get('./api/F-C0032-001.json');
            //查看是否連上json
            //console.log(data);

            //解構各縣市的氣象資訊
            const { location } = data.data.cwaopendata.dataset;
            console.log(location);
            //建立時間物件
            const options={
                hour:'numeric',
                minute:'numeric'
            }

            //將取得的天氣資料，透過setCitys方法，更新city變數資料
            setCitys(location);
        })();
    }, []); //空陣列，執行一次

    return (
        <>
            <h2>36小時天氣預報</h2>
            {/* 一列兩欄 (Bootstrap格式)*/}
            <div className="row row-cols-2 g-4">
                {/* 使用迴圈,顯示所有縣市 map函式:遍歷 */}
                {
                    citys.map((city) => {
                        return (
                            //縣市欄，一個縣市一個卡片，locationName作為key
                            <div className="col" key={city.locationName}>
                                {/* 卡片樣式 */ }
                                <div className = "card text-center">
                                    {/* 頭:卡片標題 */ }
                                    <div className = "card-header">
                                        <div className="h4 my-0">
                                            {/* 台北市 */}
                                            {city.locationName}
                                        </div>
                                    </div>
                                    {/* 身:卡片內容 */}
                                    <div className="row row-cols-3">
                                        {/* 顯示每個縣市的3個欄位資訊 */}
                                        {
                                            city.weatherElement[0].time.map((item,index)=>{
                                                return(
                                                    <div className="col" key={index}>
                                                        {/* 日期 */}
                                                        <div className="h4 my-0">
                                                            {/* 16日 */}
                                                            {/* 使用時間日期函數toLocalString() */}
                                                            {
                                                                new Date(item.startTime).toLocaleString(undefined,{
                                                                    day:'numeric'
                                                                })
                                                            }
                                                        </div>
                                                        {/* 時間 */}
                                                        {
                                                            new Date(item.startTime).toLocaleString(undefined,{
                                                                hour:'numeric',
                                                                minute:'numeric'
                                                            })
                                                        }
                                                        <br />~<br />
                                                        {
                                                            new Date(item.endTime).toLocaleString(undefined,{
                                                                hour:'numeric',
                                                                minute:'numeric'
                                                            })
                                                        }
                                                        <br />
                                                        {/* 天氣圖 */} {/* 使用執行路徑，要放在public資料夾中才讀得到 */}
                                                        {/* <img src="/weather_icons/晴時多雲.svg" alt="" /> */}
                                                        <img src={`/weather_icons/${item.parameter.parameterName}.svg`} alt="" />
                                                        {/* <img src={晴時多雲} alt=""  /> */}
                                                        {/* 天氣名稱 */}
                                                        <div className="mt-2">
                                                        {item.parameter.parameterName}
                                                        </div>
                                                        {/* 降雨率 */}
                                                        <div className="mt-2">
                                                        {/* icon */}
                                                        <i className="bi bi-umbrella">
                                                            {city.weatherElement[4].time[index].parameter.parameterName}%
                                                        </i>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div> 
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
export default App