import React from 'react'
import './Dice.css'

const Dice = (props) => {

  return (
    <i className={`Dye fas fa-dice-${props.num} fa-7x ${props.rolling ? 'shaking' : ''}`}></i>
  )
}

export default Dice