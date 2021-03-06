//"all my components come inside the div"
//render other components pass data have function other callfun etc 
import React from 'react'
import {connect} from 'react-redux' 
import {Route, Switch} from 'react-router-dom'
import {fetchUser} from '../actions/fetchUser'
import Users from '../components/Users'
import UserAccount from '../components/UserAccount'
import UserForm from '../components/UserForm'
import NavBar from '../components/NavBar'
import Home from '../components/Home'


class UserContainer extends React.Component{
    componentDidMount(){
    this.props.fetchUser()
    }
    render(){
        return(
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/users/new' component={UserForm} />
                    <Route exact path='/users/:id' render={(routerProps) => <UserAccount {...routerProps}/>} />
                    <Route exact path='/users' render={() => <Users />} />
                    <Route exact path='/' render={() => <Home />} />
                </Switch>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        users: state.users
    }
}
export default connect(mapStateToProps, {fetchUser}) (UserContainer) 

//mapstatetoprops is to access a particular part of my store
//compoundimount brings off all fetchUsers
// Switch wrap all the routes it will choose first route -match and renders it