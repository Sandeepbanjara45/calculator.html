import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const currentScreenWidth = () => {
    setWidthCount(() => window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
    };
  });
  return (
    <>
      <div>
        <h2>
          The size of the window is {" "}
          <span style={{ color: "#2e86c1" }}>{widthCount}</span>
        </h2>
      </div>
    </>
  );
};

export default CleanUp;
