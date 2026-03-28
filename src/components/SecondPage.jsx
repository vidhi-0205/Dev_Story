import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const CODE_WORDS = [
  { text: '<div>',        top: '10%', left: '5%',  size: 16, color: '#BFC9D150' },
  { text: '</div>',       top: '20%', left: '80%', size: 14, color: '#BFC9D150' },
  { text: '<div>',        top: '35%', left: '20%', size: 20, color: '#BFC9D150' },
  { text: '</div>',       top: '15%', left: '60%', size: 12, color: '#BFC9D150' },
  { text: '<div>',        top: '20%', left: '75%', size: 18, color: '#BFC9D150' },
  { text: '<div>',        top: '90%', left: '40%', size: 15, color: '#BFC9D150' },
  { text: '</div>',       top: '70%', left: '10%', size: 22, color: '#BFC9D150' },
  { text: '<div>',        top: '80%', left: '55%', size: 13, color: '#BFC9D150' },
  { text: '</div>',       top: '25%', left: '35%', size: 17, color: '#BFC9D150' },
  { text: '<div>',        top: '45%', left: '88%', size: 19, color: '#BFC9D150' },
  { text: '42 divs 😭',  top: '20%', left: '25%', size: 14, color: '#BFC9D150' },
  { text: 'why tho??',   top: '30%', left: '70%', size: 12, color:'#BFC9D150' },
]

const SecondPage = () => {
  const btnRef=useRef(null)
  const wordsRef=useRef([])
  const sectionRef=useRef(null)


  useEffect(()=>{
    const btn=btnRef.current

    const onMouseMove=(e)=>{
      const rect=btn.getBoundingClientRect()
      const centerX=rect.left+rect.width/2
      const centerY=rect.top+rect.height/2

      const dx=e.clientX-centerX
      const dy=e.clientY-centerY

      gsap.to(btn,{
        x:dx*0.35,
        y:dy*0.35,
        scaleX:2.1,
        scaleY:1.85,
        duration:0.4,
        ease:'power2.out',
      })
    }

    const onMouseLeave=()=>{
      gsap.to(btn,{
        x:0,
        y:0,
        scaleX:1,
        scaleY:1,
        duration:0.8,
        ease:'elastic.out(1,0.4)',
      })
    }

    btn.addEventListener('mousemove',onMouseMove)
    btn.addEventListener('mouseleave',onMouseLeave)

    wordsRef.current.forEach((el,i)=>{
      if(!el) return 

      gsap.fromTo(el,{
        y:-150,
        opacity:0,
        rotation:gsap.utils.random(-25,25),
      },{
        y:0,
        opacity:0.5,
        rotation:0,
        duration:0.9,
        ease:'power3.out',
        stagger:0.8,

        scrollTrigger:{
          trigger:sectionRef.current,
          start:'top center',
          toggleActions:'play none none reverse',
        },
      })
    })
    return()=> ScrollTrigger.getAll().forEach(t=>t.kill())

  },[])

  return (
    <div className="relative bg-[#050a05] min-h-screen flex flex-col justify-center overflow-hidden" style={{
      background:'radial-gradient(ellipse at center, #0d1f0f 0%,#050a05 100%)'}} ref={sectionRef}>
        <div className="absolute inset-0 pointer-events-none">
          {CODE_WORDS.map((word,i)=>(
            <span
            key={i}
            ref={el=>wordsRef.current[i]=el}
            style={{
              position:'absolute',
              top:word.top,
              left:word.left,
              fontSize:word.size,
              color:word.color,
              fontFamily:'monospace',
              userSelect:'none',
              opacity:1,
            }}
            >{word.text}</span>
          ))}
        </div>
        <div className='relative z-10  h-full text-center'>
            <p className='font-mono md:text-sm text-[10px] text-[#BFC9D1] font-thin mt-8 tracking-widest opacity-0.8 mb-2'><span className="text-[#00FF41] animate-pulse mr-2">■</span>ACT II - THE DIV SOUP</p>
            <h2 className='leading-none font-black text-[3rem] md:text-[5rem] font-display tracking-tighter'>
              <span className='text-white block'>You nested</span>
              <span className='block text-[#00FF41]'
            style={{
              textShadow:`
                0 0 10px #00FF41,
                0 0 20px #00FF41,
                0 0 80px rgba(0,255,65,0.4),
                0 0 40px rgba(0,250,0,0.2)
              `
            }}>42 divs</span>
            <span className='text-white opacity-50 md:text-[4rem] text-[2rem]'>and it still doesn't center.</span>
            </h2>
            <button className='bg-[#00FF4130] border border-[#00FF41] text-[#00FF41] rounded-md p-3 mt-10  ' ref={btnRef}>🐛 Fix The Bug</button>
            <p className='font-mono md:text-sm text-[10px] text-[#BFC9D1] font-thin mt-8 tracking-widest opacity-75 mb-2 animate-bounce'>* The bug doesn't want to be fixed.</p>
        </div>
        
    </div>
  )
}

export default SecondPage
