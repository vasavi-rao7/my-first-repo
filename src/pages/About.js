import './pages.css'
function About(){
    return <main className="about-main">
        <div className='left-column'>
        <h1>Little Lemon</h1>
        <h4 >Chicago</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
        <img src={require('../assets/restauranfood.jpg')} width={400} height={300}/>
            </div></main>
}
export default About;