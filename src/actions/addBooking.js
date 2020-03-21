export const addBooking = (booking,userId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/b1/users/${userId}/bookings`, {   //do i use boookingID?
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(booking =>  dispatch({type: 'ADD_BOOKING', payload: booking}))
          
    }
  }