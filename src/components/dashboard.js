import React, { Component } from 'react';
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



class Dashboard extends Component{
  state = {
    chefs: []
  }
  async componentDidMount(){
    await axios.get('http://localhost:3002/chefs')
    .then(res => { 
      if (res.data.status === 200) {
        this.setState({chefs: res.data.chefs}) 
        console.log('yes!!') 
      }
    }
    )
  }
  retire = () => {
    const logoutUser =  this.props;
    axios.delete('http://localhost:3002/logout',{withCredentials: true})
                  .then(response => { 
                    if(response.data.logged_out)logoutUser();
                  })
  };
 render(){
  const {user, logged_in} = this.props
  const show = logged_in?  <div> Log Out</div> : (<Redirect to='/'/>) ;
  const date = new Date().toDateString();
  const chefs = this.state.chefs.map(chef => <div key={chef.id}>
    <div>{chef.company_name}</div>
    <div>
      <div>{chef.specialty}</div>
      <div>{chef.location}</div>
    </div>
  </div>)
    return(
        <div>
          <header>
            FOODIE
          </header>
            <ul>
                <li  onClick={this.retire}> {show} </li>
                </ul> 
                <h5>{date}</h5>
          <h1> Hi {user.email}</h1>
          <h5> You can find vendors by their specialty, location or both.</h5> 
          <h5> You can also sign up as a vendor. Check the menu for details.</h5>
          <div>
            {chefs}
          </div>
            </div>
    )
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)