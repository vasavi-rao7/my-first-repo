import Nav from './Nav';
import './common.css'
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
        id:14
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
        <img src={require('../assets/Logo .svg')} alt='logo'/>
        {linkArray.map((val,i)=>(
            <Nav items={val}/>
        )) }

    </header>
  )
  
  
}
export default Header;