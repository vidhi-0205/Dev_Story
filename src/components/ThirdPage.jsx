import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ThirdPage = () => {
    const cardsRef = useRef([])
  const sectionRef = useRef(null)

  useEffect(()=>{

  cardsRef.current.forEach((card,i)=>{
    if(!card) return

    gsap.fromTo(card,{
        opacity:0,
        scale:0.85,
        y:60,
    },{
        opacity:1,
        scale:1,
        y:0,
        duration:0.7,
        ease:'power3.out',
        delay:i*0.15,

        scrollTrigger:{
            trigger:card,
            start:'top 85%',
            toggleActions:'play none none reverse',
        },
    })
  })
  return ()=>ScrollTrigger.getAll().forEach(t=>t.Kill())

  },[])
  return (
    <div className="relative bg-[#050a05] min-h-screen flex flex-col justify-center overflow-hidden" style={{
      background:'radial-gradient(ellipse at center, #0d1f0f 0%,#050a05 100%)'}} ref={sectionRef}>
        <div className='relative z-10  h-full text-center'>
            <p className='font-mono md:text-sm text-[10px] text-[#BFC9D1] font-thin mt-8 tracking-widest opacity-0.8 mb-2'><span className="text-[#00FF41] animate-pulse mr-2">■</span>ACT III - THE GRIND MONTAGE</p>
            <div className="cards grid md:grid-cols-2 md:grid-rows-2 grid-rows-4 gap-4 p-3  ">
                <div className="card1 bg-[#1e1e1c] border border-[#BFC9D140] rounded-md p-4 hover:border-[#00FF4180]" ref={el => cardsRef.current[0] = el} style={{ opacity: 0 }}>
                    <div className='flex justify-between'>
                    <div>
                    <p className='text-[#98CD00] text-[1rem] tracking-wide animate-pulse text-xs ' style={{ fontFamily: 'monospace'}}>Stage 01 ...</p>
                    <h1 className='text-[#00FF41]  md:text-[2rem] text-[1rem] font-bebas font-bold tracking-tight'>HTML<span className='text-white font-bebas font-bold tracking-tight' > GRIND</span></h1>
                    <p className='text-[#BFC9D1] tracking-wide text-xs ' style={{fontFamily:'monospace'}}>Day 1 of learning web dev</p>
                    </div>
                    <div className='text-[2rem]'>😤</div>
                    </div>
                    <div className="inner-card bg-[#252522] flex justify-center flex-col border border-[#BFC9D140] rounded-md m-2 text-left overflow-hidden">
                        <div className="header bg-[#2a2a27] text-left overflow-hidden" style={{fontFamily:'monospace'}} >
                            <p className='text-[#BFC9D1] text-xs p-2'>index.html — my masterpiece</p>
                            <div className="m-1 bg-[#BFC9D150] h-[0.5px] "></div>
                        </div>
                        <p className=' text-[10px] md:text-sm text-[#BFC9D180] p-2' style={{fontFamily:'monospace'}}>&lt;!--My amazing website--&gt;</p>
                        <p className=' text-[10px] md:text-sm text-[#BFC9D1] ' style={{fontFamily:'monospace'}}>
                            &lt;html&gt;</p> 
                        <p className=' text-[10px] md:text-sm text-[#00FF4190] whitespace-pre ' style={{fontFamily:'monospace'}}>  &lt;h1&gt;Hello World!&lt;/h1&gt;</p>
                         <p className=' text-[10px] md:text-sm  text-[#BFC9D180] whitespace-pre ' style={{fontFamily:'monospace'}}>  &lt;!--FIX TYPO LATER--&gt;</p>
                         <p className=' text-[10px] md:text-sm text-[#00FF41] whitespace-pre ' style={{fontFamily:'monospace'}}>  &lt;marquee&gt; UNDER CONSTRUCTION🚧 &lt;marquee&gt; </p>
                         <p className=' text-[10px] md:text-sm text-[#BFC9D1] ' style={{fontFamily:'monospace'}}>
                            &lt;html&gt;</p>
                    </div>
                    <p className='text-xs text-[#00FF41] text-left' style={{fontFamily:'monospace'}}>← This was on production for 6 months</p>
                    </div>
                
                <div className="card2 bg-[#1e1e1c] border border-[#BFC9D140] rounded-md p-4 hover:border-[#C8FF0060]" ref={el => cardsRef.current[1] = el} style={{ opacity: 0 }}>
                    <div className='flex justify-between'>
                    <div>
                    <p className='text-[#C8FF0060] text-[1rem] tracking-wide animate-pulse text-xs ' style={{ fontFamily: 'monospace'}}>Stage 02 ...</p>
                    <h1 className='text-[#C8FF00]  md:text-[2rem] text-[1rem] font-bebas font-bold tracking-tight'>CSS<span className='text-white font-bebas font-bold tracking-tight' > CRISIS</span></h1>
                    <p className='text-[#BFC9D1] tracking-wide text-xs ' style={{fontFamily:'monospace'}}>Why won't it just CENTER??</p>
                    </div>
                    <div className='text-[2rem]'>😭</div>
                    </div>
                    <div className="inner-card bg-[#252522] flex justify-center flex-col border border-[#BFC9D140] rounded-md m-2 text-left overflow-hidden">
                        <div className="header bg-[#2a2a27] text-left overflow-hidden" style={{fontFamily:'monospace'}} >
                            <p className='text-[#BFC9D1] text-xs p-2'>styles.css — abandon all hope</p>
                            <div className="m-1 bg-[#BFC9D150] h-[0.5px] "></div>
                        </div>
                        <p className=' text-[10px] md:text-sm text-[#C8FF00] pl-2' style={{fontFamily:'monospace'}}>.center-this &#123;</p>
                        <p className=' text-[10px] md:text-xs text-[#F0B429] p-1' style={{fontFamily:'monospace'}}>
                            position: absolute;</p> 
                        <p className=' text-[10px] md:text-xs text-[#F0B429] whitespace-pre p-1' style={{fontFamily:'monospace'}}>  top: 50%; left: 50%;</p>
                         <p className=' text-[10px] md:text-xs text-[#F0B429] whitespace-pre p-1' style={{fontFamily:'monospace'}}>  margin-top: -50px; <span className='text-[#BFC9D160]'> /* magic */</span> </p>
                         <p className=' text-[10px] md:text-sm text-[#BFC9D160] whitespace-pre ' style={{fontFamily:'monospace'}}> /* tried flexbox, broke everything */ </p>
                         <p className=' text-[10px] md:text-sm text-[#C8FF00] pl-1 ' style={{fontFamily:'monospace'}}>
                            &#125;</p>
                    </div>
                    <p className='text-xs text-[#C8FF00] text-left' style={{fontFamily:'monospace'}}>← "It works! ...on my screen"</p>
                </div>
                <div className="card3 bg-[#1e1e1c] border border-[#BFC9D140] rounded-md p-4 hover:border-[#B6F50080]" ref={el => cardsRef.current[2] = el} style={{ opacity: 0 }} >
                     <div className='flex justify-between'>
                    <div>
                    <p className='text-[#B6F50080] text-[1rem] tracking-wide animate-pulse text-xs ' style={{ fontFamily: 'monospace'}}>Stage 03 ...</p>
                    <h1 className='text-[#B6F500]  md:text-[2rem] text-[1rem] font-bebas font-bold tracking-tight'>JS<span className='text-white font-bebas font-bold tracking-tight' > Purgatory</span></h1>
                    <p className='text-[#BFC9D1] tracking-wide text-xs ' style={{fontFamily:'monospace'}}>async/await? More like async/despair</p>
                    </div>
                    <div className='text-[2rem]'>🤯</div>
                    </div>
                    <div className="inner-card bg-[#252522] flex justify-center flex-col border border-[#BFC9D140] rounded-md m-2 text-left overflow-hidden">
                        <div className="header bg-[#2a2a27] text-left overflow-hidden" style={{fontFamily:'monospace'}} >
                            <p className='text-[#BFC9D1] text-xs p-2'>app.js — it's cursed</p>
                            <div className="m-1 bg-[#BFC9D150] h-[0.5px] "></div>
                        </div>
                        <p className=' text-[10px] md:text-sm text-[#BFC9D180] pl-2' style={{fontFamily:'monospace'}}>// This definitely won't break</p>
                        <p className=' text-[10px] md:text-sm text-[#BFC9D1] pl-1' style={{fontFamily:'monospace'}}>
                            async function <span className='text-[#B6F500]'>fetchData()</span> &#123;</p> 
                        <p className=' text-[10px] md:text-sm text-[#BFC9D1] whitespace-pre ' style={{fontFamily:'monospace'}}>  try&#123;</p>
                         <p className=' text-[10px] md:text-xs text-[#B6F500] whitespace-pre ' style={{fontFamily:'monospace'}}>  const res = await fetch(url); </p>
                         <p className=' text-[10px] md:text-xs text-[#BFC9D1] whitespace-pre ' style={{fontFamily:'monospace'}}>&#125; catch(e) &#123;</p>
                         <p className=' text-[10px] md:text-sm text-[#BFC9D180] md:text-xs p-1 ' style={{fontFamily:'monospace'}}>
                            console.log("it broke again 💀");</p>
                            <p className=' text-[10px] md:text-sm text-[#BFC9D180] md:text-xs p-1 ' style={{fontFamily:'monospace'}}>// TODO: handle this properly</p>
                    </div>
                    <p className='text-xs text-[#C8FF00] text-left' style={{fontFamily:'monospace'}}>← TODO: never addressed</p>
                </div>
                <div className="card4 bg-[#1e1e1c] border border-[#BFC9D140] rounded-md p-4 hover:border-[#53CBF380]" ref={el => cardsRef.current[3] = el} style={{ opacity: 0 }}>
                    <div className='flex justify-between'>
                    <div>
                    <p className='text-[#53CBF380] text-[1rem] tracking-wide animate-pulse text-xs ' style={{ fontFamily: 'monospace'}}>Stage 04 ...</p>
                    <h1 className='text-[#53CBF3]  md:text-[2rem] text-[1rem] font-bebas font-bold tracking-tight'>THE<span className='text-white font-bebas font-bold tracking-tight' > ENLIGHTMENT</span></h1>
                    <p className='text-[#BFC9D1] tracking-wide text-xs ' style={{fontFamily:'monospace'}}>npm install everything, question nothing</p>
                    </div>
                    <div className='text-[2rem]'>🧘</div>
                    </div>
                    <div className="inner-card bg-[#252522] flex justify-center flex-col border border-[#BFC9D140] rounded-md m-2 text-left overflow-hidden">
                        <div className="header bg-[#2a2a27] text-left overflow-hidden" style={{fontFamily:'monospace'}} >
                            <p className='text-[#BFC9D1] text-xs p-2'>package.json — graveyard</p>
                            <div className="m-1 bg-[#BFC9D150] h-[0.5px] "></div>
                        </div>
                        <p className=' text-[10px] md:text-sm text-[#B6F500] pl-2' style={{fontFamily:'monospace'}}>"dependencies": &#123;</p>
                        <p className=' text-[10px] md:text-xs text-[#F0B429] pl-1 whitespace-pre ' style={{fontFamily:'monospace'}}>  "react": "^18.0.0",</p> 
                        <p className=' text-[10px] md:text-xs text-[#BFC9D1] whitespace-pre ' style={{fontFamily:'monospace'}}>   "moment": "^2.29.4",</p>
                         <p className=' text-[10px] md:text-sm  text-[#BFC9D160] whitespace-pre ' style={{fontFamily:'monospace'}}> // ^^ 284KB for .format() </p>
                         <p className=' text-[10px] md:text-xs text-[#F0B429] whitespace-pre ' style={{fontFamily:'monospace'}}>   "left-pad": "1.3.0",</p>
                         <p className=' text-[10px] md:text-sm text-red-500 md:text-xs p-1 ' style={{fontFamily:'monospace'}}>    // 186 packages for Hello World</p>
                            <p className=' text-[10px] md:text-sm text-[#B6F500] md:text-xs p-1 ' style={{fontFamily:'monospace'}}> &#125;</p>
                    </div>
                    <p className='text-xs text-[#53CBF3] text-left' style={{fontFamily:'monospace'}}>← left-pad incident survivor</p>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default ThirdPage
