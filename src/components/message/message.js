/*import Logo from "./logo.jpg"
import "./message.css"
import { useState } from "react";
const Message=()=> {
    const [val, setVal]=useState(100)
    setTimeout(()=> {

    })
    const handleImageLoad = () => {
        console.log("Image loaded");
      };
    return  <div className="message">
<img src={Logo} alt="message" className="messageLogo"  onLoad={handleImageLoad} />
<p className="messageTitle">Твой тайный поклонник</p>
<p className="messageText">Ты просто космос!</p>
<progress onLoad={()=> {
    console.log("loaded")
}}  className="bar" value={val}></progress>
<div className="cubeMessage"></div>
    </div>
}
export default Message; */
import Logo from "./logo.jpg";
import "./message.css";
import { useState, useEffect } from "react";

const Message = () => {
  const [val, setVal] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setVal((prevVal) => {
        if (prevVal > 0) {
          return prevVal - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 100); // Устанавливаем интервал в 50 миллисекунд

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleImageLoad = () => {
    console.log("Image loaded");
  };
const st={
    display: val==0 ? "none" : "block"
}
  return (
    <div style={st} className="message">
      <img
        src={Logo}
        alt="message"
        className="messageLogo"
        onLoad={handleImageLoad}
      />
      <p className="messageTitle">Твой тайный поклонник</p>
      <p className="messageText">Ты просто космос!</p>
      <div className="blockOfStick" onClick={()=> {
       setVal(0)
      }}>
        <div className="stick1"></div>
        <div className="stick2"></div>
      </div>
      <progress className="bar" value={val} max={100}></progress>
      <div className="cubeMessage"></div>
    </div>
  );
};

export default Message;
