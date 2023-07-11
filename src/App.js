import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, json } from 'react-router-dom';
import { About } from './components/about/about';
import { Homepage } from './components/homepage/homepage';
function App() {
  fetch('https://api.api-ninjas.com/v1/cats?name=ragdoll?offset=5')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  return (
    <div className="App">
    
  {/*
    <Routes >
  <Route path="/" element={ <Homepage />} />

</Routes>
  */}


<Routes >
  <Route path="/" element={ <Homepage />} />
  <Route path="/about" element={ <About />} />
</Routes>
    </div>
  );
}

export default App;

//https://monsterspost.com/ru/codepens-ot-svjatogo-valentina-podborka/