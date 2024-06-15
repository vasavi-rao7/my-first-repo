import { useState } from "react";
import BookingForm from "../components/BookingForm";
import ConfirmedBooking from "./BookingConfirmationPage";
import '../pages/pages.css'

function BookingPage(){
    const [availableTimes ,setAvailableTimes]=useState('17:00');
    const [isFormSubmit ,setIsFormSubmit]=useState(false);

    const updateTimes =async(date)=>{
        let fetchData = {
            method: 'POST',
            body: JSON.stringify({date:date}),
            headers: new Headers({
              'Content-Type': 'application/json; charset=UTF-8',
              'Access-Control-Allow-Origin': '*'
            })
          }
        let updatedData=await fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js',fetchData)
        .then(response=>response.json())
        .then(data=>setAvailableTimes(data))
        .catch(err=>console.log(err))
        return updatedData;
        
    }
    const submitForm =async(formData)=>{
      setIsFormSubmit(false)
      let fetchData = {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        })
      }
    let updatedData=await fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js',fetchData)
    .then(response=>response.json())
    .then(data=>setAvailableTimes(data))
    .catch(err=>setIsFormSubmit(true))
    return updatedData;
    }
    return (<main class="booking-page-main">{isFormSubmit?<ConfirmedBooking/>:<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />}</main>)
}
export default BookingPage;