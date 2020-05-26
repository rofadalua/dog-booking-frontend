import React from 'react'
import {Redirect} from 'react-router-dom'
import BookingContainer from '../containers/BookingContainer'
import UserEdit from './UserEdit'
import {connect} from 'react-redux'
 


const UserAccount = (props) => {
  
    const getsingleUser = () => {
        console.log(props.users)
        for (let i = 0; i < props.users.length; i++){
            console.log(props.match.params.id, props.users[i].id)
            if (Number(props.match.params.id) === props.users[i].id)
                return props.users[i]
        } 
        return null 
    }
    let user = getsingleUser()
   
     return(
         <div>
             <h2>
                 {user ? null : <Redirect to='/users'/>}
                 {user ? user.first_name : null} {user ? user.last_name :null}
             </h2>
                 <BookingContainer user={user}/><br/>
                 <h4>Booking Form</h4>
                 <UserEdit user={user}/>
        </div>
        
    )
    
}


let mapStateToProps = (state) => {
    return {
        users: state.users,
        loading: state.loading
    }
}


export default connect (mapStateToProps) (UserAccount)
//Redirect works with link to only -//this account will show only if the link to is on users and if passing through routeProps
