import { Component } from "react";
import "./App.css";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}
export default ImageComponent;
