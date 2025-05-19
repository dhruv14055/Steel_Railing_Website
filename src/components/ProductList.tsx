import steel1 from '../assets/steel1.jpg'
import steel2 from '../assets/steel2.jpg'
import steel3 from '../assets/steel3.jpg'

import glass1 from '../assets/glass1.jpg'
import glass2 from '../assets/glass2.jpg'
import glass3 from '../assets/glass3.jpg'

import grill1 from '../assets/gate1.jpg'
import grill2 from '../assets/gate2.jpg'
import grill3 from '../assets/gate3.jpg'

import stair1 from '../assets/stair1.jpg'
import stair2 from '../assets/stair2.jpg'
import stair3 from '../assets/stair3.jpg'

interface ProductListProps {
  category: string
}

// ✅ Correct mapping
const productData: { [key: string]: string[] } = {
  'स्टील रेलिंग': [steel1, steel2, steel3],
  'ग्लास रेलिंग': [glass1, glass2, glass3],
  'एल्युमिनियम गेट्स': [grill1, grill2, grill3],
  'सीढ़ी रेलिंग': [stair1, stair2, stair3],
}

export default function ProductList({ category }: ProductListProps) {
  const products = productData[category] || []

  return (
    <div className="bg-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {category}
      </h2>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((src, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={src}
                alt={`${category} ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No products available for this category.
        </p>
      )}
    </div>
  )
}

