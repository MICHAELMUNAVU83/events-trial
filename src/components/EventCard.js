import React from "react";
import { useNavigate } from "react-router-dom";
import "../EventCard.css";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
function EventCard({ event }) {
  const navigate = useNavigate();
  return (
    <div id="container">
      <div className="product-details">
        <h1>{event.name.toUpperCase()}</h1>
        <span className="hint-star star">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </span>

        <p className="information">{event.description}</p>
        <p className="information">
          {" "}
          <MdDateRange /> {event.date}
        </p>
        <p className="information">
          {" "}
          <IoLocationOutline /> {event.venue}
        </p>
        <div className="control">
          <button className="btn">
            {event.tickets > 0 ? (
              <span className="price">{event.tickets} tickets </span>
            ) : (
              <span className="price">Sold out</span>
            )}

            <span className="shopping-cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <span
              onClick={() => navigate(`/events/${event.id}`)}
              className="buy"
            >
              Book Now
            </span>
          </button>
        </div>
      </div>

      <div className="product-image">
        <img src={event.image} alt="" />

        <div className="info">
          <h2>SPEAKERS</h2>
          <ul>
            <li>
              <strong>Speakers: </strong>
              {event.speakers}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
