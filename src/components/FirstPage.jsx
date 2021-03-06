import React from "react";
import { useState, useEffect } from "react";
import VehicleCard from "./Vehicles/VehiclesCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

function FirstPage() {
  const [vehiclesDetails, setVehiclesDetails] = useState([]);
  const [nextUrl, setNextUrl] = useState("")

  useEffect(() => {
    fetch(`https://swapi.dev/api/vehicles/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVehiclesDetails(data.results);
        setNextUrl(data.next)
      });
  }, []);
  function getMore() {
    fetch(nextUrl)
      .then(response => response.json())
      .then((data) => {
        setVehiclesDetails([...vehiclesDetails, ...data.results])
        setNextUrl(data.next)
      })

  }
  return (
    <div>
      <ContainerPage>
        {vehiclesDetails.map((vehicle, index) => (
          <Link to={`/vehicle/${vehicle.url && vehicle.url.split("/")[5]}`} id={index}>
            <VehicleCard
              model={vehicle.model}
              manufacturer={vehicle.manufacturer}
              vehicle_class={vehicle.vehicle_class}
              passengers={vehicle.passengers}
              crew={vehicle.crew}
              name={vehicle.name}
            ></VehicleCard>
          </Link>
        ))}

      </ContainerPage>
      <button onClick={getMore}>Load More</button>
    </div>
  );
}

export default FirstPage;
const ContainerPage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
