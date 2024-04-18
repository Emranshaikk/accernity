'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinar() {

    const featuredWebinar = [
        {
            title: " Understanding Music theory",
            description: "Dive deep into the fundamentals of music theory and enchance your musical skills",
            slug: 'understanding-misic-theory',
            isFeatured: true,
        },
        {
            title: " Understanding Music theory",
            description: "Dive deep into the fundamentals of music theory and enchance your musical skills",
            slug: 'understanding-misic-theory',
            isFeatured: true,
        },
        {
            title: " Understanding Music theory",
            description: "Dive deep into the fundamentals of music theory and enchance your musical skills",
            slug: 'understanding-misic-theory',
            isFeatured: true,
        },
        {
            title: " Understanding Music theory",
            description: "Dive deep into the fundamentals of music theory and enchance your musical skills",
            slug: 'understanding-misic-theory',
            isFeatured: true,
        },
        {
            title: " Understanding Music theory",
            description: "Dive deep into the fundamentals of music theory and enchance your musical skills",
            slug: 'understanding-misic-theory',
            isFeatured: true,
        },
        {
            title: " Understanding Music theory",
            description: "Dive deep into the fundamentals of music theory and enchance your musical skills",
            slug: 'understanding-misic-theory',
            isFeatured: true,
        },
    ]




  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase"> Featured Webinars </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white"> Enhance Your Musical Journey</p>
            </div>

            <div className="mt-10">
                <HoverEffect  items = {featuredWebinar.map(webinar=> (
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: '/'
                    }
                )) }
                />
            </div>



            <div className="mt-10 text-center">
            <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 ">
              View All webinars
            </Link>
            
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinar