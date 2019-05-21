import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
    this.enterText = this.enterText.bind(this);
  }

  enterText(e) {
    e.preventDefault();
    const text = e.target.value;
    this.setState({
      value: text
    });
    setInterval(() => {
      this.setState({ value: "" });
    }, 10000);
  }
  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <h1>LUM</h1>
        <textarea
          value={this.state.value}
          onChange={this.enterText}
          rows="10"
          placeholder="Type something in here..."
        />
        <div>{value}</div>
      </div>
    );
  }
}

export default App;
