import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      divContent: ""
    };
    this.enterText = this.enterText.bind(this);
  }

  enterText(e) {
    e.preventDefault();
    const vide = document.querySelector(".wrapper");
    vide.classList.toggle("fadeMe");
    this.setState({
      value: e.target.value
    });
  }
  componentDidMount() {
    setInterval(() => {
      let newDivContent = "";
      if (this.state.value !== "") {
        newDivContent = this.state.divContent + " " + this.state.value;
      } else {
        newDivContent = this.state.divContent;
      }
      this.setState({
        divContent: newDivContent,
        value: ""
      });
    }, 10000);
  }

  render() {
    const { divContent } = this.state;
    return (
      <div className="App">
        <h1>LUM task</h1>
        <textarea
          value={this.state.value}
          onChange={this.enterText}
          rows="10"
          placeholder="Type something in here... in 10 secs will be shown down below"
        />
        <div className="wrapper">
          <div>{divContent}</div>
        </div>

        <div />
      </div>
    );
  }
}

export default App;
