import React, { useState } from "react";
import ProgressLine from "./ProgressLine";

function DynamicProgressLine() {
  const [navSize, setNavSize] = useState({ size: "5" });

  const handleChange = (event) => {
    setNavSize({ size: event.target.value });
  };

  return (
    <div>
      <ProgressLine navSize={navSize.size} />
      <div
        style={{
          margin: "10px auto",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
        }}
      >
        <label>:عددمورد نظر را وارد نماید</label>
        <input
          type="text"
          placeholder="عدد را تایپ کنید"
          onChange={handleChange}
          value={navSize.size}
          style={{ marginRight: "10px" }}
        />
      </div>
    </div>
  );
}

export default DynamicProgressLine;
