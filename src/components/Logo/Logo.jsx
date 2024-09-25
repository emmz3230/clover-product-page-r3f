import React from "react";

function Logo({ className }) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="lucide lucide-clover"
        viewBox="0 0 24 24"
      >
        <path d="M16.17 7.83L2 22M4.02 12a2.827 2.827 0 113.81-4.17A2.827 2.827 0 1112 4.02a2.827 2.827 0 114.17 3.81A2.827 2.827 0 1119.98 12a2.827 2.827 0 11-3.81 4.17A2.827 2.827 0 1112 19.98a2.827 2.827 0 11-4.17-3.81A1 1 0 114 12M7.83 7.83l8.34 8.34"></path>
      </svg>
    </div>
  );
}

export default Logo;
