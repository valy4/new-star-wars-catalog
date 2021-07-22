import React from "react";
import styled from "styled-components";

function VehiclesCard(props) {
  return (
    <ContainerCard>
      <li>
        <b>Model</b> : {props.id}
      </li>
      <li>
        <b>Model</b> : {props.model}
      </li>
      <li>
        <b>Name</b> : {props.name}
      </li>
      <li>
        <b>Manufacturer</b> : {props.manufacturer}
      </li>
      <li>
        <b>Vehicle Class</b> : {props.vehicle_class}
      </li>
      <li>
        {" "}
        <b>Passengers Number</b> : {props.passengers}
      </li>
      <li>
        <b>Crew Number</b> : {props.crew}
      </li>
    </ContainerCard>
  );
}
export default VehiclesCard;
const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  margin: 1rem;
  width: 20rem;
`;
