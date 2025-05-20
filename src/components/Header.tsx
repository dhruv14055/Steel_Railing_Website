import { useState } from 'react'
import uncleImage from '../assets/uncle.jpg'
import '../App.css' // 👈 Add this if your CSS is in App.css

export default function Header() {
  const [showContact, setShowContact] = useState(false)

  return (
    <header className="bg-gray-800 text-white border px-4 py-5 flex justify-between items-center relative shadow-lg">
      <h1 className="shop-name">श्री श्याम स्टील & ग्लास एल्युमिनियम</h1>

      <button
        onClick={() => setShowContact(!showContact)}
        className="bg-white hover:cursor-pointer text-black px-4 py-2 rounded"
      >
        संपर्क करें
      </button>

      {showContact && (
        <div className="absolute top-full right-4 mt-4 bg-white text-black rounded-xl shadow-2xl p-6 w-96 z-50 border border-gray-300">
          <div className="flex justify-end">
            <button
              onClick={() => setShowContact(false)}
              className="text-gray-500 hover:text-red-500 text-xl font-bold -mt-2 -mr-2"
            >
              &times;
            </button>
          </div>

          <div className="flex items-center gap-6 mt-2">
            <img
              src={uncleImage}
              alt="Uncle"
              className="w-25 h-25 rounded-full object-top border-2 border-gray-500"
            />
            <div>
              <h2 className="text-xl font-semibold">धीरज बैरागी</h2>
              <p className="text-sm text-gray-600">Owner</p>
              <a
                href="tel:+918871017326"
                className="text-blue-600 hover:underline text-lg font-medium block mt-2"
              >
                +91 8871017326
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
