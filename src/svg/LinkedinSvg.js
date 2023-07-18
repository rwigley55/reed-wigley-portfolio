import React from "react";

const LinkedinSvg = (props) => {
  const handleMouseOver = () => {
    props.onMouseOver(); // Call the parent component's onMouseOver function
  };

  const handleMouseOut = () => {
    props.onMouseOut(); // Call the parent component's onMouseOut function
  };

  return (
    // <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    <svg
      fill={props.fill}
      height={props.height}
      width={props.width}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      viewBox="-143 145 512 512"
      class="mx-1"
    >
      <path
        d="M-143,145v512h512V145H-143z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7
	c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6
	c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1
	c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"
      />
    </svg>
    // </span>
  );
};

export default LinkedinSvg;
