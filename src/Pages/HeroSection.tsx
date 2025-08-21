import React, { useState, useEffect } from 'react'
import hero1 from '../assets/hero2.jpg'
import hero2 from '../assets/hero3.webp'
import hero3 from '../assets/Hero.jpg'
import hero4 from '../assets/hero1.jpg'

const Carousel: React.FC = () => {
  const slides = [hero3, hero1, hero2, hero4]
  const [current, setCurrent] = useState(0)

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

  // Auto-slide with delay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000) // 5 seconds delay
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative w-full h-96 overflow-hidden mb-4 shadow-lg rounded-md'>
      <img
        src={slides[current]}
        alt={`Slide ${current + 1}`}
        className='w-full h-full object-cover transition duration-700 ease-in-out'
      />

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className='absolute left-5 top-1/2 -translate-y-1/2 btn btn-circle'
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-5 top-1/2 -translate-y-1/2 btn btn-circle'
      >
        ❯
      </button>
    </div>
  )
}

export default Carousel
