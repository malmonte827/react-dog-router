import {Routes, Navigate, Route} from "react-router-dom"
import FilterDogs from "./FilterDogs.jsx"
import DogList from "./DogList.jsx"

function RoutesList({dogs}){
    return(
<Routes>
    <Route 
    path="/dogs"
    element={<DogList dogs={dogs}/>}
    />
    
    <Route 
    path="/dogs/:name"
    element={<FilterDogs dogs={dogs}/>}
    />
    
    <Route 
    path="/*"
    element={<Navigate to="/dogs"/>}
    />
</Routes>
    )
}

export default RoutesList