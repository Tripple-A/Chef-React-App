import React, {Component} from 'react'
import axios from 'axios'

export default class ProfileForm extends Component {
    state={
       company_name: '',
       location: '',
       specialty: '',
       pitch: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    toggleForm = (e) => {
        e.preventDefault()
        const form = document.querySelector('.pform')
        form.style.display === 'none' ?
        form.style.display='block' : form.style.display='none'
    }
    createProfile = (e) => {
        e.preventDefault()
        const {company_name, location, specialty, pitch} = this.state;
        axios.post('http://localhost:3002/profiles',
        {
          company_name,
          location,
          specialty,
          pitch,
        },{ withCredentials: true }).then(res => console.log(res))
        .catch(e => console.log(e.response))
    }
    render(){
        const states = ['Abia','Adamawa','Lagos','POrt-Harcourt'];
        const showStates = states.map(state => <option value={state} key={state}>{state}</option>)
        const {companyName, location, specialty, pitch} = this.state;
        return(
            <div>
                <button onClick={this.toggleForm}>Profile Form</button> <button>Upload Images</button>
                <form className="form-group pform" style={{display: 'none'}} >
                <label style={{color:'red'}}>CompanyName</label>
                <input
                className="form-control"
                name="company_name"
                required onChange={this.handleChange} value={companyName}>
                </input>
                <label>Specialty</label>
                <select
                className="form-control"
                name='specialty' onChange={this.handleChange} value={specialty}>
                    <option value='Continental Dishes'>Continental Dishes</option>
                    <option value='Native Dishes'>Native Dishes</option>
                    <option value='Native and Continental Dishes'>Native and Continental Dishes</option>
                    <option value='Pastries'>Pastries</option>
                </select>
                <label>Location</label>
                <select
                className="form-control"
                name="location" onChange={this.handleChange} value={location}>
                <option value="volvo">Kano</option>
                   {showStates}
                </select>
                <label>Elevator Pitch</label>
                <input
                class="form-control"
                required name="pitch"
                onChange={this.handleChange} value={pitch}>
                </input>
                <button onClick={this.createProfile}>Save</button>
                <button onClick={this.toggleForm}> Cancel </button>
            </form>
            </div>

        )
    }
} 

