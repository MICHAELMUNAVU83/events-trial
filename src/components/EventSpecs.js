import React from "react";
import { useParams } from "react-router-dom";

function EventSpecs({ data, setData }) {
  const params = useParams();
  return (
    <div>
      rctvbnm
      {data.map(
        (event) =>
          event.id === Number(params.id) && (
            <div>
              <h1>{event.name}</h1>
              {event.tickets > 0 ? <h1>{event.tickets}</h1> : <h1>Sold out</h1>}

              <button
                onClick={() => {
                  if (event.tickets > 0) {
                    fetch(`http://localhost:8002/events/${event.id}`, {
                      headers: {
                        "Content-Type": "application/json",
                      },
                      method: "PATCH",
                      body: JSON.stringify({
                        tickets: event.tickets - 1,
                      }),
                    })
                      .then(function (response) {
                        // console.log(response);
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
                  }
                }}
              >
                {" "}
                add
              </button>
            </div>
          )
      )}
    </div>
  );
}

export default EventSpecs;
