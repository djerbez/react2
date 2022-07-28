import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://ig-food-menus.herokuapp.com/burgers")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
      console.log(users) 
      users.map((user) => {
        return (
          <div>
            {user.name}
            {user.price}
            {user.dsc}
            {user.country}
          </div>
  )})
  }

  useEffect(() => {
    fetchData()
  }, [])
}
export default App;
