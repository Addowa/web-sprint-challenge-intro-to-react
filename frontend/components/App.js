import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [planetsResponse, peopleResponse] = await Promise.all([
          axios.get(urlPlanets),
          axios.get(urlPeople),
        ])
        setPlanets(planetsResponse.data);
        setPeople(peopleResponse.data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [])
  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      <ul>
        {people.map((person) => (
          <Character key={person.id} character={person}/>
          ))}
      </ul>
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
