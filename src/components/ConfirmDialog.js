import React from "react"

export default function ConfirmDialog({ onButtonClick }) {
  return (
    <div class="confirm-dialog">
      <h2>Are your sure ?</h2>
      <button onClick={() => onButtonClick('Yes')}>Yes</button>
      <button onClick={() => onButtonClick('No')}>No</button>
    </div>
  )
}