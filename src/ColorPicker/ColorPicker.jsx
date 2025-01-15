/* eslint-disable no-unused-vars */
import React,{useState} from 'react'

const ColorPicker = () => {
  const [color, setColor] = useState("ffffff")

  const ChangeColor =(e)=>{
    setColor(e.target.value)
  }
  return (
    <div>
      <p style={{backgroundColor: color}}>BackGround Color :{color}</p>
      <label> Selected Color :
        <input type="color" value={color} onChange={ChangeColor}/>
      </label>
    </div>
  )
}

export default ColorPicker
