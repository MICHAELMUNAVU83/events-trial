import React from "react";
import EventCard from "./EventCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
function EventsList({ data }) {
  return (
    <div className="container">
      {data.map((event) => (
        <EventCard event={event} />
      ))}
    </div>
  );
}

export default EventsList;
