import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function LogoAnimator({ logo, count }) {
  const logoRef = useRef(null)

  useGSAP(function handleLogoIdle() {
    const tl = gsap.timeline();
    tl.add("start", 0.0)
    tl.to(".logo.react", { ease: "none", duration: 20, rotate: 360, repeat: -1 }, "start")
    tl.to(".logo", { ease: "back.inOut", duration: 4, scale: "+=0.1", repeat: -1, yoyo: true }, "start")

    // tl.fromTo(".logo", 
    //   { ease: "back.inOut", rotateZ : -20, },
    //   { ease: "back.inOut", duration: 6, rotateZ: 20, repeat: -1, yoyo: true },
    //    "start")
      
    // tl.fromTo(".logo", 
    //   { ease: "back.inOut", rotateX : -20, },
    //   { ease: "back.inOut", duration: 6, rotateX: 20, repeat: -1, yoyo: true },
    //    "start")

    // tl.fromTo(".logo", 
    //   { ease: "back.inOut", rotateY : -10 },
    //   { ease: "back.inOut", duration: 6, rotateY: 10, repeat: -1, yoyo: true },
    //    "start")

  }, [])
  
  useGSAP(function handleLogoAnimate() {
    if (count !== 0) gsap.to(".logo", { ease: "back.out", duration: 0.5, scale: "+=0.5" })
    if (count % 4 === 0) gsap.to(".logo", { ease: "back.out", duration: 0.5, scale: "1.0" })
  }, [count])
  
  console.log(logo)

  //////////////////////////////////////////

  return (
    <>
      {
        logo.map((logoSrc, index) => (
          <a key={logoSrc} href={index === 0 ? "https://vite.dev" : "https://react.dev"} target="_blank">
            <img ref={logoRef} src={logoSrc} className={`logo ${index === 1 ? 'react' : ''}`} alt={index === 0 ? "Vite logo" : "React logo"} />
          </a>
        ))  
      }
    </>

  )
}


export default LogoAnimator