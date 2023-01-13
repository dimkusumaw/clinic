import React from "react";

function TextArea(props) {
  return (
    <div className={props.className}>
      <label htmlFor={props.label} className={props.labelClass}>
        {props.label}
      </label>
      <textarea
        className="w-full border-b-2 outline-none border-gray-300 rounded py-1 focus:border-b-cyan-500"
        onChange={props.onChange}
        value={props.value}
      >
      </textarea>
    </div>
  );
}

export default TextArea;
