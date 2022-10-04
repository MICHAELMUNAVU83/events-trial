import React from "react";
import { useParams } from "react-router-dom";
import "../Try.css";

function EventSpecs({ data, setData }) {
  const params = useParams();

  return (
    <div className="container-specs">
      <div className="card">
        <div className="card-header">
          <img src={data[params.id - 1].image} alt="rover" />
        </div>
        <div className="card-body">
          <span className="tag tag-teal"> {data[params.id - 1].name} </span>
          <h4> {data[params.id - 1].description} </h4>
          <p>An exploration into the truck's polarising design</p>
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
