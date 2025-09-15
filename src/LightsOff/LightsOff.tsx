import React from 'react'
import './lightsOff.css'

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
  const cells = ([1,2,3,4,5]).map((e,i) => { return <Cell key={i} />}) 
  return (
    <>
      <div>LightsOff</div>
      <Grid>
        {cells}
      </Grid>
    </>
  )
}

export default LightsOff