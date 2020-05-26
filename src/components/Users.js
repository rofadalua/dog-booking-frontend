import React from 'react'
import {Route, Link} from 'react-router-dom'
import UserAccount from './UserAccount'
import {connect} from 'react-redux'


const Users = (props) => {

    if (props.loading){
        return <div>
            <h1>We are loading. Please wait one second :</h1>
        </div>
    }

    return(
        <div>
          
      
            <img src="http://petspaboardingandgrooming.com/wp-content/uploads/2017/03/dog-bath-art-1.png" alt="dog"/>
           {props.users.map(user =>
             <li key={user.id}> 
            <Link to={`/users/${user.id}`}>{user.first_name} - {user.last_name}</Link>
            </li>)}
        </div>
    ) 
}

let mapStateToProps = (state) => {
    return {
        users: state.users,
        loading: state.loading
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         fetchUsers: () => dispatch
//     }
// }


export default connect (mapStateToProps) (Users)

//links rendering the userAccount component
//this will be functional because it will just show a list of users
//props in argument (props) and no render because they are just functions