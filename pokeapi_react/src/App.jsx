import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([])


  const fetchPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8')
    const data = await response.json()
    const results = data.results.map(result => {
      // https://pokeapi.co/api/v2/pokemon/2/
      const id = result.url.split('/')[6]
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
      // console.log(image)
      return {
        name: result.name,
        id,
        image
      }
    })


    console.log(results);
    setPokemons(results)
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <div className="pokemonList">
      <h1 className="title">Pokemon</h1>
      <div className="pokemons">
      {pokemons.map(pokemon => {
        return (
          <div className="pokemon" >
            <img src={pokemon.image}/>
            <h3 key={pokemon.url} >{pokemon.name}</h3>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App