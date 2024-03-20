import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className='portfolio'>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
