"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const musicSchooltestimonials = [
    {
        quote:
        'Joining the music school transform my understanding of music and helped me to truly discover my own sound. The instructors are world-class',
        name: "Alex Johnson",
        title: "Guitar Student",
    },

    {
        quote:
        'Joining the music school transform my understanding of music and helped me to truly discover my own sound. The instructors are world-class',
        name: "Alex Johnson",
        title: "Guitar Student",
    },

    {
        quote:
        'Joining the music school transform my understanding of music and helped me to truly discover my own sound. The instructors are world-class',
        name: "Alex Johnson",
        title: "Guitar Student",
    },

    {
        quote:
        'Joining the music school transform my understanding of music and helped me to truly discover my own sound. The instructors are world-class',
        name: "Alex Johnson",
        title: "Guitar Student",
    },

    {
        quote:
        'Joining the music school transform my understanding of music and helped me to truly discover my own sound. The instructors are world-class',
        name: "Alex Johnson",
        title: "Guitar Student",
    },

    {
        quote:
        'Joining the music school transform my understanding of music and helped me to truly discover my own sound. The instructors are world-class',
        name: "Alex Johnson",
        title: "Guitar Student",
    },

    {
        quote:
        'Joining the music school transform my understanding of music and helped me to truly discover my own sound. The instructors are world-class',
        name: "Alex Johnson",
        title: "Guitar Student",
    },

];

function MusicSchooltestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">

        <h2 className="text-6xl font-bold text-center mb-8 z-10 from-neutral-50 text-white">Hear Our Harmony: Voices of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchooltestimonials}
                direction="right"
                speed="slow"
            />
            </div>
        </div>
        </div>
  )
}

export default MusicSchooltestimonials