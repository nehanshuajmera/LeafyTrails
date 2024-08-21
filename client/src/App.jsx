import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header/header.component'
import { HomePage } from './pages/homepage/homepage-component'
import { Footer } from './components/footer/footer.component'
import ScrollToSection from './components/scroll-to-section/scroll-to-section'
import useScrollToTop from './hooks/scroll-to-top/scroll-to-top'

const App = () => {
  useScrollToTop();
  return (
    <div className="App">
      <Header />
      <ScrollToSection />
      <div className="pages">
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;