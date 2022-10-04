 <div className="alldata" key={event.id}>
      <h1>{event.name}</h1>
      <img src={event.image} alt="event" />
      {event.tickets > 0 ? (
        <p>Tickets Remaining:{event.tickets}</p>
      ) : (
        <p>Ticket Status: Sold out</p>
      )}
      <Link to={`/events/${event.id}`}>More info</Link>
    </div>