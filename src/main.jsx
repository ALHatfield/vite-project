import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



//////////////////////////////////
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App'; // Assuming your main component is in App.js

// const rootElement = document.getElementById('root');

// // Log the root DOM element to the console
// console.log('Root DOM Element:', rootElement);

// const root = createRoot(rootElement);
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );