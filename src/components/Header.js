import Nav from './Nav';
import './common.css'
import logo from "../assets/Logo .svg";
import {linkArray} from '../JsonData'
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