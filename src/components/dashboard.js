import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user:state.user
})

const Dashboard = ({user}) => {
    //console.log(match)
    return(
        <div>
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                </ul> 
          <h1> Welcome to the dashboard {user.email}</h1>  
            </div>
    )
}

export default connect(mapStateToProps,null)(Dashboard)