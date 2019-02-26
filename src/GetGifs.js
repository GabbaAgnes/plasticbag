import Picker from './Picker'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class GetGifs extends Component {
  log (gif) {
    console.log(gif)
  }

  render () {
    return (
      <div>
        <Picker onSelected={this.log.bind(this)} />
      </div>
    )
  }
}

export default GetGifs;