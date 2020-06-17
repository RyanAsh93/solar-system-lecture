import React, { useState, useEffect } from "react";
import Axios from "axios";
import PlanetForm from "./PlanetForm";

export default function Planets({ solarSystemId }) {
  const [planets, setPlanets] = useState([]);
  function renderPlanets() {
    return planets.map((p) => (
      <div>
        <h3>{p.name}</h3>
        <p>size: {p.size}</p>
        <div>
          <div onClick={() => deletePlanet(p.id)}>delete</div>
          <PlanetForm {...p} updatePlanet={updatePlanet} />
          <div
            onClick={() =>
              updatePlanet({ name: "edit planet", size: 1111 }, p.id)
            }
          >
            update
          </div>
        </div>
      </div>
    ));
  }
  async function getPlanets() {
    const res = await Axios.get(`/api/solar_systems/${solarSystemId}/planets`);
    console.log(res);
    setPlanets(res.data);
  }

  async function createPlanet(planetObj) {
    const res = await Axios.post(
      `/api/solar_systems/${solarSystemId}/planets`,
      { ...planetObj }
    );
    console.log(res);
    setPlanets([res.data, ...planets]);
  }
  async function updatePlanet(planetObj, planetId) {
    const res = await Axios.put(
      `/api/solar_systems/${solarSystemId}/planets/${planetId}`,
      {
        ...planetObj,
      }
    );
    const editedPlanets = planets.map((p) => {
      if (p.id !== res.data.id) {
        return p;
      }
      return res.data;
    });

    setPlanets(editedPlanets);
  }
  async function deletePlanet(planetId) {
    const res = await Axios.delete(
      `/api/solar_systems/${solarSystemId}/planets/${planetId}`
    );
    console.log(res);

    setPlanets(planets.filter((p) => p.id !== res.data.id));
  }
  useEffect(() => {
    getPlanets();
  }, []);
  return (
    <div>
      <h1>planets</h1>
      <PlanetForm createPlanet={createPlanet} />
      <div onClick={() => createPlanet({ name: "new planet", size: 123123 })}>
        create
      </div>
      {renderPlanets()}
    </div>
  );
}
// SolarSystem.find(4)
// has one with planet id 13