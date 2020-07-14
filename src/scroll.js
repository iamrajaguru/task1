import React, { Component } from "react";
import "./App.css";
class Scroll extends Component {
  constructor(props) {
    super(props);

    this.state = { scroll: [] };
  }

  onScrollCalled = (e) => {
    let temp = this.state.scroll;
    temp.push(1);
    this.setState({ scroll: temp });
  };

  render() {
    return (
      <div
        className="scrollScreen"
        id="rootContainer"
        onScroll={this.onScrollCalled}
      >
        <div className="screen1">
          <h1> helloworld</h1>
        </div>
        <div className="screen1">
          <h1> helloworld</h1>
        </div>
        {this.state.scroll.map((i, index) => (
          <div key={index} className="screen1">
            <h1>helloworld</h1>
          </div>
        ))}
      </div>
    );
  }
}
export default Scroll;
