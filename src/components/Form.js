import React, { useState } from "react";
import Axios from "axios";

function Form() {
  const [selectedFile, setSelectedFile] = useState("");
  const [eventName, setEventName] = useState("");

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dakiak4mc/image/upload",
      formData
    ).then((res) => {
      console.log(res.data.url);
      setSelectedFile(res.data.url);
    });
  };
  const addEvent = () => {
    fetch("http://localhost:8000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: eventName,
        avatar_url: selectedFile,
      }),
    });
  };
  const form = (
    <div className="form">
      <input
        value={eventName}
        placeholder="Add a name"
        onChange={(e) => {
          setEventName(e.target.value);
        }}
        type="text"
      />
      <label htmlFor="file">
        Select Image From Gallery
        <input
          type="file"
          id="file"
          onChange={(e) => {
            uploadImage(e.target.files);
          }}
        />
      </label>
    </div>
  );
  return (
    <div>
      {form}
      <div className="button-div">
        <button onClick={addEvent}>Add A Person</button>
      </div>
    </div>
  );
}

export default Form;
