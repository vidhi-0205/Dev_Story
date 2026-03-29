import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DOTS = [
  { top: '28%', left: '3%',  size: 18, color: '#22c55e' },
  { top: '38%', left: '5%',  size: 10, color: '#22c55e' },
  { top: '58%', left: '2%',  size: 22, color: '#f97316' },
  { top: '72%', left: '6%',  size: 12, color: '#f97316' },
  { top: '18%', left: '45%', size: 8,  color: '#a855f7' },
  { top: '45%', left: '92%', size: 10, color: '#22c55e' },
  { top: '15%', left: '88%', size: 8,  color: '#3b82f6' },
  { top: '30%', left: '95%', size: 14, color: '#ec4899' },
  { top: '55%', left: '90%', size: 18, color: '#a855f7' },
  { top: '65%', left: '97%', size: 10, color: '#3b82f6' },
  { top: '75%', left: '88%', size: 8,  color: '#3b82f6' },
  { top: '10%', left: '15%', size: 6,  color: '#22c55e' },
]

const FifthPage = () => {
  const sectionRef=useRef(null)
  const dotsRef=useRef([])
  const headlineRef=useRef(null)
  const cardRef=useRef(null)

  useEffect(()=>{
    gsap.fromTo(headlineRef.current,{
      y:-60,opacity:0
    },{
      y:0,opacity:1,
      duration:1,
      ease:'power3.out',
      scrollTrigger:{
        trigger:sectionRef.current,
        start:'top 80%',
      }
    })
    gsap.fromTo(cardRef.current,
      {y:80,opacity:0,scale:0.9},{
        y:0,
        opacity:1,
        scale:1,
        duration:.9,
        ease:'power3.out',
        delay:0.3,
        scrollTrigger:{
          trigger:sectionRef.current,
          start:'top 75%',
        }
      }
    )
    dotsRef.current.forEach((dot,i)=>{
      if(!dot) return
      gsap.fromTo(dot,
        {scale:0,opacity:0},
        {
          scale:1,
          opacity:1,
          duration:0.5,
          delay:i*0.08,
          ease:'back.out(2)',
          scrollTrigger:{
            trigger:sectionRef.current,
            start:'top 80%',
          }
        }
      )
      gsap.to(dot,{
        y:gsap.utils.random(-15,15),
        x:gsap.utils.random(-8,8),
        duration:gsap.utils.random(2,4),
        ease:'sine.inOut',
        repeat:-1,
        yoyo:true,
        delay:i*0.2,
      })
    })
    return ()=> ScrollTrigger.getAll().forEach(t=>t.kill())
  },[])
  return (
    <div className="relative bg-[#050a05] min-h-screen flex flex-col justify-center overflow-hidden" style={{
      background:'radial-gradient(ellipse at center, #0d1f0f 0%,#050a05 100%)'}} ref={sectionRef}>
        {DOTS.map((dot,i)=>(
          <div
          key={i}
          ref={el=>dotsRef.current[i]=el}
          style={{
            position:'absolute',
            top:dot.top,
            left:dot.left,
            width:  dot.size,
            height: dot.size,
            borderRadius: '50%',
            background: dot.color,
            opacity: 0,

          }}
          />
        ))}
        <div className='relative z-10  h-full text-center'>
            <p className='font-mono md:text-sm text-[10px] text-[#BFC9D1] font-thin mt-8 tracking-widest opacity-0.8 mb-2'><span className="text-[#00FF41] animate-pulse mr-2">■</span>FINALE: THE MOMENT OF TRUTH</p>
             <h2 className='leading-none font-black text-[3rem] md:text-[5rem] font-display tracking-tighter' ref={headlineRef}>
              <span className='text-white '>You </span>
              <span className='text-[#00FF41]'
            style={{
              textShadow:`
                0 0 10px #00FF41,
                0 0 20px #00FF41,
                0 0 40px rgba(0,255,65,0.4),
                0 0 30px rgba(0,250,0,0.2)
              `
            }}>MADE IT..</span>
            </h2>
            <div className="card bg-[hsl(220,18%,10%, 0.6)] border border-[#BFC9D110] rounded-md p-4  md:w-[50%] w-[80%] mx-auto mt-10" ref={cardRef}>
                <div className="inner-card bg-[hsl(220,18%,10%, 0.6)] flex justify-center flex-col border border-[#00FF4120] rounded-md m-2 text-left overflow-hidden p-3 tracking-wide">
                    <div className='flex'>
                        <div className='h-[10px] w-[10px] bg-red-500 rounded-xl m-1'></div>
                        <div className='h-[10px] w-[10px] bg-[#F0B429] rounded-xl m-1'></div>
                        <div className='h-[10px] w-[10px] bg-[#00FF41] rounded-xl m-1'></div>
                    </div>
                    <p className='text-xs text-[#BFC9D180] p-1' style={{fontFamily:'monospace'}}>From: hiring@bigtech.corp</p>
                    <p className='text-xs text-[#BFC9D190] p-1 ' style={{fontFamily:'monospace'}}>Subject: 🎉 Offer Letter — Senior Developer</p>
                    <h2 className='text-xl p-2 font-black font-display text-white'>Congratulations! 🚀</h2>
                    <p className='text-[#BFC9D1] md:text-sm text-xs p-1 ' style={{fontFamily:'monospace'}}>After 500 LeetCode problems, 47 cups of coffee, and exactly one mental breakdown over CSS Grid, we're pleased to offer you a position as <span className='text-[#00FF41] text-md'>Senior Developer.<br /></span><br/><span className='p-1 mt-2 md:text-md text-sm text-[#C8FF00]'>Your ability to center a div under pressure was truly exceptional.</span></p>
                    <br />
                    <p className='text-[#BFC9D1] ' style={{fontFamily:'monospace'}}>Salary: <span className='text-[#00FF41] text-[1rem]'>$∞ </span>(stock options in a company that may or may not exist in 2 years)</p>
                    <p className='text-[#BFC9D180] text-xs p-1 ' style={{fontFamily:'monospace'}}>P.S. — The on-call rotation starts Monday.</p>
                </div>
            </div>
            <footer>
              <p className='text-[#BFC9D180] text-xs mt-20 tracking-wider' style={{fontFamily:'monospace'}}>Built with 💚 and too many &lt;div&gt;s</p>
              <p className='text-[#BFC9D150]' style={{fontFamily:'monospace'}}>© 2026 — The Dev's Descent </p>
            </footer>
            </div>
      </div>
  )
}

export default FifthPage
