import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/events")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  return (
    <div className="App">
      <Form data={data} />

      <div className="container">

      {data.map((event) => (
        <div className="alldata" key={event.id}>
          <h1>{event.name}</h1>
          <img src={event.avatar_url} alt="avatar" />
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
