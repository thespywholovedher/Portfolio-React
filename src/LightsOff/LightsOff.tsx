import React from 'react'
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

const Cell = () => {
    return (
      <button className='cell'>3</button>
    )
}

const LightsOff = () => {
  const [grid, setGrid] = React.useState(generateGrid(5))

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
      gridElements.push(<Cell key={i+j*10} />)
    }
  }
  const cells = grid.flatMap((e,i) => { return <Cell key={i} />}) 
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