import React, { useState } from "react";
import ActiveWindow from "./ActiveWindow";
import ThumbnailGrid from "./ThumbnailGrid";
import ThumbData from "./ThumbData";

function ThumbnailGallery() {
  const [data] = useState(ThumbData);
  const [activeThumb, setActiveThumb] = useState(0);
  const handleClick = e => {
    const newIndex = e.target.getAttribute("data-index");
    setActiveThumb(newIndex);
  };
  return (
    <div style={thumbnailGalleryStyle}>
      <div style={{ flex: 1 }}>
        <ActiveWindow activeThumb={data[activeThumb]} />
        <ThumbnailGrid thumbnails={data} handleClick={handleClick} />
      </div>
      <div style={{ flex: 1, padding: "40px" }}>
        <h2>{data[activeThumb].title}</h2>
        <p style={{ marginTop: "10px" }}>{data[activeThumb].bodyText}</p>
      </div>
    </div>
  );
}

const thumbnailGalleryStyle = {
  background: "#DDD",
  height: "500px",
  width: "1024px",
  margin: "40px auto",
  display: "flex"
};

export default ThumbnailGallery;
