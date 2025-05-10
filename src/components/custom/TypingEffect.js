'use client'
import { Typewriter } from 'react-simple-typewriter'

const TypingEffect = () => {
  return (
    <span className='text-blue-600 mx-2'>
      
      <Typewriter
      words={['Java', 'Python', 'Web Development', 'Data Science']}
      loop={0}
      cursor
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    
    />
    </span>
  )
}

export default TypingEffect