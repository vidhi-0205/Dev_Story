import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import SecondPage from "./SecondPage"

  const ERRORS = [
  "Error: Expected ; but found a coffee cup",
  "TypeError: Cannot read properties of undefined",
  "ReferenceError: $ is not defined (forgot jQuery)",
  "SyntaxError: Unexpected token '<' in JSON",
  "git push origin main --force  # uh oh",
  "npm ERR! peer dep missing: life@*",
  "Fatal: accidentally committed node_modules",
]

const LandingPage = () => {
  const wrapperRef=useRef(null)
  const textRef=useRef(null)
  const [currentError,setCurrentError]=useState(0)
  const [visible,setVisible]=useState(true)

  useEffect(()=>{
    const el=textRef.current
    const handleMouseMove=(e)=>{
  const rect=el.getBoundingClientRect()
  const centerX=rect.left+rect.width / 2
  const centerY=rect.top+rect.height /2

  const dx=e.clientX-centerX
  const dy = e.clientY-centerY

  const strength=0.02
  const rotateY=dx*strength 
  const rotateX=-dy*strength

  gsap.to(el,{
    rotateX,
    rotateY,
    duration:0.6,
    ease:'power3.out',
    transformOrigin:'center center'
  })
}
 const handleMouseLeave=()=>{
  gsap.to(el,{
    rotateX:0,
    rotateY:0,
    duration:0.8,
    ease:'elastic.out(1,0.5)'
  })
 }
 window.addEventListener('mousemove',handleMouseMove)
 window.addEventListener('mouseleave',handleMouseLeave)

    const interval=setInterval(()=>{
      setVisible(false)
      setTimeout(() => {
        setCurrentError(prev => (prev + 1) % ERRORS.length)
        setVisible(true)
      }, 300)

    }, 2500)
    return ()=>{clearInterval(interval)
      window.removeEventListener('mousemove',handleMouseLeave)
      window.removeEventListener('mouseleave',handleMouseLeave)
    }
  },[])

  const CODE_WORDS=[
    {text:'//TODO', top:'58%', left:'10%', opacity:0.18 ,size:'3rem'},
    {text:' npm i ', top:'12%', left:'13%', opacity:0.16,size:'4rem'},
    {text:'<div>', top:'20%', left:'25%', opacity:0.2, size:'8rem'},
    {text:'git push', top:'26%', left:'60%', opacity:0.2,size:'2rem'},
    {text:'sudo rm -rf', top:'32%',left:'12%',opacity:0.12,size:'5rem'},
    {text:'{ }', top:'45%',left:'56%',opacity:0.18,size:'2rem'},
    {text:'console.log',top:'68%',left:'72%',opacity:0.16,size:'3rem'},
    {text:'=>',top:'86%',left:'89%',opacity:0.12,size:'2rem'},
    {text:'const x=0',top:'92%',left:'92%',opacity:0.18,size:'4rem'},
    {text:'//TODO', top:'75%', left:'5%', opacity:0.18 ,size:'40%'},
    {text:'console.log',top:'84%',left:'41%',opacity:0.16,size:'3rem'},
    {text:'git add .', top:'16%', left:'80%', opacity:0.2,size:'2rem'},
    {text:'npm run dev',top:'73%',left:'85%',opacity:0.18,size:'3rem'}
  ]
const ITEMS = [
  { text: 'COFFEE++',    emoji: '☕'  },
  { text: 'BUG SQUASHED',emoji: '🐛'  },
  { text: 'PROD IS DOWN', emoji: '🔥' },
  { text: 'LG APPROVED',  emoji: '✅'  },
  { text: 'SHIPPING',     emoji: '🚀' },
  { text: 'DEADLINE: 5MIN',emoji: '💀' },
]

  return (
    <div className="relative inset-0 bg-[#050a05] min-h-screen" style={{
      background:'radial-gradient(ellipse at center, #0d1f0f 0%,#050a05 100%)'
    }}>
      <div className=" absolute inset-0 pointer-events-none"
      style={{
        background:`repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0,0,0,0.45) 5px,
        rgba(0,0,0,0.45) 6px
        )`
      }}
      >
        </div>
<div className="relative z-10 flex items-center justify-center min-h-screen">
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {CODE_WORDS.map((word,i)=>(
      <span
       key={i}
       className='font-mono absolute select-none'
       style={{
        top:word.top,
        left:word.left,
        opacity:word.opacity,
        size:word.size,
        color: '#BFC9D1',
       }}
      >{word.text}</span>
    ))}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <p className="font-mono md:text-sm text-[10px] text-[#BFC9D1] font-thin mt-8 tracking-widest opacity-0.8 mb-2"><span className="text-[#00FF41] animate-pulse">■</span> ACT I — THE BEGINNING OF SUFFERING</p>
          <div ref={wrapperRef} style={{perspective:'800px'}}>
          <h1 className="leading-none font-black text-[5rem] md:text-[8rem] font-display" ref={textRef}>
            <span className="text-white block">Hello</span>
            <span className="block text-[#00FF41]"
            style={{
              textShadow:`
                0 0 10px #00FF41,
                0 0 20px #00FF41,
                0 0 80px rgba(0,255,65,0.4),
                0 0 40px rgba(0,250,0,0.2)
              `
            }}
            >World!</span>
            
            </h1>
            </div>
            <p className="font-mono md:text-sm text-[10px] text-[#BFC9D1] font-thin mt-8 tracking-widest"><span className="text-[#00FF41] ">$</span> every dev's journey starts with a single</p>
            <span className="text-pink-400 md:text-sm text-[10px] font-mono font-thin tracking-widest">console.log()</span>          
        <div style={{
          background:'#5E000680',
          border:'1px solid #D53E0F',
          borderRadius:'10px',
          padding:'10px 15px',
          fontFamily: 'JetBrains Mono, monospace',
        }} className="mt-10 w-[60%] md:w-[40%]">
          <span style={{ opacity: 0.5 }} className="text-[#740A03] text-[6px] md:text-sm">•</span>
          {' '}
          <span className="text-[#740A03] text-[6px] md:text-sm mr-2 md:mr-4 " >ERROR</span>
          <span className='text-[#D53E0F] text-[10px] md:text-base animate-pulse'>{ERRORS[currentError]}</span>
          <span  className="text-[#D53E0F] animate-pulse">|</span>
          
        </div>
        </div>
      </div>
      </div>
      <div style={{
        overflow:'hidden',
        borderTop:'1px solid rgba(255,255,255,0.08)',
        borderBottom:'1px solid rgba(255,255,255,0.08)',
        background:'#050a05',
        padding:'10px 0',
      }}>
        <div className="marquee-track flex " style={{
          width:'max-content',
        }}>
          {[...ITEMS,...ITEMS].map((item,i) => (

            <div
            key={i}
            className="flex items-center whitespace-npwrap text-[1rem] opacity-75"
            style={{color:'#BFC9D1',
              fontFamily:'monospace',
              paddingRight:'48px',
            }}
            >
              <span className="mr-4">{item.emoji}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default LandingPage
