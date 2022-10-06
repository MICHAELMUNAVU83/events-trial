import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import EventsList from "./components/EventsList";
import EventSpecs from "./components/EventSpecs";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://mytecheventsapi.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const newA = data.sort(function (a, b) {
          var dateA = new Date(a.date),
            dateB = new Date(b.date);
          return dateA - dateB;
        });
        setData(newA);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<EventsList data={data} />} />
          <Route
            path="/form"
            element={<FormLogin data={data} setData={setData} />}
          />

          <Route
            path="/events/:id"
            element={<EventSpecs setData={setData} data={data} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
