
// list of Cards

import { useEffect, useState } from "react"
import components from "@components"
import utils from "@utils"
import './list.scss'

const { Card } = components
const { Spinner } = utils

type prop = {
  pokemons: { id: number, image?: string }[],
  //we need setScore not score :)
  setScore: ()=>void,
  setGameOver: (bool: boolean)=>void
}

const List = ({ pokemons, setScore, setGameOver }: prop) => {

  //we need new state to store almost two cards which user select
  //we store index of card
  //example suppose user select card 2 and 3 -> then index will be 1 and 2 and we check 
  // the id of pokemon at those positiions
  // if they are same we will store id in match array.
  const [opened, setOpened] = useState<number[]>([])
  //lets only store ids.....
  const [match, setMatch] = useState<number[]>([])

  //initial visibility of cards.
  useEffect(() => {
    setMatch(pokemons.map(({ id }) => id))// we will set all ids in match
    // as a result all pokemons will be visible for fraction
    // then 
    setTimeout(() => setMatch([]), 1200) //empty again. lets try..... 
  }, [pokemons])

  //we will use useEffect to checks for the two values of opened.
  useEffect(() => {
    // return for single value
    if (opened.length < 2) return
    //else
    if (pokemons[opened[0]] === pokemons[opened[1]]) {
      //we will store pokemon in match array
      //but check if it already exists
      if (!match.includes(pokemons[opened[0]].id)) {
        setMatch(prev => [...prev, pokemons[opened[0]].id])
      }
    }

    //after 500ms we will empty opened
    setTimeout(() => setOpened([]), 500)

  }, [opened])

  //we will create another useEffect to check when the game gets over.
  // so when match.length bacome 6 we end up the game.
  //it means we store all the card ids.

  useEffect(() => {
    if (match.length === 6) {
      //but setTime
      setTimeout(() => {
        setGameOver(true)
        setMatch([])// empty match array
      }, 1000); 
    }

    //whenever match value changes
  }, [match])


  // flipCard flips the cards
  const flipCard = (index: number) => {
    //if opened have already two value then dont select
    if (opened.length >= 2) return
    //if user select same card twice it will be closed.
    setScore()
    if (opened.includes(index)) return setOpened([])
    //else
    setOpened(prev => [...prev, index])
  }


  return (
    //iterate over pokemons
    // check for length -> we need later to display spinner
    pokemons.length ?
      // index is important
      <div id="list">
        {
          pokemons.map((pokemon, index) => {
            return (
              <Card
                key={index}
                image={pokemon.image}
                // implement flipCard function later
                onClick={(match.includes(pokemon.id)) ? ()=>{} : () => flipCard(index)} // dont use click func when card already matched.
                flip={match.includes(pokemon.id) || opened.includes(index) ? true : false}
              />
            )
          })
        }
      </div>
      :
      //else show spinner
      <Spinner />
  )
}

export default List