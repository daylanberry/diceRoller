import React,  { Component } from 'react'
import Dice from './Dice'
import posed from 'react-pose'
import './RollDice.css'



class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }
  constructor(props) {
    super(props)

    this.state = {
      first: 'one',
      second: 'one'
    }
  }

  roll = () => {
    const first = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]

    const second = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]

    this.setState({first, second})
    console.log(first)
    console.log(second)
  }


  render() {
    return (
      <div className='dice'>
        <div className='roll-container'>
        <Dice num={this.state.first}/>
        <Dice num={this.state.second}/>
        </div>
        <button onClick={() => this.roll()}>roll</button>
      </div>
    )
  }
}

export default RollDice