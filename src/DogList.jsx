import React from "react"
import {Link} from "react-router-dom"

function DogList({dogs}){
return(
    dogs.map(d => (
        <div key={d.name}>
            <img src={`/${d.src}.jpg`} alt={d.name} />
            <h2>
                <Link to={`/dogs/${d.name}`}>{d.name}</Link>
            </h2>
        </div>
    ))
)
}

export default DogList