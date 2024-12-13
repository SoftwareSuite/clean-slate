import {Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className='min-h-screen bg-fuchsia-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      <Routes>

        <Route path='/' element={ <Home/> }/>
        <Route path='/result' element={ <Result/> }/>
        <Route path='/buy' element={ <BuyCredit/> }/>

      </Routes>
      <Footer/>
    </div>
  )
}
