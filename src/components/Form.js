import React, { useState } from "react";
import Axios from "axios";

function Form({ setData, data }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [eventName, setEventName] = useState("");
  const [tickets, setTickets] = useState(0);

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
    Axios.post("http://localhost:8002/events", {
      name: eventName,
      image: selectedFile,
      tickets: tickets,
    }).then((res) => {
      setData([...data, res.data]);
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
      <input
        value={tickets}
        placeholder="Add the tickets availabe for this event"
        onChange={(e) => {
          setTickets(e.target.value);
        }}
        type="number"
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
