import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () =>{
    if(this.props.bands.length > 0){
   return this.props.bands.map(band=>{
      return <li>{band.text}</li>
    })
  }
}


  render() {
    return(
      <div>
       <BandInput addBand={this.props.addBand}/>
       <ul>
        {this.renderBands()}
       </ul>
        
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {bands: state}
}

const mapDispatchToProps = (dispatch) =>{
  return {addBand: (formData)=>dispatch({type:'ADD_BAND', payload: formData})}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
