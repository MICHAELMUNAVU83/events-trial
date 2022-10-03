import React from "react";
import { useParams } from "react-router-dom";

function EventSpecs({ data, setData }) {
  const params = useParams();

  return (
    <div class=" px-5 lg:flex justify-center">
      <div className="w-50 h-50">
        <img src={data[params.id - 1].image} alt="event" />
      </div>
    </div>
  );
}

export default EventSpecs;
