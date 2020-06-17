import React, { useEffect } from "react";
import Axios from "axios";

export default function PlanetsAPIDemo(props) {
  async function getPlanets(solarSystemId) {
    const res = await Axios.get(`/api/solar_systems/${solarSystemId}/planets`);
    console.log(res);
  }
  useEffect(() => {
    // axios call to get planets
    // do we want to get all planets?
    // do we want to get planet by solar systems
    getPlanets(4);
  }, []);
  return (
    <div>
      <h1>planets</h1>
    </div>
  );
}