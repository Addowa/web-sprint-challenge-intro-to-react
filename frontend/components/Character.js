import React, { useState } from 'react'

function Character({character}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld)
  }

  const homeworlds = {
    31: "Tatooine",
    12: "Alderaan",
    5: "Dagobah",
    38: "Yavin IV",
    19: "Hoth",
    84: "Bespin",
    54: "Endor",
    28: "Naboo",
    93: "Coruscant",
  }

  const getHomeworldName = (homeworldId) => {
    return homeworlds[homeworldId] || "Unknown Homeworld"
  }
  const homeworldName = getHomeworldName(character.homeworld)

  return (
    <div onClick={toggleHomeworld} className='character-card'>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{character.name}</h3>
      {showHomeworld && 
        <p> 
        Planet:  
        <span className='character-planet'> { homeworldName } </span>
        </p>
        }
    </div>
  )
}

export default Character
