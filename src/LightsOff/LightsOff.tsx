import React from 'react'
import * as ArrayUtil from './ArrayUtil';
import './lightsOff.css'

const generateGrid = <T,> (n:number) => {
  let array:boolean[][] = 
    Array.from({ length: n }, (_, i) => 
      Array.from({ length: n}, (_, j) => false));

  console.log(array)
  return array;
}

const Grid = (props: React.PropsWithChildren) => {
    return (
     <div className='grid'>{props.children}</div>   
    )
}

const Cell = (props:{on:boolean}) => {
    return (
      <button className='cell'>{props.on ? "On": "Off"}</button>
    )
}

const LightsOff = () => {
  const [grid, setGrid] = React.useState(generateGrid(5))

  
  console.log(ArrayUtil.create2dArray(5, 0))

  const toggle = (i: number, j :number) => {
    setGrid((prevGrid:boolean[][]):boolean[][] => {
      const copyGrid = [...prevGrid];
      copyGrid[i][j] = !copyGrid[i][j] 
      return copyGrid
    })
  };

  const gridElements:React.JSX.Element[] = []
  for(let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      gridElements.push(<Cell on={false} key={i+j*10} />)
    }
  }
  const cells = grid.flatMap((e,i) => { return <Cell on={false} key={i} />}) 
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