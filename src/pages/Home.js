import { cardData } from '../JsonData';
import CustomButton from '../components/Button';
import Card from '../components/Card';
import './pages.css'
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return (
    <main > 
    <div className="home-main">
        <div className='left-column'>
        <h1 style={{color:'#F4CE14'}}>Little Lemon</h1>
        <h4 style={{color:'#ffffff'}}>Chicago</h4>
        <p style={{color:'#ffffff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <CustomButton  onClick={()=>{navigate('/booking-form')}} title='Reserve a Table'/>
        </div>
            <img src={require('../assets/restauranfood.jpg')} width={400} height={300}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'24px'}}>
            <h1>Special</h1>
            <CustomButton onClick={()=>{navigate('/order-online')}} title='Online Menu' backgroundColor='#000000' color='#ffffff' height='50px'/>
            </div>
          
            <div style={{display:'flex'}}>
                {cardData.map((val)=><Card cardData={val}/>)}
            </div>
        </main>)
}
export default Home;