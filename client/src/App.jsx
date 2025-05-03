import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'

function App() {
  const {showLogin} = useContext(AppContext)
 
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-48 min-h-screen bg-gradient-to-b from-teal-50 to-orange-100'>
      <Navbar/>
     { showLogin &&  <Login/>}
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/result' element = {<Result/>} />
        <Route path = '/buy' element = {<BuyCredit/>} />
      
      
      
      </Routes>
      <Footer/>

   
    </div>
  )
}

export default App
