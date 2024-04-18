"use client"

import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip"

const instructors = [
    {
        id: 1,
        name: 'Elena Briggs',
        designation: 'vocal Coach',
        image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'John Mathew',
        designation: 'vocal Coach',
        image: "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: 'Elena Briggs',
        designation: 'vocal Coach',
        image: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        name: 'Elena Briggs',
        designation: 'vocal Coach',
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        name: 'Elena Briggs',
        designation: 'vocal Coach',
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        name: 'Elena Briggs',
        designation: 'vocal Coach',
        image: "https://images.unsplash.com/photo-1513673054901-2b5f51551112?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl max-auto flex flex-col items-center justify-center h-full">
            <div>
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
                <p className="text-base md:text-lg text-white text-center mb-4"> Discover the talented Professionals who will guide your musical journey</p>
            </div>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items= {instructors}/> 
            </div>

        </WavyBackground>
    </div>
  )
}

export default Instructors