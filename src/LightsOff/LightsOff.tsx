import React from 'react'
import './lightsOff.css'
import { createGame, reducer } from './Game';

const Grid = (props: React.PropsWithChildren) => {
    return (
     <div className='grid'>{props.children}</div>   
    )
}

const Cell = (props:{on:boolean, toggle:() => void}) => {
    return (
      <button onClick={props.toggle} className={`cell ${props.on ? 'on' : ''}`}>{props.on ? "On": "Off"}</button>
    )
}

const LightsOff = () => {
  const [gameState, gameStateDispatch] = React.useReducer(reducer , createGame("big"));


  const gridElements:React.JSX.Element[] = []
  for(let i = 0; i < gameState!.grid.length; i++) {
    for (let j = 0; j < gameState!.grid[i].length; j++) {
      gridElements.push(
        <Cell 
          toggle={() => gameStateDispatch({ type: 'TOGGLE', payload: {x: i, y: j}})} 
          on={gameState!.grid[i][j]} 
          key={i+j*10} 
        />
      )
    }
  }
  
  return (
    <>
      <div>LightsOff</div>
      <Grid>
        {gridElements}
      </Grid>
    </>
  )
}

export default LightsOff