import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [],
      c: [],
      index: 0,
    };
  }
  componentDidMount() {
    for (let i = 1; i <= 16; i++) {
      let temp = this.state.c;
      temp.push(i);
      this.setState({ c: temp });
    }
  }
  toggle(index) {
    console.log(index);
    let temp = this.state.count;

    if (this.state.count.length === 2) {
      temp.shift();
      temp.push(index);
      this.setState({ count: temp });
    } else {
      temp.push(index);
      this.setState({ count: temp });
    }
    console.log(this.state.count, this.state.index);
  }
  render() {
    console.log(this.state.c, "lol");
    return (
      <div className="App">
        <div className="grid-container">
          {this.state.c.map((i, index) => (
            <div
              key={i}
              className={
                this.state.count.includes(i)
                  ? "grid-container-item-active"
                  : "grid-container-item"
              }
              onClick={() => this.toggle(i)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      
        <Link to="/Scroll"> Next Task</Link>
      </div>
    );
  }
}
export default Box;
