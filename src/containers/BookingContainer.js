import React from 'react'
import BookingForm from '../components/BookingForm'
import Bookings from '../components/Bookings'

class BookingContainer extends React.Component {


  render() {
    return (
      <div>
          <BookingForm users={this.props.users}/><br/>
          <Bookings bookings={this.props.users && this.props.users.bookings}/>
      </div>

    )

  }

}

export default BookingContainer

//create a function invoke in the render 