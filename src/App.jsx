import { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LogoAnimateWrapperA from './components/LogoAnimateWrapperA'; 


let outsideVar = 0;


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const styles = {
  container: {
    border: '2px solid',
    borderImage: 'linear-gradient(45deg, #f06, #48f) 1',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    
  }
}


function App() {
  const [count, setCount] = useState(0);
  const hostRef = useRef(null);

  //////////////////////////////////////////
  useEffect(() => {
    console.group("App");
    console.count();
    console.log(hostRef)
    console.log(viteLogo)
    console.groupEnd();
  },[])

  useEffect(() => {

  },[count])
  //////////////////////////////////////////


  return (
    <main ref={hostRef}>
      <div className='flex gap-[2rem] justify-between'>

        <LogoAnimateWrapperA count={count}>
          <a href="https://vite.dev" target="_blank">
            <img src={ viteLogo } className={`logo logo-idle-anim`} alt="Vite logo" />
          </a>
        </LogoAnimateWrapperA>

        <a href="https://react.dev" target="_blank">
          <img src={ reactLogo } className={`logo logo-idle-anim react`} alt="React logo" />
        </a>


      </div>
      <h1>Vite + React</h1>
      <div className="card border rounded-[15px]" style={styles.container}>
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
