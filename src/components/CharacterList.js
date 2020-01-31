import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
 const [ character, setCharacter] = useState ([]);
 const [ query, setQuery] = useState ("");

  useEffect(() => {
 axios.get('https://rickandmortyapi.com/api/character/')
 .then ( feedback => {
   console.log(feedback)
   setCharacter(feedback.data.results)
 })
  }, []);

  return (
  <section className="characterlist">
    {/* <SearchForm/> */}
    <div className="grid-view">
    {character.map(characters => {
      return (
        <CharacterCard
        id={characters.id}
        name={characters.name}
        status={characters.status}
        species={characters.species}
        image={characters.image}
        gender={characters.gender}
        />
      );
    })}
    </div>
  </section>
  );
}
