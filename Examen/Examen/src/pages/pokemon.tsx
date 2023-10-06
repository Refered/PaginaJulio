import { useState, useEffect } from "react";
import './pokemon.css'; 
const Pokemon = () => {
  const [pokemonActual, setPokemonActual] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${Math.floor(
            Math.random() * 898
          )}`
        );
        const data = await response.json();
        setPokemonActual(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
        setIsLoading(false);
      }
    };

    const intervalId = setInterval(fetchRandomPokemon, 10000);

    return () => clearInterval(intervalId);
  }, [pokemonActual]);

  if (isLoading) {
    return <div>ESPERANDO POKEMON?!!?!!?!?!?!?!?!...</div>;
  }

  if (!pokemonActual) {
    return <div>Error al cargar el Pokémon.</div>;
  }

  return (
    <div className="container">
      <h2>{pokemonActual.name}</h2>
      <img
        src={pokemonActual.sprites.front_default}
        alt={pokemonActual.name}
        style={{ maxWidth: "800px" }}
      />
      <h3>Tipo(s):</h3>
      <ul>
        {pokemonActual.types.map((type: any, index: number) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
      <h3>Habilidades:</h3>
      <ul>
        {pokemonActual.abilities.map((ability: any, index: number) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;