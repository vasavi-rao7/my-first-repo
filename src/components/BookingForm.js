import { useEffect, useReducer, useState } from "react";
import './common.css'
function reducer(state, action) {
    if(action.type==='changed_time'){
      return {
        timeVal: action.nextTime
      };
    }
    }
const initialState={
  date:'',
  time:'17:00',
  guest:0,
  ocassion:''
}
function BookingForm(props){
    const [formData,setFormData]=useState(initialState)
    const [state, dispatch] = useReducer(reducer, { timeVal: formData.time });
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.submitForm(formData);
    }
   
const handleChangeDate=(e)=>{
  setFormData({...formData,date:e.target.value});
  props.updateTimes(e.target.value)
}
    return(
      <div className="booking-form-main">
        <img src={require('../assets/restaurant.jpg')} width={500} height={600}/>
        <>
          <form style={{display: 'grid', maxWidth: '200px', gap: "20px",margin:'24px'}} >
        <label for="res-date">Choose date</label>
   <input type="date" id="res-date" value={formData.date} style={{width:'500px'}} onChange={(e)=>handleChangeDate(e)}/>
   <label for="res-time">Choose time</label>
   <select id="res-time " value={state.timeVal} onChange={(e)=>{
    setFormData({...formData,time:e.target.value});
    dispatch({ type: 'changed_time', nextTime: e.target.value })
   }}>
      <option value={'17:00'}>17:00</option>
      <option value={'18:00'}>18:00</option>
      <option value={'19:00'}>19:00</option>
      <option value={'20:00'}>20:00</option>
      <option value={'21:00'}>21:00</option>
      <option value={'22:00'}>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" value={formData.guest} onChange={(e)=> setFormData({...formData,guest:e.target.value})}/>
   <label for="occasion">Occasion</label>
   <select id="occasion" value={formData.ocassion} onChange={(e)=>{ setFormData({...formData,ocassion:e.target.value})}}>
      <option value={'Birthday'}>Birthday</option>
      <option value={'Anniversary'}>Anniversary</option>
   </select>
   <button onClick={(e)=>handleSubmit(e)} >Make Your reservation</button>

    </form>
    </>
    </div>)
}
export default BookingForm;