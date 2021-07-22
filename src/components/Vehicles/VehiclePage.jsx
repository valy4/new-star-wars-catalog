import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VehiclePage() {
  let { id } = useParams();
  const [fullDetails, setFullDetails] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/vehicles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setFullDetails((fullDetails) => [...fullDetails, data]);
      });
  }, [id]);

  return (<div>
    {fullDetails.map((details) => (
      <div>
        <p>Vehicle-class : {details.vehicle_class}</p>
        <p>Length : {details.length}</p>
        <p>Speed : {details.max_atmosphering_speed}</p>
        <p>Cost : {details.cost_in_credits}</p>
      </div>
    ))}
  </div>)
}

export default VehiclePage;
