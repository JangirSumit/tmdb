import React from "react";

function Stars(props) {
  let stars = [];

  for (let index = 1; index <= 10; index++) {
    if (index <= props.vote_average)
      stars.push(<span key={index} className="fa fa-star checked"></span>);
    else stars.push(<span key={index} className="fa fa-star"></span>);
  }

  return stars;
}

export default Stars;
