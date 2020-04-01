import React, {useState} from 'react';
import axios from 'axios';
import { apiUrl } from "../helpers/helperFns";

const ImageForm = ({user_id}) => {
  const [url,setUrl] = useState('')
  const [title,setTitle] = useState('')
  const [error,setError] = useState('')
  const saveImage = (e) => {
    e.preventDefault();
    axios
    .post(
      `${apiUrl}images`,
      {
        url,
        title,
        user_id
      },
      { withCredentials: true }
    )
    .then(res => res.data.status === 'success'? hideForm() : setError('There was an error saving this image'))
    .catch(e => console.log(e.response));
};
  
  const hideForm = (e) => {
      e.preventDefault();
      const form =  document.querySelector('.imgForm');
      form.style.display === "none"
      ? (form.style.display = "block")
      : (form.style.display = "none");
     
  }
  const handleChange = e => setTitle(e.target.value)
  const  uploadWidget = (widget,e) => {
        e.preventDefault();
        widget.open()
      }
    let myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'da3ukbr9v', 
        uploadPreset: 'ocyrrq39'}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            const  url = result.info.secure_url
            console.log(url);
            setUrl(url)
          } else {console.log(error)}
        }
      )
    return (
        <div>
          <button onClick={(e) => hideForm(e)}>Upload Images</button>
        <form className="imgForm" style={{ display: "none" }}>
          <h3>{error}</h3>
            <label>Image Title</label>
            <input type='text' value={title} onChange={(e)=>handleChange(e)} className="form-control"></input>
            <button id="upload_widget" className="cloudinary-button" 
          onClick={(e)=>uploadWidget(myWidget,e)}>upload</button>
          <button onClick={(e)=>saveImage(e)}>Save</button>
          <button onClick={(e)=>hideForm(e)}>Cancel</button>
        </form>
        </div>
       
    )
}

export default ImageForm;
