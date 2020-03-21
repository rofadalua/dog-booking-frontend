export const editBooking = (info) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/b1/users/${info.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(info)
      })
      .then(response => response.json())
      .then(user => dispatch({type: 'EDIT_BOOKING', payload: user}))
    }
  
  }
  