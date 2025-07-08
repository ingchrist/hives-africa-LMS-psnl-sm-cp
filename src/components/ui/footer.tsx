"use client";

import React, { useState } from "react";

const footerSections = [
  {
    title: "Product",
    links: [
      "Courses",
      "Learning Paths",
      "Labs",
      "Challenges",
      "Certifications",
    ],
  },
  {
    title: "Resources",
    links: ["Documentation", "Blog", "Community", "Support", "Help Center"],
  },
  {
    title: "Community",
    links: ["Discord", "Forums", "Events", "Leaderboards", "Mentorship"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact", "Press", "Partners"],
  },
];

const Footer = () => {
  const [openSections, setOpenSections] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSection = (sectionName: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  return (
    <footer className="flex px-8 pt-8 pb-6 flex-col items-start gap-6 w-full bg-[#0D1117]">
      <div className="flex flex-col items-start gap-6 w-full">
        {/* Top Container */}
        <div className="flex py-6 justify-between items-start w-full">
          {/* Logo */}
          <div className="w-[144.864px] h-8 relative">
            <div className="flex w-[144px] h-8 transform rotate-[-0.755deg] items-center gap-2 flex-shrink-0 absolute left-0 top-0">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 flex-shrink-0"
              >
                <path
                  d="M20.6585 24.6659C23.0518 24.6659 24.9663 22.726 24.9347 20.333C24.9032 17.9399 22.9375 16 20.5443 16C18.151 16 16.2365 17.9399 16.2681 20.333C16.2996 22.726 18.2653 24.6659 20.6585 24.6659Z"
                  stroke="#A46428"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9347 20.333C9.54139 20.333 7.62689 22.2729 7.65844 24.666C7.68999 27.059 9.65564 28.9989 12.0489 28.9989C14.4422 28.9989 16.3567 27.059 16.3251 24.666L16.268 20.333H11.9347Z"
                  stroke="#A46428"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.4871 11.6669C22.8804 11.6669 24.7949 9.72699 24.7633 7.33393C24.7318 4.94087 22.7662 3.00098 20.3729 3.00098H16.0396L16.1538 11.6669H20.4871Z"
                  stroke="#A46428"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7061 3.00098C9.31287 3.00098 7.39838 4.94087 7.42993 7.33393C7.46148 9.72699 9.42712 11.6669 11.8204 11.6669H16.1537L16.0395 3.00098L11.7061 3.00098Z"
                  stroke="#A46428"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.8204 11.667C9.42713 11.667 7.51264 13.6069 7.54419 15.9999C7.57574 18.393 9.54138 20.3329 11.9346 20.3329H16.268L16.1537 11.667H11.8204Z"
                  stroke="#A46428"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-[#F6F6F6] font-['Hardpixel'] text-2xl font-normal leading-[124%]">
                HACKRIFT
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-start w-full">
            <div className="flex px-2 items-center gap-5">
              {/* WhatsApp */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-[23px]"
              >
                <path
                  d="M0 23.5L1.687 17.5938C0.645998 15.865 0.0989998 13.9052 0.0999998 11.8955C0.103 5.61271 5.43799 0.5 11.993 0.5C15.174 0.500958 18.16 1.68833 20.406 3.84267C22.6509 5.997 23.8869 8.8605 23.8859 11.9061C23.8829 18.1899 18.548 23.3026 11.993 23.3026C10.003 23.3016 8.04198 22.8234 6.30499 21.9149L0 23.5ZM6.59698 19.8516C8.27298 20.8052 9.87298 21.3763 11.989 21.3773C17.437 21.3773 21.875 17.128 21.878 11.9042C21.88 6.66975 17.463 2.42625 11.997 2.42433C6.54498 2.42433 2.11 6.67358 2.108 11.8965C2.107 14.0288 2.75899 15.6254 3.85399 17.2957L2.85499 20.7917L6.59698 19.8516ZM17.984 14.6153C17.91 14.4965 17.712 14.4255 17.414 14.2828C17.117 14.14 15.656 13.4509 15.383 13.356C15.111 13.2612 14.913 13.2133 14.714 13.4988C14.516 13.7835 13.946 14.4255 13.773 14.6153C13.6 14.805 13.426 14.829 13.129 14.6862C12.832 14.5434 11.874 14.2435 10.739 13.2727C9.85598 12.5175 9.25898 11.585 9.08598 11.2995C8.91298 11.0148 9.06798 10.8605 9.21598 10.7187C9.34998 10.5912 9.51298 10.3862 9.66198 10.2194C9.81298 10.0546 9.86198 9.93575 9.96198 9.74504C10.061 9.55529 10.012 9.38854 9.93698 9.24575C9.86198 9.10392 9.26798 7.70187 9.02098 7.13167C8.77898 6.57679 8.53398 6.65154 8.35198 6.64292L7.78198 6.63333C7.58398 6.63333 7.26198 6.70425 6.98998 6.98983C6.71798 7.27542 5.94999 7.9635 5.94999 9.36554C5.94999 10.7676 7.01498 12.1217 7.16298 12.3115C7.31198 12.5012 9.25798 15.3781 12.239 16.6115C12.948 16.9048 13.502 17.0801 13.933 17.2114C14.645 17.428 15.293 17.3973 15.805 17.3245C16.376 17.243 17.563 16.6355 17.811 15.9704C18.059 15.3043 18.059 14.7341 17.984 14.6153Z"
                  fill="white"
                />
              </svg>

              {/* GitHub */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <g clipPath="url(#clip0_403_4941)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0099 0C5.36875 0 0 5.40833 0 12.0992C0 17.4475 3.43994 21.9748 8.21205 23.5771C8.80869 23.6976 9.02724 23.3168 9.02724 22.9965C9.02724 22.716 9.00757 21.7545 9.00757 20.7527C5.6667 21.474 4.97099 19.3104 4.97099 19.3104C4.43409 17.9082 3.63858 17.5478 3.63858 17.5478C2.54511 16.8066 3.71823 16.8066 3.71823 16.8066C4.93117 16.8868 5.56763 18.0486 5.56763 18.0486C6.64118 19.8913 8.37111 19.3707 9.06706 19.0501C9.16638 18.2688 9.48473 17.728 9.82275 17.4276C7.15817 17.1471 4.35469 16.1055 4.35469 11.458C4.35469 10.1359 4.8316 9.05428 5.58729 8.21304C5.46807 7.91263 5.0504 6.67043 5.70677 5.00787C5.70677 5.00787 6.72083 4.6873 9.00732 6.24981C9.98625 5.98497 10.9958 5.85024 12.0099 5.84911C13.024 5.84911 14.0577 5.98948 15.0123 6.24981C17.299 4.6873 18.3131 5.00787 18.3131 5.00787C18.9695 6.67043 18.5515 7.91263 18.4323 8.21304C19.2079 9.05428 19.6652 10.1359 19.6652 11.458C19.6652 16.1055 16.8617 17.1269 14.1772 17.4276C14.6148 17.8081 14.9924 18.5292 14.9924 19.6711C14.9924 21.2936 14.9727 22.5957 14.9727 22.9962C14.9727 23.3168 15.1915 23.6976 15.7879 23.5774C20.56 21.9745 23.9999 17.4475 23.9999 12.0992C24.0196 5.40833 18.6312 0 12.0099 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_403_4941">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {/* X (Twitter) */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M18.3263 1.9043H21.6998L14.3297 10.3278L23 21.7903H16.2112L10.894 14.8383L4.80995 21.7903H1.43443L9.31743 12.7804L1 1.9043H7.96111L12.7674 8.25863L18.3263 1.9043ZM17.1423 19.7711H19.0116L6.94539 3.81743H4.93946L17.1423 19.7711Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Mid Container */}
        <div className="flex flex-col items-start gap-8 w-full">
          {/* Brief Container */}
          <div className="flex min-w-[282px] flex-col items-start gap-6 w-full">
            <div className="flex flex-col items-start w-full">
              <div className="min-w-[224px] max-w-[344px] w-full text-white font-['Circular_Std'] text-lg font-bold leading-7">
                Learn and Master Cybersecurity the best way
              </div>
            </div>

            {/* GDPR Item */}
            <div className="flex items-center gap-4 w-full">
              <div className="flex w-12 h-12 justify-center items-center rounded-xl bg-[rgba(255,255,255,0.10)]">
                <div className="flex w-4 h-[22px] flex-col items-start flex-shrink-0">
                  <svg
                    width="16"
                    height="22"
                    viewBox="0 0 16 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-[22px] flex-shrink-0"
                  >
                    <g clipPath="url(#clip0_403_4951)">
                      <path
                        d="M12.4629 20.9781L3.53689 20.61C2.18112 20.61 1.08301 19.5119 1.08301 18.1562L1.3468 13.7331C1.3468 12.3773 2.44491 11.2792 3.80068 11.2792L12.3893 11.0215C13.745 11.0215 14.8431 12.1196 14.8431 13.4754L14.9168 18.5181C14.9168 19.8739 13.8186 20.972 12.4629 20.972V20.9781Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.47778 5.54275C3.47778 3.0398 5.48997 1.02148 7.97452 1.02148C10.4591 1.02148 12.4713 3.03366 12.4713 5.54275V11.0701H3.47778V5.54275Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.13281 15.25V16.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_403_4951">
                        <rect width="16" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="text-white font-['Inter'] text-sm font-normal leading-[21px]">
                GDPR compliant
              </div>
            </div>
          </div>

          {/* Links Container */}
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-5 w-full">
              {footerSections.map((section, index) => (
                <div
                  key={index}
                  className="flex px-6 py-3 items-center gap-4 w-full rounded-lg bg-[rgba(255,255,255,0.08)]"
                >
                  <div className="flex flex-col items-start flex-1">
                    <div className="w-full text-white font-['Circular_Std'] text-base font-bold leading-6">
                      {section.title}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex w-[15px] h-[15px] flex-col justify-center items-start"
                  >
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-[15px] flex-shrink-0 transition-transform duration-200 ${
                        openSections[section.title] ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M12.6851 6.6229L7.99756 11.3104C7.93224 11.3759 7.85462 11.428 7.76915 11.4634C7.68368 11.4989 7.59205 11.5172 7.49951 11.5172C7.40697 11.5172 7.31534 11.4989 7.22987 11.4634C7.14441 11.428 7.06679 11.3759 7.00146 11.3104L2.31396 6.6229C2.18187 6.49081 2.10767 6.31166 2.10767 6.12485C2.10767 5.93805 2.18187 5.7589 2.31396 5.62681C2.44605 5.49472 2.62521 5.42051 2.81201 5.42051C2.99881 5.42051 3.17797 5.49472 3.31006 5.62681L7.5001 9.81684L11.6901 5.62622C11.8222 5.49413 12.0014 5.41992 12.1882 5.41992C12.375 5.41992 12.5541 5.49413 12.6862 5.62622C12.8183 5.75831 12.8925 5.93746 12.8925 6.12427C12.8925 6.31107 12.8183 6.49022 12.6862 6.62231L12.6851 6.6229Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Container */}
        <div className="flex pt-6 flex-col justify-center items-start w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col items-start">
              <div className="text-white font-['Circular_Std'] text-base font-medium leading-6 tracking-[0.032px]">
                Discover Other AlturaCyber Products
              </div>
            </div>

            {/* Product Cards */}
            <div className="flex justify-between items-start w-full">
              {/* HACKRIFT */}
              <div className="flex px-4 py-3 flex-col justify-center items-center rounded-xl bg-[#804D4D]">
                <div className="flex transform rotate-[-0.755deg] items-center gap-1">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[14px] h-[14px]"
                  >
                    <g clipPath="url(#clip0_403_5026)">
                      <path
                        d="M9.0381 10.7904C10.0851 10.7904 10.9227 9.94164 10.9089 8.89469C10.8951 7.84774 10.0352 6.99902 8.98812 6.99902C7.94108 6.99902 7.10347 7.84774 7.11728 8.89469C7.13108 9.94164 7.99106 10.7904 9.0381 10.7904Z"
                        stroke="#58DC84"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.22152 8.89551C4.17446 8.89551 3.33687 9.74421 3.35068 10.7912C3.36448 11.8381 4.22445 12.6868 5.2715 12.6868C6.31856 12.6868 7.15615 11.8381 7.14234 10.7912L7.11735 8.89551H5.22152Z"
                        stroke="#58DC84"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.96315 5.10384C10.0102 5.10384 10.8478 4.25513 10.834 3.20817C10.8202 2.16121 9.96022 1.3125 8.91317 1.3125H7.01733L7.06732 5.10384H8.96315Z"
                        stroke="#58DC84"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.12142 1.3125C4.07436 1.3125 3.23678 2.16121 3.25058 3.20817C3.26438 4.25513 4.12435 5.10384 5.1714 5.10384H7.06724L7.01725 1.3125H5.12142Z"
                        stroke="#58DC84"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.17147 5.10352C4.12441 5.10352 3.28682 5.95222 3.30063 6.99918C3.31443 8.04615 4.1744 8.89485 5.22145 8.89485H7.11729L7.0673 5.10352H5.17147Z"
                        stroke="#58DC84"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_403_5026">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="matrix(1 0 0.0131829 0.999913 0 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="text-[#58DC84] font-['Hardpixel'] text-base font-normal leading-[124%]">
                    HACKRIFT
                  </div>
                </div>
              </div>

              {/* HIT */}
              <div className="flex px-4 py-3 flex-col justify-center items-center rounded-xl bg-[rgba(255,255,255,0.15)]">
                <div className="text-[#F01BE5] font-['Hardpixel'] text-base font-normal leading-[124%]">
                  HIT
                </div>
              </div>

              {/* AquilaCyber */}
              <div className="flex h-[35px] px-4 py-3 flex-col justify-center items-center rounded-xl bg-[rgba(86,115,243,0.15)]">
                <div className="w-[91px] text-[#C15109] font-['Circular_Std'] text-base font-normal leading-[124%]">
                  AquilaCyber
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="flex px-6 py-6 flex-col items-start gap-4 w-full border-t border-[rgba(255,255,255,0.10)] bg-[#0D1117]">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center gap-1.5 w-full">
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex w-4 h-4 justify-center items-center"
              >
                <circle cx="8" cy="8" r="7" stroke="#F0F0F0" strokeWidth="1" />
                <path
                  d="M8 4v4l3 2"
                  stroke="#F0F0F0"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
              <div className="text-[#F0F0F0] font-['Nunito'] text-xs font-medium leading-[124%]">
                2025 AquillaCyber All rights reserved.
              </div>
            </div>
            <div className="text-white font-['Nunito'] text-xs font-medium leading-4 underline">
              <span className="text-[#8692A6] underline">Privacy Policy</span>
              <span className="text-white"> & </span>
              <span className="text-[#8692A6] underline">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
