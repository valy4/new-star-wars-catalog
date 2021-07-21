import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




function VehiclePage() {
  let { id } = useParams()
  const [fullDetails, setFullDetails] = useState([])

  useEffect(() => {
    fetch(`https://swapi.dev/api/vehicles/${id}`)
      .then(response => response.json())
      .then(data => console.log(data))
  }, [id])
  return (<div>cjadh</div>)


}


export default VehiclePage
