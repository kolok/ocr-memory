import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './HighScoreInput.css'

import { saveHOFEntry } from './HallOfFame'

class HighScoreInput extends Component {
  state = { winner: ''}

  // Arrow fx for binding
  handleWinnerUpdate = event => {
    var target = event.target
    this.setState({ winner: target.value.toUpperCase() })
  }

  // Arrow fx for binding
  persistWinner = event => {
    event.preventDefault()
    const newEntry = {guesses: this.props.guesses, player: this.state.winner}
    saveHOFEntry(newEntry, this.props.onStored)
  }

  render() {
    return (
      <form className="highScoreInput" onSubmit={this.persistWinner}>
        <p>
          <label>
            Bravo ! Entre ton prénom :
            <input 
              autoComplete="given-name" 
              onChange={this.handleWinnerUpdate}
              type="text" 
              value={this.state.winner}
            />
          </label>
          <button type="submit">J’ai gagné !</button>
        </p>
      </form>
    )
  }
}

HighScoreInput.propTypes = {
  guesses: PropTypes.number.isRequired,
  onStored: PropTypes.func.isRequired,
}

export default HighScoreInput
