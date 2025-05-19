import { useState } from 'react'
import Header from './components/Header'
import BannerSlider from './components/BannerSlider'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Steel Railings')

  return (
    <div className="font-sans">
      <Header />
      <BannerSlider />
      <CategoryList onSelect={setSelectedCategory} />
      <ProductList category={selectedCategory} />
      <Footer />
    </div>
  )
}

export default App
