import React from 'react'
import {Redirect} from 'react-router-dom'
import BookingContainer from '../containers/BookingContainer'
import UserEdit from './UserEdit'
 

const UserAccount = (props) => {
  
    let users = props.users[props.match.params.id - 1]  //using my routerprops and matching the user id 
     return(
         <div>
             <h2>
                 {users ? null : <Redirect to='/users'/>}
                 {users ? users.first_name : null} {users ? users.last_name :null}
             </h2>
                 <BookingContainer users={users}/><br/>
                 <h4>Edit Booking</h4>
                 <UserEdit users={users}/>
        </div>
        
    )
    
}


export default UserAccount
//Redirect works with link to only -//this account will show only if the link to is on users and if passing through routeProps
