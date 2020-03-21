import React from 'react';
import {connect} from 'react-redux'
import UserContainer from './containers/UserContainer'
import './App.css'

 
class App extends React.Component{
  
  render() {
    return (
      <div className="App">
        <UserContainer />
      </div>
    );
  }
}


export default (App); 
//is calling automatically dispatch on the return value of fetch request
//store.dispatch({type:'FETCH....etc})-the fetch is in fetchgro file
// const mapStateToProps = () => //i want to access to this particular part of the store 