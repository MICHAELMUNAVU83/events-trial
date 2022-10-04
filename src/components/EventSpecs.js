import React from "react";
import { useParams } from "react-router-dom";
import "../Try.css";

function EventSpecs({ data, setData }) {
  const params = useParams();
  const handleBooking = () => {
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
                <span>Venue:</span> <span>{data[params.id - 1].venue}</span>
              </div>
              <div>
                <span>Starting at:</span>{" "}
                <span>{data[params.id - 1].time}</span>
              </div>
              <div>
                <span>Date:</span> <span>{data[params.id - 1].date}</span>
              </div>
            </div>
            <div className="event-tickets">
              <div>
                {data[params.id - 1].tickets > 0 ? (
                  <p>Tickets: {data[params.id - 1].tickets} </p>
                ) : (
                  <p>Sold out</p>
                )}
              </div>
              <div>
                {data[params.id - 1].tickets > 0 ? (
                  <button onClick={handleBooking}>Book</button>
                ) : null}
              </div>
            </div>
          </div>

          <div className="user">
            <img
              src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
              alt="user"
            />
            <div className="user-info">
              <h5>July Dec</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSpecs;
