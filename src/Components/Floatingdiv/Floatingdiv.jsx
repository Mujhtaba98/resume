import React from 'react'
import './Floatingdiv.css'

const Floatingdiv = ({img,txt1,txt2}) => {
  return (
    <div className="Floatingdiv">
    <img src={img} alt="" />
    <span>
    {txt1}
    <br/>
    {txt2}
    </span>
    </div>
  )
}

export default Floatingdiv