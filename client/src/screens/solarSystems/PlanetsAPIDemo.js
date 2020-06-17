import React, { useState, useEffect } from "react";
import Axios from "axios";
export default function PlanetsAPIDemo(props) {
  const [planets, setPlanets] = useState([]);
  function renderPlanets() {
    return planets.map((p) => (
      <div>
        <h3>{p.name}</h3>
        <p>size: {p.size}</p>
      </div>
    ));
  }
  async function getPlanets(solarSystemId) {
    const res = await Axios.get(`/api/solar_systems/${solarSystemId}/planets`);
    console.log(res);
    setPlanets(res.data);
  }
  async function createPlanet(solarSystemId, planetObj) {
    const res = await Axios.post(
      `/api/solar_systems/${solarSystemId}/planets`,
      { ...planetObj }
    );
    console.log(res);
  }
  async function updatePlanet(solarSystemId, planetObj) {
    const res = await Axios.put(
      `/api/solar_systems/${solarSystemId}/planets/13`,
      {
        ...planetObj,
      }
    );
    console.log(res);
  }
  async function deletePlanet(solarSystemId, planetId) {
    const res = await Axios.delete(
      `/api/solar_systems/${solarSystemId}/planets/${planetId}`
    );
    console.log(res);
    setPlanets(planets.filter((p) => p.id !== res.data.id));
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
      {renderPlanets()}
      <div
        onClick={() => createPlanet(4, { name: "new planet", size: 123123 })}
      >
        create
      </div>
      <div onClick={() => updatePlanet(4, { name: "edit planet", size: 1111 })}>
        update
      </div>
      <div onClick={() => deletePlanet(4, 51)}>delete</div>
    </div>
  );
}
// SolarSystem.find(4)
// has one with planet id 13