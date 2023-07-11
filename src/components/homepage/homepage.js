import Navig from "./navig/navig"
import "./homepage.css"
import { Slider } from "../slider/slider"
import Message from "../message/message"
import { useState, useEffect } from "react"
import Mes from "./mes.mp3"
import { Footer } from "../footer/footer"
const Homepage =()=> {
  const val= Math.floor(Math.random()*10)*1000
console.log(val)
const [display, setDisplay] = useState("none");

useEffect(() => {
  const timer = setTimeout(() => {
    setDisplay("block");
  //  const audio = document.getElementById('myAudio');

    // Пример использования методов аудиоплеера
   // audio.play(); // Запуск воспроизведения
  },2000);

  return () => {
    clearTimeout(timer);
  };
}, []);
    return (
        <div className="homepage">
          {/*<h1 className="titleOfHomepage">
            У этой красотки сегодня День Рождения!!!
    </h1> */}
    <div className="waviy">
  <span style={{ "--i": 1 }}>У<span style={{opacity: "0"}}>..</span></span>
  <span style={{ "--i": 2 }}>э</span>
  <span style={{ "--i": 3 }}>т</span>
  <span style={{ "--i": 4 }}>о</span>
  <span style={{ "--i": 5 }}>й<span style={{opacity: "0"}}>..</span></span>
  <span style={{ "--i": 6 }}>к</span>
  <span style={{ "--i": 7 }}>р</span>
  <span style={{ "--i": 8 }}>а</span>
  <span style={{ "--i": 9 }}>с</span>
  <span style={{ "--i": 10 }}>о</span>
  <span style={{ "--i": 11 }}>т</span>
  <span style={{ "--i": 12 }}>к</span>
  <span style={{ "--i": 13 }}>и<span style={{opacity: "0"}}>..</span></span>
  <span style={{ "--i": 14 }}>с</span>
  <span style={{ "--i": 15 }}>е</span>
  <span style={{ "--i": 16 }}>г</span>
  <span style={{ "--i": 17 }}>о</span>
  <span style={{ "--i": 18 }}>д</span>
  <span style={{ "--i": 19 }}>н</span>
  <span style={{ "--i": 20 }}>я<span style={{opacity: "0"}}>..</span></span>
  <span style={{ "--i": 21 }}>Д</span>
  <span style={{ "--i": 22 }}>е</span>
  <span style={{ "--i": 23 }}>н</span>
  <span style={{ "--i": 24 }}>ь<span style={{opacity: "0"}}>..</span></span>
  <span style={{ "--i": 25 }}>Р</span>
  <span style={{ "--i": 26 }}>о</span>
  <span style={{ "--i": 27 }}>ж</span>
  <span style={{ "--i": 28 }}>д</span>
  <span style={{ "--i": 29}}>е</span>
  <span style={{ "--i": 30 }}>н</span>
  <span style={{ "--i": 31 }}>и</span>
  <span style={{ "--i": 32 }}>я</span>
  <span style={{ "--i": 33 }}>!</span>
</div>

          <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>  <Navig /> </div>
            <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}> <Slider /> </div> 


      
   <div className="msg" style={{ display }}> <Message /> </div> 
   <audio className='player' id="myAudio" controls>
  <source src={Mes} type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

<Footer />

        </div>
    )
} 
export {Homepage} 
