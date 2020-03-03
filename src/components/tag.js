import React from "react";
import "../App.css";

function Tag(props) {
  return (
    <span className="g-tag">
      {props.genres.find(a => a.id === props.gid).name}
    </span>
  );
}

export default Tag;
