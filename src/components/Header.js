import Nav from './Nav';
const linkArray=[
    {
    name:'Home',
    id:11
    },
    {
    name:'About',
    id:12
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
    <header>
        <img src={require('../assets/Logo .svg')}/>
        {linkArray.map((val,i)=>(
            <Nav items={val}/>
        )) }

    </header>
  )
  
  
}
export default Header;