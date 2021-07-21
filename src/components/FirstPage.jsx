import React from "react"
import { useState, useEffect } from "react"
import VehicleCard from "./Vehicles/VehiclesCard"
import styled from "styled-components"
import { Link } from "react-router-dom"


function FirstPage() {

  const [vehiclesDetails, setVehiclesDetails] = useState([])

  useEffect(() => {
    fetch(`https://swapi.dev/api/vehicles/`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        setVehiclesDetails(data.results)


      })
  }, [])
  return (
    <Link to={`/vehicle/${vehiclesDetails.url && vehiclesDetails.url.split("/")[5]}`}>
      <ContainerPage>
        {vehiclesDetails.map((vehicle) => (<VehicleCard
          model={vehicle.model}
          manufacturer={vehicle.manufacturer}
          vehicle_class={vehicle.vehicle_class}
          passengers={vehicle.passengers}
          crew={vehicle.crew}
          name={vehicle.name}
          id={vehicle.url.split("/")[5]}
        >
        </VehicleCard>)

        )}

      </ContainerPage>
    </Link >
  )
}

export default FirstPage
const ContainerPage = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      `