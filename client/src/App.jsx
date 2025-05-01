import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
 
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-48 min-h-screen bg-gradient-to-b from-teal-50 to-orange-100'>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/result' element = {<Result/>} />
        <Route path = '/buy' element = {<BuyCredit/>} />
      
      
      
      </Routes>

   
    </div>
  )
}

export default App
