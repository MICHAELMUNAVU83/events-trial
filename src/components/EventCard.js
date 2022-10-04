import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
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
        <p className="information">{event.date}</p>
        <p className="information">{event.venue}</p>
        <div className="control">
          <button className="btn">
            {event.tickets > 0 ? (
              <span className="price">10 tickets </span>
            ) : (
              <span className="price">Sold out</span>
            )}

            <span className="shopping-cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <span className="buy">Book Now</span>
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
