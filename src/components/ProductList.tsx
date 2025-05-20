import steel1 from '../assets/steel1.jpg'
import steel2 from '../assets/steel2.jpg'
import steel3 from '../assets/steel3.jpg'
import steel4 from '../assets/steel4.jpg'
import steel5 from '../assets/steel5.jpg'
import steel6 from '../assets/steel6.jpg'
import steel7 from '../assets/steel7.jpg'
import steel8 from '../assets/steel8.jpg'
import steel9 from '../assets/steel9.jpg'
import steel10 from '../assets/steel10.jpg'

import glass1 from '../assets/glass1.jpg'
import glass2 from '../assets/glass2.jpg'
import glass3 from '../assets/glass3.jpg'
import glass4 from '../assets/glass4.jpg'
import glass5 from '../assets/glass5.jpg'
import glass6 from '../assets/glass6.jpg'
import glass7 from '../assets/glass7.jpg'
import glass8 from '../assets/glass8.jpg'
import glass9 from '../assets/glass9.jpg'
import glass10 from '../assets/glass10.jpg'

import gate1 from '../assets/gate1.jpg'
import gate2 from '../assets/gate2.jpg'
import gate3 from '../assets/gate3.jpg'
import gate4 from '../assets/gate4.jpg'
import gate5 from '../assets/gate5.jpg'
import gate6 from '../assets/gate6.jpg'
import gate7 from '../assets/gate7.jpg'
import gate8 from '../assets/gate8.jpg'
import gate9 from '../assets/gate9.jpg'
import gate10 from '../assets/gate10.jpg'

import stair1 from '../assets/stair1.jpg'
import stair2 from '../assets/stair2.jpg'
import stair3 from '../assets/stair3.jpg'
import stair4 from '../assets/stair4.jpg'
import stair5 from '../assets/stair5.jpg'
import stair6 from '../assets/stair6.jpg'
import stair7 from '../assets/stair7.jpg'
import stair8 from '../assets/stair8.jpg'
import stair9 from '../assets/stair9.jpg'
import stair10 from '../assets/stair10.jpg'

interface ProductListProps {
  category: string
}

const productData: { [key: string]: string[] } = {
  'स्टील रेलिंग': [steel1, steel2, steel3, steel4, steel5, steel6, steel7, steel8, steel9, steel10],
  'ग्लास रेलिंग': [glass1, glass2, glass3, glass4, glass5, glass6, glass7, glass8, glass9, glass10],
  'एल्युमिनियम गेट्स': [gate1, gate2, gate3, gate4, gate5, gate6, gate7, gate8, gate9, gate10],
  'सीढ़ी रेलिंग': [stair1, stair2, stair3, stair4, stair5, stair6, stair7, stair8, stair9, stair10],
}

export default function ProductList({ category }: ProductListProps) {
  const products = productData[category] || []

  return (
    <div className="bg-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {category}
      </h2>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((src, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow hover:shadow-xl transition duration-300 overflow-hidden w-full"
            >
              <img
                src={src}
                alt={`${category} ${index + 1}`}
                className="w-full h-[280px] object-cover object-center rounded-md"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          इस श्रेणी के लिए कोई उत्पाद उपलब्ध नहीं है।
        </p>
      )}
    </div>
  )
}
