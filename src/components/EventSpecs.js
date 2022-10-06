import React from "react";
import { useParams } from "react-router-dom";
import "../EventSpecs.css";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
function EventSpecs({ data, setData }) {
  const params = useParams();
  const handleBooking = (e) => {
    e.preventDefault();
    if (data[params.id - 1].tickets > 0) {
      fetch(`http://localhost:8002/events/${data[params.id - 1].id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({
          tickets: data[params.id - 1].tickets - 1,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (obj) {
          console.log(obj);
          if (data[params.id - 1].tickets > 0) {
            setData((prevData) => {
              return prevData.map((item) => {
                if (item.id === data[params.id - 1].id) {
                  return obj;
                } else {
                  return item;
                }
              });
            });
          }
        });
    }
  };

  return (
    <div className="container-specs">
      <div className="card">
        <div className="card-header">
          <img src={data[params.id - 1].image} alt="rover" />
        </div>
        <div className="card-body">
          <div className="event-data">
            <div className="event-details">
              <span className="tag tag-teal"> {data[params.id - 1].name} </span>
              <h4> {data[params.id - 1].description} </h4>
              <div>
                <span>
                  {" "}
                  <IoLocationOutline />{" "}
                </span>{" "}
                <span className="event-detail">
                  {data[params.id - 1].venue}
                </span>
              </div>
              <div>
                <span>
                  <AiOutlineClockCircle />{" "}
                </span>{" "}
                <span className="event-detail">{data[params.id - 1].time}</span>
              </div>
              <div>
                <span>
                  {" "}
                  <MdDateRange />{" "}
                </span>{" "}
                <span className="event-detail">{data[params.id - 1].date}</span>
              </div>
            </div>
            <div className="event-tickets">
              <div className="ticket-div">
                {data[params.id - 1].tickets > 0 ? (
                  <p>Tickets: {data[params.id - 1].tickets} </p>
                ) : (
                  <p>Sold out</p>
                )}
              </div>

              <div className="ticket-button">
                {data[params.id - 1].tickets > 0 ? (
                  <div>
                    <input type="text" placeholder="Enter your name" />
                    <button type="submit" onClick={handleBooking}>
                      Book
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="user">
            <img src={data[params.id - 1].image} alt="user" />
            <div className="user-info">
              <h5> {data[params.id - 1].venue} </h5>
              <small>{data[params.id - 1].date}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSpecs;
