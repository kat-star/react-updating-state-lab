// Code DigitalClicker Component Her
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  buttonClicked = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  } 

  render() {
    return (
      <button onClick={this.buttonClicked}><label>{this.state.timesClicked}</label></button>
    )
  }
}

