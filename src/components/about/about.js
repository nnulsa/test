
import React, { useEffect } from 'react';
//import { TweenMax, TweenLite, Back, SlowMo } from 'gsap';
import { TweenMax, TweenLite, Back, SlowMo } from 'gsap/all';
import { Heartt } from '../heart copy/heart';
import { Hearttt } from '../heart copy 2/heart';
import { Heartttt } from '../heart copy 3/heart';
//import { Heart } from '../heart/heart';
//import Heart from '../heart/heart';
import Music from "./happ.mp3"
import { Heart } from '../heart/heart';
import Navig from '../homepage/navig/navig';
import './about.css';
import { useRef } from 'react';
import { Footerr } from '../footer copy/footer';
const About = () => {
  useEffect(() => {
    const handleTitleClick = () => {
      const container = document.querySelector('.container');
      container.classList.add('open');
    };

    const handleCloseClick = () => {
      const container = document.querySelector('.container');
      container.classList.remove('open');
    };

    const titleElement = document.querySelector('.title');
    const closeElement = document.querySelector('.close');

    titleElement.addEventListener('click', handleTitleClick);
    closeElement.addEventListener('click', handleCloseClick);

    return () => {
      titleElement.removeEventListener('click', handleTitleClick);
      closeElement.removeEventListener('click', handleCloseClick);
    };
  }, []);
  const inputRef = useRef(null);
  //const ii = useRef(null);

  function addClass() {
    console.log(inputRef)
    inputRef.current.classList.add("actt")
   
  }
















  return (
    <div>
      <Navig />

      <div ref={inputRef} className="bgoverlay" onClick={()=> addClass()}>
        <div className="container" >
          <span className="ico">
            <span className="ico2"></span>
            <span className="title" onClick={()=> {
          const audio = document.getElementById('myAudio');

          // Пример использования методов аудиоплеера
          audio.play(); // Запуск воспроизведения
      //    audio.pause(); // Приостановка воспроизведения
   //       audio.currentTime = 30; // Установка текущей позиции воспроизведения (в секундах)
        }}>Click Me</span>
          </span>
          <div className="endtext">
            <span className="close" title="Restart">
              <i className="fa fa-times"></i>
            </span>
            <h1>Happy birthday Polina!!!</h1>
          {/*  <h2>Be my valentine?</h2> */}
          <h2>

          Дорогая Полина,

Сегодня, в этот волшебный день, весь мир сияет особенными красками, ведь отмечается твой день рождения! Позволь мне выразить самые искренние и теплые поздравления в твой адрес, ведь ты заслуживаешь все самое прекрасное и радостное в этой жизни.

Полина, ты воплощение нежности, силы и красоты. Твоя доброта и забота о других людях никогда не перестают восхищать. Ты всегда готова протянуть руку помощи и поддержку, и твое сердце наполнено любовью, которую ты бескорыстно даришь окружающим. Ты – настоящий ангел, обладающий способностью преображать мир вокруг себя.

В этот день я желаю тебе исполнения всех самых заветных мечтаний, воплощения всех планов и достижения высот, о которых ты так давно мечтаешь. Пусть каждый день твоей жизни наполнен яркими моментами и радостными событиями. Пусть солнце всегда сияет над тобой, а удача сопровождает во всех начинаниях.

Полина, ты обладаешь необыкновенным талантом и страстью к жизни. Твое искусство вдохновляет и переносит нас в мир красоты и гармонии. Ты – источник вдохновения для всех, кто имеет счастье познакомиться с твоими творениями. Твое присутствие является даром для всех, кто имеет честь знать тебя.

Пусть твой путь осыпается цветами, а каждый шаг, который ты совершаешь, ведет к новым горизонтам и достижениям. Пусть в твоей жизни царит радость, счастье и безграничная любовь. Ты заслуживаешь только самое лучшее, потому что ты – чудесное создание, которое делает этот мир лучше и прекраснее.

Полина, пусть день рождения станет началом новой главы твоей жизни, наполненной успехами, счастьем и благополучием. Пусть тебя окружают самые дорогие и преданные люди, которые всегда будут поддерживать и любить тебя.

С днем рождения, Полина! Пусть каждый день твоей жизни принесет тебе радость и исполнение всех самых сокровенных желаний. Ты – необыкновенная личность, и мир становится лучше благодаря твоему существованию.

С самыми теплыми пожеланиями и любовью,
Твой искренний друг

          </h2>
            <h3>Твой искренний друг</h3>
          </div>
        </div>
      </div>


{/*
<Heart /> */}
<div className="testB">
<Heartt />
</div>
<div className="testBox testB">
<Hearttt />
</div>
<div className="testBoxx testB">
<Heartttt />
</div>
<div className="tt testB">
<Heart />
</div>
<audio className='player' id="myAudio" controls>
  <source src={Music} type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>




</div>


  );
};

export {About};
