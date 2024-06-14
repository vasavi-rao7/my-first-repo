import { useReducer, useState } from "react";
function reducer(state, action) {
    if(action.type==='changed_time'){
      return {
        timeVal: action.nextTime
      };
    }
    }

function BookingForm(props){
    const [data,setDate]=useState('');
    const [time,setTime]=useState('17:00');
    const [guest,setGuest]=useState(0);
    const [occasion,setOccasion]=useState(0);
    const [state, dispatch] = useReducer(reducer, { timeVal: time });
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert('Form succesfully submitted');
    }

    return(
    <form style={{display: 'grid', maxWidth: '200px', gap: "20px"}} >
        <label for="res-date">Choose date</label>
   <input type="date" id="res-date" value={data} onChange={(e)=>setDate(e.target.value)}/>
   <label for="res-time">Choose time</label>
   <select id="res-time " value={state.timeVal} onChange={(e)=>{
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
   <input type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={(e)=>setGuest(e.target.value)}/>
   <label for="occasion">Occasion</label>
   <select id="occasion" value={occasion} onChange={(e)=>{setOccasion(e.target.value)}}>
      <option value={'Birthday'}>Birthday</option>
      <option value={'Anniversary'}>Anniversary</option>
   </select>
   <button onClick={(e)=>handleSubmit(e)} >Make Your reservation</button>

    </form>)
}
export default BookingForm;