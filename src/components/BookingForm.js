import React from 'react'
import {connect} from 'react-redux'
import {addBooking} from '../actions/addBooking'

class BookingForm extends React.Component {


    state={
        pet_name: '',
        phone_number:'',
        email:'',
        date:'',
        description:''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBooking(this.state, this.props.user.id)   //this.id?
        this.setState({
            pet_name: '',
            phone_number:'',
            email:'',
            date:'',
            description:''
        })
    }
    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                    <label>Pet's Name: </label>
                    <input type='text'placeholder='Blank' value={this.state.pet_name} name="pet_name" onChange={this.handleChange}/>
                    <label>Phone Number: </label>
                    <input type='tel'placeholder='Blank' value={this.state.phone_number} name="phone_number" onChange={this.handleChange}/>
                    <label>Email: </label>
                    <input type='text'placeholder='Blank' value={this.state.email} name="email" onChange={this.handleChange}/>
                    <label>Date:</label>
                    <input type='date'placeholder='Blank' value={this.state.date} name="date" onChange={this.handleChange}/>
                    <label>Description:</label>
                    <input type='text'placeholder='Blank' value={this.state.description} name="description" onChange={this.handleChange}/>
                    
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}
export default connect(null, {addBooking})(BookingForm)