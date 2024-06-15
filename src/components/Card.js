import deliveryIcon from '../assets/Dish icon.svg'
function Card(props){
    return <div className='main-card-div'>
        <img src={props.cardData.imgUrl} width={400} height={184}/>
        <div className='special-data-val'>
        <div style={{display:'flex',justifyContent:'space-between'}}><h4>{props.cardData.title}</h4>
        <h4 style={{color:'#EE9972'}}>{props.cardData.price}</h4>
        </div>
        
        <p>{props.cardData.description}</p>
        <div style={{display:'flex'}} >
        <p style={{marginRight:'10px'}}>Order delivery</p>
        <img src={deliveryIcon}/>
        </div>
        </div>
    </div>
}
export default Card;