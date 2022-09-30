import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="alldata" key={event.id}>
      <h1>{event.name}</h1>
      <img src={event.image} alt="event" />
      {event.tickets > 0 ? <p>{event.tickets}</p> : <p>Sold out</p>}
      <Link to={`/events/${event.id}`}>More info</Link>
    </div>
  );
}

export default EventCard;
