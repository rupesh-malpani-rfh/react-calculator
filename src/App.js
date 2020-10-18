import React, { useState } from 'react';
import KeypadComponent from './components/KeypadComponents';
import OutputComponent from './components/OutputComponent';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if (button === "=") {
      this.onCalculate()
    }
    else if (button === "C") {
      this.onReset()
    }
    else if (button === "CE") {
      this.onBackspace()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  onCalculate = () => {
    // var checkResult = ''
    // if (this.state.result.includes('--')) {
    //   checkResult = this.state.result.replace('--', '+')
    // }

    // else {
    //   checkResult = this.state.result
    // }
    try {
      // eslint-disable-next-line
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      })
    } catch (error) {
      this.setState({
        result: "error"
      })
    }

  }

  onReset = () => {
    this.setState({
      result: ""
    })
  }

  onBackspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  render() {
    return (
      <div className="wrapper">
        <h1 style={{ textAlign: 'center' }}>Simple Calculator</h1>
        <div className="calculatorContainer">
          <OutputComponent result={this.state.result} />
          <KeypadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }


}

export default App;
