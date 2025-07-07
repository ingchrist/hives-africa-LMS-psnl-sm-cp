import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-navbar-background border-b border-navbar-border px-8 py-6 flex justify-between items-center relative">
      <div className="flex items-center gap-2">
        <svg
          className="w-8 h-8 flex-shrink-0"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.6585 24.6659C23.0518 24.6659 24.9663 22.726 24.9347 20.333C24.9032 17.9399 22.9375 16 20.5443 16C18.151 16 16.2365 17.9399 16.2681 20.333C16.2996 22.726 18.2653 24.6659 20.6585 24.6659Z"
            stroke="#A46428"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.9347 20.333C9.54139 20.333 7.62689 22.2729 7.65844 24.6659C7.68999 27.059 9.65564 28.9989 12.0489 28.9989C14.4422 28.9989 16.3567 27.059 16.3251 24.6659L16.268 20.333H11.9347Z"
            stroke="#A46428"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.4871 11.667C22.8804 11.667 24.7949 9.72714 24.7633 7.33409C24.7318 4.94103 22.7662 3.00113 20.3729 3.00113H16.0396L16.1538 11.667H20.4871Z"
            stroke="#A46428"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.7061 3.00113C9.31287 3.00113 7.39838 4.94103 7.42993 7.33409C7.46148 9.72714 9.42712 11.667 11.8204 11.667H16.1537L16.0395 3.00113L11.7061 3.00113Z"
            stroke="#A46428"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.8204 11.6671C9.42713 11.6671 7.51264 13.607 7.54419 16C7.57574 18.3931 9.54138 20.333 11.9346 20.333H16.268L16.1537 11.6671H11.8204Z"
            stroke="#A46428"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-navbar-text font-hardpixel text-2xl font-normal leading-[124%]">
          HACKRIFT
        </span>
      </div>

      <button
        onClick={toggleMenu}
        className="text-white p-1 hover:bg-white/10 rounded transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21M3 6H21M3 18H21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-navbar-background border-b border-navbar-border z-50">
          <div className="px-8 py-4">
            <div className="text-navbar-text">Navigation menu</div>
          </div>
        </div>
      )}
    </nav>
  );
}
