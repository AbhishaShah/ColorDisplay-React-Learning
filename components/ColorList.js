import React from "react";

import StarRating from "../components/StarRating";

const ColorList = ({
  colors = [],
  onRemoveColor = f => f,
  onRateColor = f => f
}) => (
  <div className="container">
    {colors.length === 0 ? (
      <span>No color added yet. (Add it)</span>
    ) : (
      colors.map(color => (
        <Color
          key={color.id}
          {...color}
          onRemove={() => onRemoveColor(color.id)}
          onRateColor={rating => onRateColor(color.id, rating)}
        />
      ))
    )}
  </div>
);

const Color = ({ name, color, rating = 0, onRemove, onRateColor }) => (
  <div className="color-listing">
    <h2 className="text-center d-inline-block ml-4">{name}</h2>
    <button
      className="btn btn-secondary d-inline-block float-right mt-2 mr-2"
      onClick={onRemove}
    >
      Remove
    </button>
    <div className="color-box" style={{ backgroundColor: color }} />
    <StarRating rating={rating} onRateColor={onRateColor} />
  </div>
);

export default ColorList;
