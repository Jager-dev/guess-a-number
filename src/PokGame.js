import React, {useState,useEffect} from 'react';
import axios from "axios";

const PokGame = () => {
  const [pokemons, setPokemons] = useState([])
  const [random,setRandom] = useState(1)
  const [options , setOptions] = useState([])
  const [answer,setAnswer] = useState({})



  const generateNumber = () => {
    return Math.round(Math.random() * 150)
  }


  useEffect(() => {
    axios('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(({data}) => {
        setPokemons(data.pokemon)
      })
  })

  const Start = () => {
    const variants = [random, generateNumber(), generateNumber(), generateNumber()]
    console.log(variants)
    setRandom(generateNumber())
    setOptions(variants.map(num => pokemons.find(el => el.id === num).name))
    setAnswer(pokemons.find(el => el.id === random))
  }

  return (
    <div>
      <button onClick={Start}>Start</button>
      <div>
        <img src={answer.img} alt=""/>
      </div>
      {
        options.map(el =>
          <button>{el}</button>
        )
      }
    </div>
  );
};

export default PokGame;