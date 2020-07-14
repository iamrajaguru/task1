import React, { Component } from "react";
import "./App.css";
class Scroll extends Component {
  constructor(props) {
    super(props);

    this.state = { scroll: 0 };
  }

  onScroll = (e) => {
    console.log(e, "event");
  };
  componentDidMount() {
    window.addEventListener("scroll", function () {
      document.getElementById("showScroll").innerHTML =
        window.pageYOffset + "px";
    });
    console.log("object", window);
  }
  render() {
    return (
      <div className="scrollScreen" id="showScroll">
        HelloWorld
      </div>
    );
  }
}
export default Scroll;
