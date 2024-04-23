
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Parallax from './components/Parallaxx.jsx'
import Feautures from './components/Feautures.jsx'
function App() {

  return (
    <div className='f bg-slate-950 text-white snap-mandatory snap-y'>
        <Sidebar />

      <div className='ml-44'>
        <Navbar />
        <Hero />
      </div>
      <Parallax />
      <Feautures />
    </div>
  )
}

export default App
