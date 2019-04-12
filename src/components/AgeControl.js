import React from "react";

export default function AgeControl({ age }) {
  return (
    <div>
      <div>Can you drive ?</div>
      {age > 18 && <div>OK</div>}
    </div>
  );
}
