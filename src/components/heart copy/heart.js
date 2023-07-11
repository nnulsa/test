import { useEffect } from "react";
import "./heart.css"
import { TweenMax, TweenLite, Back, SlowMo } from 'gsap/all';
const Heartt =()=> {

    



useEffect(() => {
    const container = document.getElementById('hearContainer1');
    const bigHeart = document.getElementById('bigHeart1');
    const shadow = document.getElementById('shadow1'); 
   
    if (!container || !bigHeart || !shadow) {
      return;
    }
  
    const heartSrc = bigHeart.getAttribute('src');
    const A = document.createElement('audio');
    A.src = 'http://www.freesound.org/data/previews/265/265296_5003039-lq.mp3';
    A.volume = 0.7;
  
    container.addEventListener('click', generateHeart);
  
    function generateHeart() {
      A.currentTime = 0.09;
      A.play();
      TweenMax.fromTo([bigHeart, shadow], 0.15, { scale: 1 }, { scale: 0.88, repeat: 1, yoyo: true, ease: Back.easeIn.config(7) });
  
      const newH = document.createElement('img');
      const newC = document.createElement('div');
      const WH = R(80, 15);
      const newDs = [];
  
      for (let i = 2; i--;) {
        const nd = document.createElement('div');
        nd.className = 'dots';
        newDs.push(nd);
        container.insertBefore(nd, bigHeart);
      }
  
      newH.src = heartSrc;
      newH.className = 'hearts';
      newC.className = 'circ';
      TweenLite.set(newH, { width: WH, height: WH });
      container.insertBefore(newH, bigHeart);
      container.appendChild(newC);
      heartAnim(newH, newC, newDs);
    }
  
    function heartAnim(e1, e2, e34) {
      const dur = R(3.5, 1.5);
      const Path = [];
      const Y = R(-250, -380);
      const xStep = ~~R(6, 3);
  
      for (let i = 1; i < xStep; i++) {
        Path.push({ x: R(32, -96), y: i * (Y / xStep) });
      }
  
      TweenLite.to(e1, dur, {
        scale: 0.3,
        bezier: { curviness: 1.5, values: Path, autoRotate: 90 },
        onComplete: function() {
          container.removeChild(e1);
          container.removeChild(e2);
        },
      });
  
      TweenLite.to(e1, dur - 0.2, { force3D: true, opacity: 1, ease: SlowMo.ease.config(0.1, 0.8, true) });
      TweenLite.fromTo(e2, 0.6, { force3D: true, scale: 0.3 }, { scale: 1, opacity: 0 });
      TweenMax.staggerTo(e34, R(3.5, 1.5), {
        force3D: true,
        opacity: 0,
        scale: 0,
        cycle: {
          bezier: function() {
            const nPath = [];
            for (let i = 1; i < xStep; i++) {
              nPath.push({ x: R(32, -96), y: i * (Y / xStep) });
            }
            return { curviness: 1.5, values: nPath };
          },
        },
      }, R(0.5, 0), function() {
        for (let i = 2; i--;) {
          container.removeChild(e34[i]);
        }
      });
    }
  
    function R(M, m) {
      return m + (M - m) * Math.random();
    }
  }, []);
    return (
        <div>

<div id='hearContainer1'>
  <div id='shadow1'></div>
  <img id='bigHeart1' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/183204/heart_(1).png" alt="heart1" height="90%" width="90%" />
  </div> 
        </div>
    )
}
export {Heartt} 
