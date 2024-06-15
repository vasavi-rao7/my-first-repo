import './common.css'
import Logo from '../assets/Logo .svg'

function Footer(){
  return  <footer className="container">
    <img src={Logo}/>
    <div>
      <h5>Doormat navigation</h5>
      <p>Home</p>
      <p>About</p>
<p>menu</p>
<p>Reservations</p>
<p>Order Online</p>
<p>Login</p>
      </div>
    <div><h5>Contact</h5>
    <p>Adress</p>
<p>phone number</p>
<p>email</p>
</div>
    <div><h5>Social media links</h5>
    <p>Adress</p>
<p>phone number</p>
<p>email</p></div>
  </footer>
}
export default Footer;