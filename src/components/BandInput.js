// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state={
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      text: ''
    })

  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band Name</label>
          <input type='text' value={this.state.text} onChange={this.handleChange}/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
