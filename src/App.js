import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BookingPage from './pages/BookingPage';
import OrderOnline from './pages/OrderOnline';
function App() {
  return (
    <main className='main-container'>
      <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/booking-form' element={<BookingPage/>}/>
    <Route path='/order-online' element={<OrderOnline/>}/>
    </Routes>
    
      <Main/>
      <Footer/>
      
    </main>
  );
}

export default App;
