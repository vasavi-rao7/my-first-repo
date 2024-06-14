import Nav from './Nav';
import './common.css'
import logo from "../assets/Logo .svg";
const linkArray=[
    {
    name:'Home',
    id:11,
    path:'/'
    },
    {
    name:'About',
    id:12,
    path:'/about'
    },
    {
    name:'Menu',
    id:13
    },
    {
        name:'Reservations',
        id:14,
        path:'/booking-form'
    },
    {
        name:'Order Online',
        id:15
    },
    {
        name:'Login',
        id:16
    }
]
function Header(){
  return (
    <header className='header-container'>
        <img src={logo} alt='logo'/>
        {linkArray.map((val,i)=>(
            <Nav items={val}/>
        )) }

    </header>
  )
  
  
}
export default Header;