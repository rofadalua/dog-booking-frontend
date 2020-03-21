import React from 'react'

const Bookings = (props) => {

   
        return(
            <div> 
                {props.bookings && props.bookings.map(booking => 
                <li key={booking.id}> {booking.pet_name} - {booking.phone_number} - {booking.email} - {booking.date} - {booking.description}</li>
                )}
            </div>
        )
}

export default Bookings

//if props.bookings && is undefined it wont array it (map)