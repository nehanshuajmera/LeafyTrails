import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header/header.component'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="pages">
        <Routes>

        </Routes>
      </div>
    </div>
  )
}

export default App
