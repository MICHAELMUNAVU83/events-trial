import React from "react";
import EventCard from "./EventCard";
function EventsList({ data }) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
      {data.map((event) => (
        <EventCard event={event} />
      ))}
    </div>
  );
}

export default EventsList;
