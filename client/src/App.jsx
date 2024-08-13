import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header/header.component'
import { HomePage } from './pages/homepage/homepage-component'
import { Footer } from './components/footer/footer.component'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="pages">
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App;