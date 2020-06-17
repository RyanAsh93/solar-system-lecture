import React, { useState } from "react";
import Planets from "./Planets";
export default function SolarSystem({ name, id }) {
  const [showPlanets, setShowPlanets] = useState(false);
  return (
    <>
      <div>
        <h1>{name}</h1>
        <div onClick={() => setShowPlanets(true)}>get planets</div>
        {showPlanets && <Planets solarSystemId={id} />}
      </div>
      <hr />
    </>
  );
}
