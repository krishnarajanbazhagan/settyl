import { Input } from "antd";
import React from "react";

const ChildComponent = ({ inputValue, setInputValue }) => {
  return (
    <div>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default ChildComponent;
