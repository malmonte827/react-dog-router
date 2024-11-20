import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios"
import NavBar from "./NavBar"
import RoutesList from "./RoutesList"
import dogdb from "../db"

function App() {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true
  });

  useEffect(() => {
    async function loadDogs(){
      const response = await axios.get("http://localhost:5001/dogs")
      setDogs({
        data: response.data,
        isLoading: false
      })
    }
    loadDogs()
  }, [])

  if (dogs.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
        <div className="container">
          <RoutesList dogs={dogs.data} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
