"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Products", hasDropdown: true },
  { name: "Resources", hasDropdown: true },
  { name: "Hacking labs", hasDropdown: false },
  { name: "About us", hasDropdown: false },
  { name: "FAQs", hasDropdown: false },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-primary-background border-b border-primary-border">
      <div className="px-4 sm:px-8 lg:px-[164px] py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
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
                d="M11.9348 20.333C9.54151 20.333 7.62702 22.2729 7.65857 24.6659C7.69012 27.059 9.65576 28.9989 12.049 28.9989C14.4423 28.9989 16.3568 27.059 16.3252 24.6659L16.2681 20.333H11.9348Z"
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
                d="M11.7063 3.00113C9.31299 3.00113 7.3985 4.94103 7.43005 7.33409C7.4616 9.72714 9.42724 11.667 11.8205 11.667H16.1538L16.0396 3.00113L11.7063 3.00113Z"
                stroke="#A46428"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8205 11.6671C9.42725 11.6671 7.51276 13.607 7.54431 16C7.57586 18.3931 9.5415 20.333 11.9348 20.333H16.2681L16.1538 11.6671H11.8205Z"
                stroke="#A46428"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-hardpixel text-2xl font-normal text-primary-logoText leading-[124%]">
              HACKRIFT
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="flex min-w-20 max-w-36 px-4 py-4 flex-col justify-center items-start relative"
              >
                <div className="flex items-center gap-1">
                  <span className="font-circular text-base font-normal text-primary-navText leading-6">
                    {item.name}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-2 h-2 text-primary-navText" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Login/Signup Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              className={cn(
                "flex px-8 py-3 justify-center items-center gap-2.5",
                "rounded-lg border border-primary-accent",
                "font-circular text-base font-medium text-primary-accent leading-5",
                "hover:bg-primary-accent/10 transition-colors",
              )}
            >
              Login
            </button>
            <button
              className={cn(
                "flex max-w-36 px-8 py-3 flex-col items-start",
                "rounded bg-primary-accent",
                "font-circular text-base font-medium text-primary-dark leading-5",
                "hover:bg-primary-accent/90 transition-colors",
              )}
            >
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-primary-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <span className="font-circular text-base font-normal text-primary-navText">
                    {item.name}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-primary-navText" />
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <button className="w-full px-8 py-3 border border-primary-accent rounded-lg font-circular text-base font-medium text-primary-accent">
                  Login
                </button>
                <button className="w-full px-8 py-3 bg-primary-accent rounded font-circular text-base font-medium text-primary-dark">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
