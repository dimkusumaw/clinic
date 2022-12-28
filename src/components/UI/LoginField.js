import React from "react";

function LoginField(props) {
  return (
    <div className={props.className}>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        id={props.label}
        className="w-full border-2 outline-none border-gray-200 rounded p-2 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500" 
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

export default LoginField;
