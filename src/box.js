import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Scroll from "./scroll";
import "./App.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [],
      index: 0,
    };
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
    return (
      <div className="App">
        <div className="container">
          <div className="inner_container">
            <div
              className={
                this.state.count.includes(1) ? "customSelection" : "customBlock"
              }
              onClick={() => this.toggle(1)}
            >
              1
            </div>
            <div
              className={
                this.state.count.includes(2) ? "customSelection" : "customBlock"
              }
              onClick={() => this.toggle(2)}
            >
              2
            </div>
            <div
              className={
                this.state.count.includes(3) ? "customSelection" : "customBlock"
              }
              onClick={() => this.toggle(3)}
            >
              3
            </div>
            <div
              className={
                this.state.count.includes(4) ? "customSelection" : "customBlock"
              }
              onClick={() => this.toggle(4)}
            >
              4
            </div>
          </div>
          <div className="inner_container">
            <div
              className={
                this.state.count.includes(5) ? "customSelection" : "customBlock"
              }
              onClick={() => this.toggle(5)}
            >
              5
            </div>
            <div
              className={
                this.state.count.includes(6) ? "customSelection" : "customBlock"
              }
              onClick={() => this.toggle(6)}
            >
              6
            </div>
            <div
              className={
                this.state.count.includes(7) ? "customSelection" : "customBlock"
              }
              onClick={() => this.toggle(7)}
            >
              7
            </div>
            <div
              className={
                this.state.count.includes(8) ? "customSelection" : "customBlock"
              }
              onClick={() => this.toggle(8)}
            >
              8
            </div>
          </div>
          <div className="inner_container">
            <div
              className={
                this.state.count.includes(2) ? "customSelection" : "customBlock"
              }
              onClick={() => this.toggle(9)}
            >
              9
            </div>
            <div
              className={
                this.state.count.includes(10)
                  ? "customSelection"
                  : "customBlock"
              }
              onClick={() => this.toggle(10)}
            >
              10
            </div>
            <div
              className={
                this.state.count.includes(11)
                  ? "customSelection"
                  : "customBlock"
              }
              onClick={() => this.toggle(11)}
            >
              11
            </div>
            <div
              className={
                this.state.count.includes(12)
                  ? "customSelection"
                  : "customBlock"
              }
              onClick={() => this.toggle(12)}
            >
              12
            </div>
          </div>
          <div className="inner_container">
            <div
              className={
                this.state.count.includes(13)
                  ? "customSelection"
                  : "customBlock"
              }
              onClick={() => this.toggle(13)}
            >
              13
            </div>
            <div
              className={
                this.state.count.includes(14)
                  ? "customSelection"
                  : "customBlock"
              }
              onClick={() => this.toggle(14)}
            >
              14
            </div>
            <div
              className={
                this.state.count.includes(15)
                  ? "customSelection"
                  : "customBlock"
              }
              onClick={() => this.toggle(15)}
            >
              15
            </div>
            <div
              className={
                this.state.count.includes(16)
                  ? "customSelection"
                  : "customBlock"
              }
              onClick={() => this.toggle(16)}
            >
              16
            </div>
          </div>
          <Link to="/Scroll"> Next Task</Link>
        </div>
      </div>
    );
  }
}
export default Box;
