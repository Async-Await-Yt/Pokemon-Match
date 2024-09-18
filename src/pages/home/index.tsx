
import { useEffect, useState } from "react"
import { getPokemons } from "../../function"
//imporrt shuffle func from lodash
//we also need npm i --save-dev @types/lodash
import {shuffle} from 'lodash'
import includes from "@includes"
import './home.scss'
import components from "@components"

//home page -> import in pages

const {List} = includes
const {Result} = components
//first we create a function which return us random pokemons.
// lets create different folder as functions

const Home = () => {

  //create pokemon state
  //our game is working
  // lets create gameState
  const [gameOver, setGameOver] = useState<boolean>(false)
  // state for score as well
  // we have implement score  its simple -> whenever user clicks we increase score.
  const [score, setScore] = useState<number>(0)
  const [pokemons, setPokemons] = useState<{id: number, image?: string}[]>([])
  //we will run setGame to initialize our game

  const setGame = async () => {
    //whenever we initialize a game
    setGameOver(false)
    setScore(0)
    setPokemons([])

    const data = await getPokemons()
    setPokemons(shuffle([...data, ...data]))
    //lets clg data
    // console.log(data)
  }

  //calling setGame()
  useEffect(() => {
    setGame()
  }, [])
  
  // setGame() // for testing only

  return (
    <main id="home">
      {/* //we will pass pokemons */}
      <List
        pokemons={pokemons}
        setGameOver={(bool)=>setGameOver(bool)}
        setScore={()=>setScore(prev => ++prev)}
      />
      {/* // display result only when game is over*/}
      {gameOver ? <Result score={score} onClick={() => setGame()} /> : null}
      
    </main>
  )
}

export default Home