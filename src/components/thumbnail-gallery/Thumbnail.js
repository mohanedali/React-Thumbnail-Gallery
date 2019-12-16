import React from "react";

function Thumbnail({ thumb, index, handleClick }) {
  return (
    <div style={ThumbnailStyles}>
      <img
        src={thumb.imgURL}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        alt="img"
        onClick={handleClick}
        data-index={index}
      />
    </div>
  );
}

const ThumbnailStyles = {
  background: "red",
  width: "25%",
  height: "50%",
  cursor: "pointer"
};

export default Thumbnail;
