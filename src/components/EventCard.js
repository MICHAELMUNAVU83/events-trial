import React from "react";
import { useNavigate } from "react-router-dom";

function EventCard({ event }) {
  const navigate = useNavigate();
  return (
    <div className="max-w-sm rounded shadow-lg pd-5 mx-3 my-3">
      <img
        className="w-full h-50"
        src={event.image}
        alt="Sunset in the mountains"
      />

      <div className="px-6 pb-0 pt-1">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        </p>
      </div>
      <div className="px-6 pl-2 text-center  font-mono">
        {event.tickets > 0 ? (
          <p>Tickets Remaining:{event.tickets}</p>
        ) : (
          <p>Ticket Status: Sold out</p>
        )}
      </div>
      <div className="px-6  text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            navigate(`/events/${event.id}`);
          }}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Read More ...
        </button>
      </div>
    </div>
  );
}

export default EventCard;
