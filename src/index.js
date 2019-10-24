import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { v4 } from "uuid";
//import PropTypes from "prop-types";

import "./styles.css";

import AddColorForm from "../components/AddColorForm";
import ColorList from "../components/ColorList";

class ColorApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
    this.addColor = this.addColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
  }
  addColor(colorName, colorValue) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        name: colorName,
        color: colorValue,
        rating: 0
      }
    ];

    this.setState({ colors });
  }

  removeColor(id) {
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({ colors });
  }
  rateColor(id, rating) {
    const colors = this.state.colors.map(color =>
      color.id !== id ? color : { ...color, rating }
    );
    this.setState({ colors });
  }

  render() {
    const { colors } = this.state;
    const { addColor, removeColor, rateColor } = this;
    return (
      <div className="container">
        <h2 className="text-center">Color Organizer</h2>
        <AddColorForm onAddColor={addColor} />
        <ColorList
          colors={colors}
          onRemoveColor={removeColor}
          onRateColor={rateColor}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ColorApp />, rootElement);
