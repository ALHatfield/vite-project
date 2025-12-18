import { useState, useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function IdleBreathing({ children, index, src, alt, className }) {

  useEffect(() => {
    console.log("IdleBreathing Rendered");
  }, [])


  useGSAP(function handleLogoIdle() {
    console.log("IdleBreathing GSAP Triggered");
    const tl = gsap.timeline();
    tl.add("start", 0.0)
    tl.to(".logo.react", { ease: "none", duration: 20, rotate: 360, repeat: -1 }, "start")
    tl.to(".logo-idle-anim", { ease: "back.inOut", duration: 4, scale: "+=0.1", repeat: -1, yoyo: true }, "start")

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

  return (
    <>
      { children }
    </>
  );
}


function LogoAnimateWrapperA({ children, logo, count }) {

  useEffect(() => {
    console.log("LogoAnimateWrapperA Mounted");
  }, [])

  useGSAP(function handleLogoAnimate() {
    console.log("LogoAnimateWrapperA GSAP Triggered");
    if (count !== 0) gsap.to(".logo-anim-grow", { ease: "back.out", duration: 0.5, scale: "+=0.5" })
    if (count % 4 === 0) gsap.to(".logo-anim-grow", { ease: "back.out", duration: 0.5, scale: "1.0" })
  }, [count])

  return (
    <div div className="logo-container logo-anim-grow">
      <IdleBreathing>
        {children}
      </IdleBreathing>
    </div>
  )
} 




export default LogoAnimateWrapperA