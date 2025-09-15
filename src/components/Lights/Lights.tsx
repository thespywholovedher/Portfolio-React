import React from 'react'
import './lights.css'

type Light = {
  id: number
  on: boolean
  color: string
}

const lightsJson:Light[] = [
  { id: 1, on: false, color: "rgb(0,0,0)"},
  { id: 2, on: true, color: "rgb(230,159,0)" },
  { id: 3, on: false, color: "rgb(86,180,233)"},
  { id: 4, on: false, color: "rgb(0,158,115)"},
  { id: 5, on: false, color: "rgb(240,228,66)"},
  { id: 6, on: true, color: "rgb(0,114,178)" },
  { id: 7, on: false, color: "rgb(213,94,0)" },
  { id: 8, on: false, color: "rgb(204,121,167)"},
];

const Light = (props:{id:number, on: boolean, color:string, toggle: (id:number) => void }) => {
  const style = {
    backgroundColor:props.color,
    opacity: props.on ? 1 : .1
  };
  return (
    <button onClick={() => props.toggle(props.id)} style={style} className={"box"}><p>{props.color}</p></button>
  )
}

const Lights = () => {
  const [lights, setLights] = React.useState<Light[]>(lightsJson);

  const toggle = (id:number):void => {
    setLights((prevLights) =>{
      return prevLights.map((light:Light):Light => light.id === id ? {...light, on:!light.on} : light)
    })
  }

  const lightElement = lights.map((light:Light):React.JSX.Element => {
    return <Light key={light.id} id={light.id} on={light.on} color={light.color} toggle={toggle}/>
  })

  return (
    <div className={"flex-container"}>
      {lightElement}
    </div>
  )
}

export default Lights