import React from "react"
import { useState, useEffect } from "react"
import VehicleCard from "./Vehicles/VehiclesCard"
import styled from "styled-components"



function FirstPage() {

  const [vehiclesDetails, setVehiclesDetails] = useState([])

  useEffect(() => {
    fetch(`https://swapi.dev/api/vehicles/`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        setVehiclesDetails(data.results)

        // setDetails((details) => [...details, ...data.results]);
      })
  }, [])
  return (
    <CotainerPage>
      {vehiclesDetails.map((vehicle) => (<VehicleCard
        model={vehicle.model}
        manufacturer={vehicle.manufacturer}
        vehicle_class={vehicle.vehicle_class}
        passengers={vehicle.passengers}
        crew={vehicle.crew}


      >
      </VehicleCard>)

      )}

    </CotainerPage>
  )
}

export default FirstPage
const CotainerPage = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`