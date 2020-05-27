// its gonna have state, we use class not functional component
import React from 'react'
import {connect} from 'react-redux'
import {addUser} from '../actions/addUser'


class UserForm extends React.Component{

    state = {
        first_name:'', 
        last_name:''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state)
        this.setState({
            first_name:'', 
            last_name:''
        })
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                     
                    <label>Client's First Name </label>
                    <input type='text'placeholder='Blank' value={this.state.first_name} name="first_name" onChange={this.handleChange}/>
                    <label>Client's Last Name </label>
                    <input type='text'placeholder='Blank' value={this.state.last_name} name="last_name" onChange={this.handleChange}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}
export default connect(null, {addUser})(UserForm)