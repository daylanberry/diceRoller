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
      second: 'one',
      rolling: false
    }
  }

  roll = () => {
    const first = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]

    const second = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]

    this.setState({first, second, rolling: true})

    setTimeout(() => this.setState({rolling: false}), 1000)
  }


  render() {
    return (
      <div className='dice'>
        <div className='roll-container'>
        <Dice num={this.state.first} rolling={this.state.rolling}/>
        <Dice num={this.state.second} rolling={this.state.rolling}/>
        </div>
        <button onClick={() => this.roll()} disabled={this.state.rolling}>
          {this.state.rolling ? 'rolling': 'Roll Dice'}
          </button>
      </div>
    )
  }
}

export default RollDice