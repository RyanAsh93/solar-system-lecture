import React, { useEffect } from 'react'

const SolarSystems = (props) => {
  // this is componentDidMount
  // do api calls in here once setup
  useEffect(() => {
    console.log('mounted')
  }, [])
  return (
    <div>
      <h1>Solar Systems</h1>
    </div>
  )
}

export default SolarSystems;
