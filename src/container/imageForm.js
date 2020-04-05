import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../helpers/helperFns";

const ImageForm = ({ user_id }) => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const saveImage = e => {
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
      .then(res =>
        res.data.status === "success"
          ? hideForm()
          : setError("There was an error saving this image")
      )
      .catch(e => console.log(e.response));
  };

  const hideForm = e => {
    e.preventDefault();
    const form = document.querySelector(".imgForm");
    form.style.display === "none"
      ? (form.style.display = "block")
      : (form.style.display = "none");
  };
  const handleChange = e => setTitle(e.target.value);
  const uploadWidget = (widget, e) => {
    e.preventDefault();
    widget.open();
  };
  let myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "da3ukbr9v",
      uploadPreset: "ocyrrq39"
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        const url = result.info.secure_url;
        // console.log(url);
        setUrl(url);
      } else {
        // console.log(error);
      }
    }
  );
  return (
    <div>
      <button onClick={e => hideForm(e)}>
        <span className="bg-gray-200 rounded-full px-3 py-1 md:text-xl font-medium text-gray-700 mr-2">
          click to upload event images
        </span>
      </button>
      <form className="imgForm" style={{ display: "none" }}>
        <h3>{error}</h3>
        <label>Image Title</label>
        <input
          type="text"
          value={title}
          placeholder="enter a title for this image"
          onChange={e => handleChange(e)}
          className="form-control"
        ></input>
        <button
          id="upload_widget"
          className="cloudinary-button mt-2"
          onClick={e => uploadWidget(myWidget, e)}
        >
          upload
        </button>
        {/* <button onClick={e => saveImage(e)}>Save</button> */}
        {/* <button onClick={e => hideForm(e)}>Cancel</button> */}

        <button onClick={e => saveImage(e)} className="mt-4">
          <span className="mr-2 pl-3 pr-3 py-3 rounded-lg bg-blue-700 font-medium  text-sm text-white text-semibold ml-2">
            Save
          </span>
        </button>
        <button onClick={e => hideForm(e)}>
          <span className="mr-2 py-3 pl-3 pr-3 rounded-lg text-sm bg-white text-red-400 font-medium">
            Cancel
          </span>{" "}
        </button>
      </form>
    </div>
  );
};

export default ImageForm;
