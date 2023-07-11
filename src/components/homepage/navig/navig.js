import { Link } from "react-router-dom"
import "./navig.css"
import Ye from "./yea.mp3"
import Tort from "./tort.png"
const Navig=()=> {
    return (
        <nav className="navig">
            <div className="navigItem"><img src={Tort} alt="tort" className="logo" onClick={()=> {
                  const audio = document.getElementById('myAudioo');

                  // Пример использования методов аудиоплеера
                  audio.play(); // Запуск воспроизведения
            }} /></div>
        <Link to="/" style={{textDecoration: "none"}}>   <div className="navigItem">Главная</div> </Link> 
        <Link to="/about" style={{textDecoration: "none"}}>      <div className="navigItem" onClick={()=> {console.log(1)}}>Поздравляшка</div></Link>
            <div className="navigFon"></div>
            <audio className='player' id="myAudioo" controls>
  <source src={Ye} type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
        </nav>
    )
}
export default Navig;