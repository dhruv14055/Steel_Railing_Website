interface CategoryListProps {
  onSelect: (category: string) => void
}

const categories = [
  'स्टील रेलिंग',
  'ग्लास रेलिंग',
  'एल्युमिनियम गेट्स',
  'सीढ़ी रेलिंग',
]

export default function CategoryList({ onSelect }: CategoryListProps) {
  return (
    <div className="py-10 px-4 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        हमारी उत्पाद श्रेणियाँ :-
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onSelect(category)}
            className="text-lg font-semibold text-gray-700 hover:text-white hover:bg-green-600 px-6 py-3 rounded-xl border border-gray-300 transition duration-300 ease-in-out"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
