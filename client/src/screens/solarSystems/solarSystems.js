import React, { useState, useEffect } from "react";
import Axios from "axios";
import PlanetsAPIDemo from "./PlanetsAPIDemo";
import SolarSystem from "./SolarSystem";
const SolarSystems = (props) => {
  const [solarSystems, setSolarSystems] = useState([]);
  function renderSolarSystems() {
    return solarSystems.map((ss) => <SolarSystem {...ss} />);
  }
  // componentDidMount
  // do api calls in here once setup
  async function getSolarSystems() {
    const res = await Axios.get("/api/solar_systems");
    console.log(res.data);
    //TODO res.data has the array planet need to render
    setSolarSystems(res.data);
  }
  async function createSolarSystem() {
    const res = await Axios.post("/api/solar_systems", {
      name: "new name", // TODO get this value form
    });
    console.log(res);
    setSolarSystems([res.data, ...solarSystems]);
    // TODO res.data has new create object add that to state/UI
  }
  async function editSolarSystem() {
    // TODO make id dynmaic
    const res = await Axios.put("/api/solar_systems/3", {
      name: "edited name", // TODO get this value form
    });
    console.log(res);
    const upDated = solarSystems.map((ss) => {
      if (ss.id !== res.data.id) return ss;
      return res.data;
    });
    setSolarSystems(upDated);
  }
  async function deleteSolarSystem() {
    // TODO make id dynmaic
    const res = await Axios.delete("/api/solar_systems/3");
    console.log(res);
    const filtered = solarSystems.filter((ss) => ss.id !== res.data.id);
    setSolarSystems(filtered);
  }
  useEffect(() => {
    console.log("mounted");
    getSolarSystems();
  }, []);
  return (
    <div>
      <h1>solar systems</h1>
      {renderSolarSystems()}
    </div>
  );
};
export default SolarSystems;