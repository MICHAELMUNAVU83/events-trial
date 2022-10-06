import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../EventSpecs.css";
import emailjs from "@emailjs/browser";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiMicrophone } from "react-icons/gi";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function EventSpecs({ data, setData }) {
  const navigate = useNavigate();
  const form = useRef();
  const params = useParams();
  const [userEmail, setUserEmail] = useState("");
  const event = data.find((event) => event.id === Number(params.id));
  const sendEmail = (e) => {
    e.preventDefault();

    if (event.tickets > 0 && userEmail !== "") {
      emailjs.sendForm(
        "service_8nuxsw3",
        "template_fam0cyg",
        form.current,
        "6M-rV1iiaVqa5DANh"
      );
      fetch(`https://mytecheventsapi.herokuapp.com/events/${event.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({
          tickets: event.tickets - 1,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (obj) {
          console.log(obj);
          if (event.tickets > 0) {
            setData((prevData) => {
              return prevData.map((item) => {
                if (item.id === event.id) {
                  return obj;
                } else {
                  return item;
                }
              });
            });
          }
        });
      toast.success(
        `Ticket for ${event.name} booked , check your email for confirmation within 24 hours`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setTimeout(() => {
        navigate("/");
      }, 7000);
    } else {
      toast.error("Kindly add your email to book the event ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="container-specs">
      <div className="card">
        <div className="card-header">
          <img src={event.image} alt="rover" />
        </div>
        <div className="card-body">
          <div className="event-data">
            <div className="event-details">
              <span className="tag tag-teal"> {event.name} </span>
              <h4> {event.description} </h4>
              <div>
                <span>
                  {" "}
                  <IoLocationOutline />{" "}
                </span>{" "}
                <span className="event-detail">{event.venue}</span>
              </div>
              <div>
                <span>
                  <AiOutlineClockCircle />{" "}
                </span>{" "}
                <span className="event-detail">{event.time}</span>
              </div>
              <div>
                <span>
                  {" "}
                  <MdDateRange />{" "}
                </span>{" "}
                <span className="event-detail">{event.date}</span>
              </div>
              <div>
                <span>
                  {" "}
                  <GiMicrophone />{" "}
                </span>{" "}
                <span id="speakers-details" className="event-detail">
                  {event.speakers}
                </span>
              </div>
            </div>
            <div className="event-tickets">
              <div className="ticket-div">
                {event.tickets > 0 ? (
                  <div>
                    <span>Tickets </span> <span>:</span>{" "}
                    <span> {event.tickets} </span>
                  </div>
                ) : (
                  <div>
                    <span id="sold-out">Sold Out </span>
                  </div>
                )}
              </div>

              <div className="ticket-button">
                {event.tickets > 0 ? (
                  <form ref={form} onSubmit={sendEmail}>
                    <input type="hidden" name="event_name" value={event.name} />
                    <input
                      name="user_email"
                      className="input"
                      type="text"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="Enter your email..."
                    />

                    <button className="book-button" type="submit">
                      Book Event
                    </button>
                  </form>
                ) : null}
              </div>
            </div>
          </div>

          <div className="user">
            <img src={event.image} alt="user" />
            <div className="user-info">
              <h5> {event.venue} </h5>
              <small>{event.date}</small>
            </div>
          </div>
          <div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSpecs;
