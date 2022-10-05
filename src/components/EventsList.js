import React from "react";
import EventCard from "./EventCard";

import "../EventCard.css";
function EventsList({ data }) {
  return (
    <div className="container-big">
      {data.map((event) => (
        <EventCard event={event} />
      ))}
    </div>
  );
}

export default EventsList;
