import React from "react";

function SearchIcon(props) {
  return (
    <svg
      fill="gray"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="22px"
      height="22px"
      className={props.className}
    >
      <path
        fill="none"
        stroke="gray"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M13 4A9 9 0 1 0 13 22A9 9 0 1 0 13 4Z"
      />
      <path
        fill="none"
        stroke="gray"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M26 26L19.437 19.437"
      />
    </svg>
  );
}

export default SearchIcon;
