import React from 'react';

function InputField(props) {
  return (
    <div className={props.className}>
      <label htmlFor={props.label} className={props.labelClass}>{props.label}</label>
      <input
        type={props.type}
        id={props.label}
        className="w-full border-b-2 outline-none border-gray-300 rounded py-1 focus:border-b-cyan-500" 
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

export default InputField;