import React, { Component } from 'react'

class FlashCard extends Component {
  state = { 
    displayQuestion: true, 
   }

  flash = () => {
    this.setState({
      displayQuestion: !this.state.displayQuestion,

    })
  }
  render(){
    return(
      <div>
        <h4 onClick={this.flash}>{this.state.displayQuestion ? 
          this.props.question : this.props.answer}</h4>     
      </div>
    )
  }
}

export default FlashCard