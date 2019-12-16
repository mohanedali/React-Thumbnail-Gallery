import React from "react";

function ActiveWindow({ activeThumb }) {
  return (
    <div style={ActiveWindowStyle}>
      <img
        src={activeThumb.imgURL}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        alt="img"
      />
    </div>
  );
}

const ActiveWindowStyle = {
  height: "65%",
  width: "100%",
  background: "#333"
};

export default ActiveWindow;
