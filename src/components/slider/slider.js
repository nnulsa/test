
import Im from "./qqq.jpg"
import Im1 from "./sss.jpg"
import Im2 from "./mmm.jpg"
//import Fl from "./flll.png"
import Fl from "./test.png"
import Hear from "./heart.png"
import Heartt from "./heart.png"
import Smh from "./smheart.png"
import Im3 from "./iii.jpg"
import Im4 from "./jjj.jpg"
 import Im5 from "./yyy.jpg"
 import Move from "./move.mp3"
 import Pin from "./ttt.jpeg"
import { useRef, useState, useEffect } from "react"

import "./slider.css"
let currentSlide=1;
const Slider = () => {
  const inputRef = useRef(null);

  const inputRef1 = useRef(null);
  const [widt, setWidt] = useState()
  const [pos, setPos] = useState(0)
  const [lastElem, setLastElem]=useState(1)
const [widthOfCarousel, setWidthOfCarousel]=useState(0)

let elems=document.querySelectorAll('.sliderElem')
console.log(elems)
elems.forEach((elem) => {
    elem.classList.remove('act');
  });
elems.forEach((elem,index)=> {
    if(currentSlide-1==index){
       elem.classList.add('act')
    }
    elem.addEventListener("click", ()=> {
      const audio = document.getElementById('myAudio');

      // Пример использования методов аудиоплеера
      audio.play(); // Запуск воспроизведения
        elems.forEach((elem) => {
            elem.classList.remove('act');
          });
          elem.classList.add('act')
          currentSlide=index+1
          console.log(currentSlide)
         
          if(lastElem<currentSlide){
            let amount=currentSlide-lastElem
          let newVal = pos - widt*amount;

          console.log("new" +newVal)
          console.log("pos" +pos)
          console.log("w" +widt)
             setPos(newVal) 
          }

        //  else{
            if(lastElem>currentSlide){
            let amount=lastElem-currentSlide
            let newVal = pos + widt*amount;
            setPos(newVal)
            console.log("pos"+(pos+widt))
          }
          setLastElem(currentSlide)
    })
})

  useEffect(() => {
    console.log(inputRef1.current.offsetWidth);
    setWidt(inputRef1.current.offsetWidth)
    setWidthOfCarousel(inputRef.current.offsetWidth)
  }, []);

  const st = {
    transform: `translateX(${pos}px)`,
    transition: "transform 0.5s ease" 
  }
let countOfSlides=3;
function nextSlide(){
  currentSlide++;
  console.log("curr"+currentSlide)
  if(currentSlide==7){
     setPos(0)
     currentSlide=1
  } else {
      let newVal = pos - widt;
      console.log("th" +newVal)
          setPos(newVal)
  }
}
  return (
    <div>
      <div className="slider">
      <img src={Heartt} alt="flowers" className="hearts" />
     
        <div style={st} className="sliderCarousel" ref={inputRef}>
          <div ref={inputRef1}  className="sliderItem"><img src={Im} alt="image" className="sliderImage" /></div> 
          <div  className="sliderItem"><img src={Im1} alt="image" className="sliderImage" /></div>
          <div  className="sliderItem"><img src={Im2} alt="image" className="sliderImage" /></div>

          <div   className="sliderItem"><img src={Im3} alt="image" className="sliderImage" /></div> 
          <div  className="sliderItem"><img src={Im4} alt="image" className="sliderImage" /></div>
          <div  className="sliderItem"><img src={Im5} alt="image" className="sliderImage" /></div>

        </div>
       
 
     
      </div>
    <img src={Heartt} alt="" className="someHeart" /> 
    <img src={Smh} alt="hea" className="smHeart" />
 <img src={Pin} alt="pin" className="pin" />
      <div className="btnInterface">
        <button className="btnLeft" onClick={(event) => {
          event.preventDefault()
          const audio = document.getElementById('myAudio');

          // Пример использования методов аудиоплеера
          audio.play(); // Запуск воспроизведения
         if(currentSlide<=1){
setPos(( pos + widt)*(-5))
console.log("current" +currentSlide)
console.log("pos"+(pos+widt))
currentSlide=6
         }
         else {
            currentSlide--;
       //     console.log("current" +currentSlide)
            let newVal = pos + widt;
            setPos(newVal)
      //      console.log("pos"+(pos+widt))
         }
       

        }}>Back</button>
      <div className="btns">
<button className="sliderElem">1</button>
<button className="sliderElem">2</button>
<button className="sliderElem">3</button>
<button className="sliderElem">4</button>
<button className="sliderElem">5</button>
<button className="sliderElem">6</button>
</div>
        <button className="btnRight" onClick={(event) => {
          event.preventDefault()
          nextSlide()
          const audio = document.getElementById('myAudio');

          // Пример использования методов аудиоплеера
          audio.play(); // Запуск воспроизведения
        }}>Next</button>
      </div>
      <audio className='player' id="myAudio" controls>
  <source src={Move} type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

    </div>
  )
}

export { Slider }  