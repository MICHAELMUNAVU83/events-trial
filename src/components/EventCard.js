import React from "react";

function EventCard({ event }) {
  return (
    <div className="alldata" key={event.id}>
      <h1>{event.name}</h1>
      <img src={event.image} alt="event" />
    </div>
  );
}

export default EventCard;
