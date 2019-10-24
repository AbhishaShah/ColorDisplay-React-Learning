import React from "react";

const StarRating = ({ rating = 0, totalStars = 5, onRateColor = f => f }) => (
  <div className="star-rating">
    {[...Array(totalStars)].map((n, i) => {
      return (
        <Star key={i} selected={i < rating} onRate={() => onRateColor(i + 1)} />
      );
    })}
  </div>
);

const Star = ({ selected = false, onRate }) => (
  <div className={selected ? "star selected" : "star"} onClick={onRate} />
);

export default StarRating;
