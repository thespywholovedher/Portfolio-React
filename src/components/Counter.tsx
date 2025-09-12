import React from 'react'
import './counter.css'

const Counter = () => {
  const [counter, setCounter] = React.useState(0)

  function increment(){
    setCounter((prevCount:number) => prevCount + 1)
  }

  function decrement(){
    setCounter((prevCount:number) => prevCount - 1)
  }

  return (
    <>
    <div className='row'>
      <button onClick={increment} className='size-small circle-button secondary-color'><p>+</p></button>
      <div>
        <div className='size-medium primary-color circle'><span>{counter}</span></div>
        <div>Counter</div>
      </div>
      <button onClick={decrement} className='size-small circle-button secondary-color'><p>-</p></button>
    </div>
    </>
  )
}

export default Counter