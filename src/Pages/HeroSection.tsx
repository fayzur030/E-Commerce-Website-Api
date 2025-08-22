import React, { useState, useEffect } from 'react'
import heroImage1 from '../assets/heroImage1.jpg'
import heroImage2 from '../assets/heroImage2.avif'
import heroImage3 from '../assets/heroImage3.png'
import heroImage4 from '../assets/heroImage4.png'


const Carousel: React.FC = () => {
  const slides = [heroImage1, heroImage2, heroImage3, heroImage4]
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
  }, [slides.length])

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
