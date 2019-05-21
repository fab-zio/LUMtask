import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      divContent: ''
    };
    this.enterText = this.enterText.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      let newDivContent = "";
      if (this.state.value !== '') {
        newDivContent = this.state.divContent + " " + this.state.value;
      } else {
        newDivContent = this.state.divContent;
      }
      this.setState({
        divContent: newDivContent,
        value: ''
      });
    }, 10000);
  }

  enterText(e) {
    e.preventDefault();
    const text = e.target.value;
    this.setState({
      value: text
    });
  }

  render() {
    const { divContent } = this.state;

    console.log(typeof divContent);
    
    return (
      <div className="App">
        <h1>LUM task</h1>
        <textarea
          value={this.state.value}
          onChange={this.enterText}
          rows="10"
          placeholder="Type something in here..."
          />
          <div id='test'>{divContent}</div>
      </div>
    );
  }
}

export default App;