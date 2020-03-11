import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { LOGIN, ASSIGNUSER} from '../actions';


const mapStatetoProps = state => ({
    logged_in:state.loggedIn
})

const mapDispatchToProps = dispatch => ({
    assignUser: (user) => dispatch(ASSIGNUSER(user)),
    loginUser: () => dispatch(LOGIN)
})

 class Home extends Component{
    state={
        email:'',
        password:'',
        password_confirmation:'',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
        const{email,password,password_confirmation} = this.state
        axios.post('http://localhost:3002/registrations',
        {
           email,
           password,
           password_confirmation
        }, 
        {withCredentials: true})
        .then(response => {
            console.log(response)
            if (response.data.status === 'created'){
                console.log('creaaateed')
                this.props.loginUser()
                this.props.assignUser(response.data.user)
            }
            else {
                console.log(response.data.status)
            }
        })
        }
        ;
        

    render(){
        const show = this.props.logged_in? (<Redirect to='/dashboard'/>) : <div> Find Skilled Workers Around You, You can be one too</div>
        return(
            <div>
                {show}
            <form className="form-group">
             <input
              type='text'
              name='email' 
              placeholder='Username' 
              value={this.state.username} 
              onChange={this.handleChange} required>
             </input> <br></br>
             <input 
             type='password' 
             name='password' 
             placeholder='Password' 
             value={this.state.password} 
             onChange={this.handleChange} required>
             </input> <br></br>
             <input 
             type='password' 
             name='password_confirmation' 
             placeholder='Password Confirmation' 
             value={this.state.password_confirmation}
             onChange={this.handleChange}>
             </input><br></br>
            </form>
                <button className='btn btn-primary' onClick={this.handleSubmit}>SIGN UP</button>
            </div>

        )
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(Home)