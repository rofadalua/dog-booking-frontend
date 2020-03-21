export const deleteBooking = (bookingId, userId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/b1/users/${userId}/bookings/${bookingId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(user => dispatch({type: 'DELETE_BOOKING', payload: user}))
    }
  }
  