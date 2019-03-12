//import * as React from 'react'
import React, {KeyboardEventHandler, KeyboardEvent} from 'react'

type State = {
  message: string
}

class Hello extends React.Component<any, State> {
  state = {
    message: ""
  }

  onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    this.setState({message: event.currentTarget.value})
  }

  render() {
    return <div>
      <h1>Hello React</h1>
      <input type='text' onKeyPress={this.onKeyPress}/>
      <div>
        {this.state.message}
      </div>
    </div>
  }
}

export default Hello
