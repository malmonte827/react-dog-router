import React from "react"

function DogProfile({dog}){
    return(
        <div>
            <img src={`/${dog.src}.jpg`} alt={dog.name} />
            <h2>{dog.name}</h2>
            <h2>{dog.age}</h2>
            <ul>
                {dog.facts.map(fact =>(
                    <li>{fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default DogProfile