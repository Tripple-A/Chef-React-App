import React, {Component} from 'react'
import axios from 'axios'

export default class ProfileForm extends Component {
    state={
       
    }

    toggleForm = (e) => {
        e.preventDefault()
        const form = document.querySelector('.pform')
        form.style.display === 'none' ?
        form.style.display='block' : form.style.display='none'
    }
    render(){
        const states = ['Abia','Adamawa','Lagos','POrt-Harcourt'];
        const showStates = states.map(state => <option value={state} key={state}>{state}</option>)

        return(
            <div>
                <button onClick={this.toggleForm}>Profile Form</button> <button>Upload Images</button>
                <form className="form-group pform" style={{display: 'none'}} >
                <label style={{color:'red'}}>CompanyName</label>
                <input class="form-control" required></input>
                <label>Specialty</label>
                <select class="form-control">
                    <option>Continental Dishes</option>
                    <option>Native Dishes</option>
                    <option>Native and Continental Dishes</option>
                    <option>Pastries</option>
                </select>
                <label>Location</label>
                <select class="form-control">
                <option value="volvo">Kano</option>
                   {showStates}
                </select>
                <label>Elevator Pitch</label>
                <input class="form-control" required></input>
                <button>Save</button>
                <button onClick={this.toggleForm}> Cancel </button>
            </form>
            </div>

        )
    }
} 

