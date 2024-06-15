import CustomButton from '../components/Button';
import './pages.css'
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return (
    <main className="home-main"> 
        <div className='left-column'>
        <h1 style={{color:'#F4CE14'}}>Little Lemon</h1>
        <h4 style={{color:'#ffffff'}}>Chicago</h4>
        <p style={{color:'#ffffff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <CustomButton  onClick={()=>{navigate('/booking-form')}} title='Reserve a Table'/>
        </div>
            <img src={require('../assets/restauranfood.jpg')} width={400} height={300}/>
        </main>)
}
export default Home;