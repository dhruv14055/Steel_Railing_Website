import category1 from '../assets/category1.jpg'
import category2 from '../assets/category2.jpg'
import category3 from '../assets/category3.jpg'
import category4 from '../assets/category4.jpg'

// Define type for props
interface CategoryListProps {
  onSelect: (category: string) => void
}

const categories = [
  { name: 'स्टील रेलिंग', image: category1 },
  { name: 'ग्लास रेलिंग', image: category2 },
  { name: 'एल्युमिनियम गेट्स', image: category3 },
  { name: 'सीढ़ी रेलिंग', image: category4 },
]

export default function CategoryList({ onSelect }: CategoryListProps) {
  return (
    <div className="px-4 py-12 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
      हमारी उत्पाद श्रेणियाँ
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => onSelect(category.name)}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 cursor-pointer transform hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-700 text-center">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
