import { useState } from "react";
import p1 from '../assets/img0409/image-a.jpg/'
import p2 from '../assets/img0409/image-b.jpg/'

function App() {
    const [width, setWidth] = useState(0);
    //圖片陣列
    const arrphotos = [p1, p2];
    return (
        <>
            <div className="main">
                {/* 縮圖 */}
                <div>
                    {/* <img src={p1} alt="" width={100} /> */}
                    {/* <img src={p1} alt="" width={100} /> */}
                    {
                        arrphotos.map((photo, index) => {
                            return (
                                <img key={index} src={photo} alt="" width={100}
                                    onMouseOver={() => setWidth(index)}
                                    style={{ cursor: "pointer" }}
                                />
                            )
                        })
                    }
                </div>

                {/* 點擊放大圖區 */}
                <div>

                    <img src={arrphotos[width]} alt="放大" width={300} />
                </div>
            </div>
        </>
    )
}
export default App