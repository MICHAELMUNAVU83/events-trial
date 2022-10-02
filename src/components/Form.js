import React, { useState } from "react";
import Axios from "axios";

function Form({ setData, data }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [eventName, setEventName] = useState("");
  const [tickets, setTickets] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [time, setTime] = useState("");
  const [speakers, setSpeakers] = useState("");

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
      description: description,
      date: date,
      venue: venue,
      time: time,
      speakers: speakers,
    }).then((res) => {
      setData([...data, res.data]);
    });
  };
  const form = (
    <div className="form">
      <h1>Add an event</h1>
      <input
        value={eventName}
        placeholder="Add a name"
        onChange={(e) => {
          setEventName(e.target.value);
        }}
        type="text"
      />
      <h1>Add a picture</h1>

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
      <h1>Add tickets available</h1>

      <input
        value={tickets}
        placeholder="Add the tickets availabe for this event"
        onChange={(e) => {
          setTickets(e.target.value);
        }}
        type="number"
      />
      <input
        value={speakers}
        placeholder="Add the speakers for this event"
        onChange={(e) => {
          setSpeakers(e.target.value);
        }}
        type="text"
      />

      <input
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
        type="string"
        placeholder="Time the event starts"
      />

      <input
        value={venue}
        onChange={(e) => {
          setVenue(e.target.value);
        }}
        type="string"
        placeholder="Venue"
      />
      <input
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
        type="date"
        placeholder="Date"
      />
      <input
        type="event-description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Event Description"
      />
    </div>
  );
  return (
    <div>
      {form}
      <div className="button-div">
        <button onClick={addEvent}>Add An Event</button>
      </div>
    </div>
  );
}

export default Form;
