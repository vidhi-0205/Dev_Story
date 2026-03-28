import React from 'react'

const ThirdPage = () => {
  return (
    <div className="relative bg-[#050a05] min-h-screen flex flex-col justify-center overflow-hidden" style={{
      background:'radial-gradient(ellipse at center, #0d1f0f 0%,#050a05 100%)'}}>
        <div className='relative z-10  h-full text-center'>
            <p className='font-mono md:text-sm text-[10px] text-[#BFC9D1] font-thin mt-8 tracking-widest opacity-0.8 mb-2'><span className="text-[#00FF41] animate-pulse mr-2">■</span>ACT III - THE GRIND MONTAGE</p>
            <div className="cards grid md:grid-cols-2 md:grid-rows-2 grid-rows-4 gap-4 bg-[#1a1a18] ">
                <div className="card1 bg-[#1e1e1c] border border-[#00FF4150] rounded-sm text-left p-2">
                    <p className='text-[#98CD00] text-[1rem] ' style={{ fontFamily: 'monospace'}}>Stage 01</p>
                    <h1 className='text-[#00FF41]'>The HTML<span> GRIND</span></h1>
                </div>
                <div className="card2 bg-[#1e1e1c] border border-[#00FF4150] rounded-sm">hf</div>
                <div className="card3 bg-[#1e1e1c] border border-[#00FF4150] rounded-sm">hdk</div>
                <div className="card4 bg-[#1e1e1c] border border-[#00FF4150] rounded-sm">bf</div>

            </div>
        </div>
      
    </div>
  )
}

export default ThirdPage
