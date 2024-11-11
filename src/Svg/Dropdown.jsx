import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#1C1C1C"
      fillRule="evenodd"
      d="M.527 6.18a.942.942 0 0 1 1.334 0L12.5 16.82 23.14 6.18a.943.943 0 1 1 1.334 1.333L13.167 18.82a.942.942 0 0 1-1.334 0L.527 7.513a.942.942 0 0 1 0-1.334Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
