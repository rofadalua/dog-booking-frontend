export const addBooking = (booking, userId) => {
  console.log(booking, userId)
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    fetch(`http://localhost:3000/api/b1/users/${userId}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(user => dispatch({ type: 'ADD_BOOKING', payload: user}))

  }
}

//addbooking action takes a booking object userId, dispatch loading (usereducer) is sets to true 
//then fetch creates booking with userId and booking object, then dispatch it "ADD BOOKING" with the booking
//loading happens before fetch - 