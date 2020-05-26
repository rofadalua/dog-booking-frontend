import React from 'react'
import BookingForm from '../components/BookingForm'
import Bookings from '../components/Bookings'

class BookingContainer extends React.Component {


  render() {
    return (
      <div>
          <BookingForm user={this.props.user}/><br/>                    
          <Bookings bookings={this.props.user && this.props.user.bookings}/>
      </div>

    )

  }

}

export default BookingContainer

//create a function invoke in the render 