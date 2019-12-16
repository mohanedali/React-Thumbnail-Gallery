import React from "react";
import Thumbnail from "./Thumbnail";

function ThumbnailGrid({ thumbnails, handleClick }) {
  return (
    <div style={ThumbnailGridStyle}>
      {thumbnails.map((thumb, index) => (
        <Thumbnail
          key={index}
          index={index}
          thumb={thumb}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

const ThumbnailGridStyle = {
  height: "35%",
  width: "100%",
  background: "yellow",
  display: "flex",
  flexWrap: "wrap"
};

export default ThumbnailGrid;
