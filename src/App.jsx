import { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
  console.groupEnd();


  useEffect(() => {
    
  },[])

  useEffect(() => {

  },[count])

  /////////////////////////////////////////
  useGSAP(function handleLogoIdle() {
    const tl = gsap.timeline();
    tl.add("start", 0.0)
    // tl.to(".logo.react", { ease: "none", duration: 20, rotate: 360, repeat: -1 }, "start")
    tl.to(".logo", { ease: "back.inOut", duration: 4, scale: "+=0.1", repeat: -1, yoyo: true }, "start")
    // tl.fromTo(".logo", 
    //   { ease: "back.inOut", rotate: -10 },
    //   { ease: "back.inOut", duration: 6, rotate: 10, repeat: -1, yoyo: true },
    //    "start")

  }, [])
  
  useGSAP(function handleLogoAnimate() {
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
