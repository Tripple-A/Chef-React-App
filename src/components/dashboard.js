import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT } from '../actions';

const mapStateToProps = state => ({
  user:state.user,
  logged_in: state.loggedIn
})

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(LOGOUT)
})



const Dashboard = ({user, logged_in,logoutUser}) => {
  const show = logged_in?  <div> Log Out</div> : (<Redirect to='/'/>) 
    return(
        <div>
            <ul>
                <li  onClick={() => {
                  axios.delete('http://localhost:3002/logout',{withCredentials: true})
                  .then(response => { console.log(response)
                    if(response.data.logged_out)logoutUser();
                  })
                  
                  }}> {show} </li>
                </ul> 
          <h1> Welcome to the dashboard {user.email}</h1>  
            </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)