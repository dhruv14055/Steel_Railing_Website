import { useState, useEffect } from 'react'

import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'

const images = [banner1, banner2, banner3]

export default function BannerSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full overflow-hidden h-[300px] border sm:h-[400px] md:h-[450px] lg:h-[500px]">
      <img
        src={images[current]}
        className="w-full h-full object-cover transition-all duration-500"
        alt={`Banner ${current + 1}`}
      />
    </div>
  )
}
