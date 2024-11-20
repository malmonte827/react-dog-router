import React from "react"
import { useParams } from "react-router-dom"
import DogProfile from "./DogProfile.jsx"

function FilterDogs({dogs}){
    const {name} = useParams()

    if(name){
        const dog = dogs.find(
            d => d.name === name
        )
        return <DogProfile dog={dog}/>
    } else{
        return null
    }
}

export default FilterDogs