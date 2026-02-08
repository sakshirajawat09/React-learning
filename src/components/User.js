import { useState } from "react";

const User = ({name, location, social}) => {
  const [count] = useState(0)
  const [count2] = useState(1)
  
  return(
    <div className="user-card">
      <h1>{count} : 0</h1>
      <h1>{count2} : 2</h1>
      <h2>Name: {name}t</h2>
      <h3>Lacation: {location}</h3>
      <h3>Contact: {social}</h3>
    </div>
  )
}

export default User;