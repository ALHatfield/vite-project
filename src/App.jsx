import { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

let outsideVar = 0;




function App() {
  const [count, setCount] = useState(0);
  const hostRef = useRef(null);
  const viteLogoRef = useRef(null);

  console.group("App");
  console.count();
  console.log(hostRef)
  console.groupEnd();


  useEffect(() => {
    gsap.to(".logo.react", { ease: "none", duration: 20, rotate: 360, repeat: -1 })
  },[])

  useEffect(() => {

  },[count])

  /////////////////////////////////////////
  let scaleRef = useRef(0);
  
  useGSAP(() => {
    if (count !== 0) gsap.to(".logo", { ease: "back.out", duration: 0.5, scale: "+=0.5" })
    if (count % 4 === 0) gsap.to(".logo", { ease: "back.out", duration: 0.5, scale: "1.0" })
  }, [count])
  

  //////////////////////////////////////////

  return (
    <main ref={hostRef}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img ref={viteLogoRef} src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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
