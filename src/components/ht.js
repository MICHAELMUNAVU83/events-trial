





<div>
{data.map(
  (event) =>
    event.id === Number(params.id) && (
      <div>
        <h1>{event.name}</h1>
        Venue :<p>{event.venue}</p>
        Staring at : <p>{event.time}</p>
        Date: <p>{event.date}</p>
        Event Description: <p>{event.description}</p>
        {event.tickets > 0 ? (
          <div>
            Remaining Tickets: {event.tickets}
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
              Buy Ticket
            </button>
          </div>
        ) : (
          <h1>Ticket Status : Sold out</h1>
        )}
      </div>
    )
)}
</div>
