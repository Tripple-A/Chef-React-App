import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { LOGOUT } from '../actions';

const mapStateToProps = state => ({
    logged_in: state.loggedIn
  })
  
  const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(LOGOUT)
  })

const Header = ({logged_in, logoutUser}) => {

  const  retire = () => {
        axios.delete('http://localhost:3002/logout',{withCredentials: true})
                      .then(response => { 
                        if(response.data.logged_out)logoutUser();
                      })
      };
    const date = new Date().toDateString();
    const show = logged_in?  <div> Log Out</div> : (<Redirect to='/'/>) ;
    return(
    <div>
        <header>
            FOODIE
            <div className="container-fluid" >
            <nav >
            <ul className="nav">
            <li className="date"> {date}</li>
              <li><Link to='/newVendor'>Become a Vendor</Link> </li>
              <li>Saved Vendors</li>
                <li  onClick={() => retire()}> {show} </li>
                </ul>      
            </nav>
            </div>
            
           
          </header>
        
    </div>
)
    }

export default connect(mapStateToProps,mapDispatchToProps)(Header)