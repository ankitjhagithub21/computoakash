import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Banner = () => {
  return (
 <section className="bg-zinc-50 dark:bg-zinc-950 relative">
  <div className="absolute inset-0 z-0">
    <img
      alt="Coding Journey Background"
      loading="lazy"
      src='https://images.unsplash.com/photo-1598978028953-799807c097b5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      className="object-cover w-full h-full bg-image opacity-20 dark:opacity-5"
      
      
    
    />
  </div>
  <div className="flex flex-col justify-center text-center py-12 md:py-20 px-4 sm:px-6 relative z-10">
    <h2 className="text-3xl sm:text-6xl font-extrabold mb-4 sm:mb-6 text-zinc-900 dark:text-zinc-100 tracking-wide">
      Your Future Starts Here !
    </h2>
    <p className="text-base sm:text-xl text-zinc-700 dark:text-zinc-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
      Learn coding step-by-step with India's most loved programming mentor.
    </p>
    <div className="flex justify-center">
      <Link href="/login">
        <Button >Start Now</Button>
      </Link>
    </div>
  </div>
</section>

  )
}

export default Banner