import React, { useState } from "react";
import Axios from "axios";
import "../Form.css";
import { BiCamera } from "react-icons/bi";

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
    <div classNameName="form">
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
    <div className="signup-container">
      <div className="left-container">
        <h1>TECH ME OUT</h1>
        <div className="puppy">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png" />
        </div>
      </div>
      <div className="right-container">
        <header>
          <h1>Yay, puppies! Ensure your pup gets the best care! </h1>
          <div className="set">
            <div className="pets-name">
              <label for="events-name">Name of the Event</label>
              <input
                id="events-name"
                placeholder="Event Name"
                type="text"
              ></input>
            </div>
            <div className="pets-photo">
              <button id="pets-upload">
                <BiCamera />
              </button>
              <label for="pets-upload">Upload a photo</label>
            </div>
          </div>
          <div className="set">
            <div className="pets-breed">
              <label for="pets-breed">Breed</label>
              <input
                id="pets-breed"
                placeholder="Pet's breed"
                type="text"
              ></input>
            </div>
            <div className="pets-birthday">
              <label for="pets-birthday">Birthday</label>
              <input
                id="pets-birthday"
                placeholder="MM/DD/YYYY"
                type="text"
              ></input>
            </div>
          </div>
          <div className="set">
            <div className="pets-gender">
              <label for="pet-gender-female">Gender</label>
              <div className="radio-container">
                <input
                  id="pet-gender-female"
                  name="pet-gender"
                  type="radio"
                  value="female"
                ></input>
                <label for="pet-gender-female">Female</label>
                <input
                  id="pet-gender-male"
                  name="pet-gender"
                  type="radio"
                  value="male"
                ></input>
                <label for="pet-gender-male">Male</label>
              </div>
            </div>
            <div className="pets-spayed-neutered">
              <label for="pet-spayed">Spayed or Neutered</label>
              <div className="radio-container">
                <input
                  id="pet-spayed"
                  name="spayed-neutered"
                  type="radio"
                  value="spayed"
                ></input>
                <label for="pet-spayed">Spayed</label>
                <input
                  id="pet-neutered"
                  name="spayed-neutered"
                  type="radio"
                  value="neutered"
                ></input>
                <label for="pet-neutered">Neutered</label>
              </div>
            </div>
          </div>
          <div className="pets-weight">
            <label for="pet-weight-0-25">Weight</label>
            <div className="radio-container">
              <input
                id="pet-weight-0-25"
                name="pet-weight"
                type="radio"
                value="0-25"
              ></input>
              <label for="pet-weight-0-25">0-25 lbs</label>
              <input
                id="pet-weight-25-50"
                name="pet-weight"
                type="radio"
                value="25-50"
              ></input>
              <label for="pet-weight-25-50">25-50 lbs</label>
              <input
                id="pet-weight-50-100"
                name="pet-weight"
                type="radio"
                value="50-100"
              ></input>
              <label for="pet-weight-50-100">50-100 lbs</label>
              <input
                id="pet-weight-100-plus"
                name="pet-weight"
                type="radio"
                value="100+"
              ></input>
              <label for="pet-weight-100-plus">100+ lbs</label>
            </div>
          </div>
        </header>
        <footer>
          <div className="set">
            <button id="back">Back</button>
            <button id="next">Next</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Form;
