import React from "react";

export default function WindDirection(props) {
  // const deg = props.data.wind.deg;
  // console.log(props.data);
  const arrowStyle = {
    width: "15",
    transform: "rotate(-45deg)"
    // height: "20px",
    // backgroundColor: "red"
  };

  // switch (deg) {
  //   case deg > 0 && deg < 45:
  //     console.log("hui");
  //     break;

  //   case deg > 46 && deg < 90:
  //     console.log("hui");
  //     break;

  //   case deg >= 90 && deg <= 135:
  //     console.log("hui");
  //     break;

  //   default:
  //     break;
  // }

  return (
    <span>
      <svg
        style={arrowStyle}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 242.133 242.133"
      >
        <path d="M227.133 0H174.1c-6.067 0-11.536 3.655-13.858 9.26-2.321 5.605-1.038 12.057 3.252 16.347l15.91 15.91L4.393 216.526c-5.858 5.857-5.858 15.355 0 21.213 2.929 2.929 6.767 4.394 10.606 4.394 3.838 0 7.678-1.465 10.607-4.394L200.616 62.73l15.91 15.91c2.87 2.87 6.706 4.394 10.609 4.394 1.933 0 3.882-.374 5.737-1.142 5.605-2.322 9.26-7.791 9.26-13.858V15c.001-8.284-6.715-15-14.999-15z" />
      </svg>
    </span>
  );
}
