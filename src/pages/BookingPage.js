import { useState } from "react";
import BookingForm from "../components/BookingForm";

function BookingPage(){
    const [availableTimes ,setAvailableTimes]=useState('17:00');
    function updateTimes(date){
        return availableTimes;
    }
    return <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
}
export default BookingPage;