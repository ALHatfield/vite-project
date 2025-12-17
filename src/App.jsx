import { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LogoAnimator from './components/LogoAnimator'; 


let outsideVar = 0;


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
  const [count, setCount] = useState(0);
  const hostRef = useRef(null);
  const viteLogoRef = useRef(null);

  console.group("App");
  console.count();
  console.log(hostRef)
  console.log(viteLogo)
  console.groupEnd();


  useEffect(() => {
    
  },[])

  useEffect(() => {

  },[count])

  //////////////////////////////////////////

  return (
    <main ref={hostRef}>
      <div>
        <LogoAnimator logo={[ viteLogo, reactLogo ]} count={count} />
        
{/* 

        <a href="https://vite.dev" target="_blank">
          <img ref={viteLogoRef} src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}



      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}


export default App
