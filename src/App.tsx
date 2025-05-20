import { useState } from 'react'
import Header from './components/Header'
import BannerSlider from './components/BannerSlider'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="font-sans">
      <Header />
      <BannerSlider />
      <CategoryList onSelect={setSelectedCategory} />
      {selectedCategory && <ProductList category={selectedCategory} />}
      <Footer />
    </div>
  )
}

export default App
