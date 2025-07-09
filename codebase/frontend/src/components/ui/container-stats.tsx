import React from "react";

const ContainerStats = () => {
  const companies = [
    { name: "SHELLS", type: "gradient" },
    { name: "SHELLS", type: "normal" },
    { name: "Zoomerr", type: "normal" },
    { name: "SHELLS", type: "withIcon" },
    { name: "SHELLS", type: "withIcon2" },
    { name: "SHELLS", type: "normal" },
    { name: "WAVES", type: "gradient2" },
  ];

  return (
    <section className="bg-[#000D19] px-8 py-16 flex flex-col justify-center items-center gap-16">
      {/* Companies Section */}
      <div className="flex flex-col items-center gap-4">
        {/* Header */}
        <div className="flex pl-16 justify-center items-center gap-2.5">
          <h2 className="text-[#E5E7EB] text-center font-['Circular_Std'] text-lg font-medium leading-8">
            Trusted by 20+ partners and organizations
          </h2>
        </div>

        {/* Company Logos */}
        <div className="flex w-full max-w-[1440px] px-24 py-3 justify-center items-center gap-8 flex-wrap">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex px-8 py-5 justify-center items-center gap-2 rounded-xl bg-[rgba(255,255,255,0.12)]"
            >
              {company.type === "withIcon" && (
                <svg
                  width="30"
                  height="32"
                  viewBox="0 0 30 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    d="M15 0L18.75 11.25H30L21.25 18.75L25 30L15 22.5L5 30L8.75 18.75L0 11.25H11.25L15 0Z"
                    fill="white"
                  />
                </svg>
              )}
              {company.type === "withIcon2" && (
                <svg
                  width="30"
                  height="32"
                  viewBox="0 0 30 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <circle cx="15" cy="16" r="15" fill="white" />
                  <circle cx="15" cy="16" r="10" fill="#000D19" />
                </svg>
              )}
              <span
                className={`font-['Roboto'] text-2xl font-bold leading-[110%] ${
                  company.type === "gradient"
                    ? "bg-gradient-to-r from-[rgba(148,163,184,0.06)] via-[rgba(148,163,184,0.5)] to-[#94A3B8] bg-clip-text text-transparent"
                    : company.type === "gradient2"
                      ? "bg-gradient-to-r from-[#94A3B8] via-[rgba(117,129,146,0.63)] to-[rgba(66,73,82,0)] bg-clip-text text-transparent"
                      : "text-white"
                }`}
              >
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Card */}
      <div className="flex px-12 py-8 flex-col justify-center items-center gap-6 w-full max-w-[1200px] rounded-lg bg-[#FDF1D1]">
        {/* Header */}
        <div className="flex items-start gap-4 w-full">
          <h3 className="flex-1 text-[rgba(0,0,0,0.92)] font-['Suisse_Int'l'] text-2xl font-medium leading-[132%]">
            From promotions to transitions, AquilaCyberLMS opens new doors
          </h3>
        </div>

        {/* Stats */}
        <div className="flex items-start gap-12">
          {/* 92% Stat */}
          <div className="flex h-[132px] min-w-[124px] max-w-[200px] flex-col items-center gap-3 flex-1">
            {/* Rocket Icon */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M20 8L24 4C25.1046 4 26 4.89543 26 6V8C26 9.10457 25.1046 10 24 10H22L20 8Z"
                fill="#FE6808"
              />
              <path
                d="M12 20L8 24C8 25.1046 8.89543 26 10 26H12C13.1046 26 14 25.1046 14 24V22L12 20Z"
                fill="#FE6808"
              />
              <path
                d="M8 12L12 8L24 20L20 24L8 12Z"
                fill="#FE6808"
                fillOpacity="0.6"
              />
              <path d="M16 16L20 12L24 16L20 20L16 16Z" fill="#FE6808" />
            </svg>

            <div className="flex flex-col items-center w-full">
              <div className="w-full text-[#A45838] text-center font-['Circular_Std'] text-lg font-bold leading-7">
                92%
              </div>
              <div className="w-full text-[#A45838] text-center font-['Circular_Std'] text-base font-normal leading-5">
                learner satisfaction rate
              </div>
            </div>
          </div>

          {/* 40+ Stat */}
          <div className="flex w-[200px] h-[132px] min-w-[124px] max-w-[200px] flex-col items-center gap-3">
            {/* Trust Icon */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M16 4L20 8H28L24 12V20C24 24.4183 20.4183 28 16 28C11.5817 28 8 24.4183 8 20V12L4 8H12L16 4Z"
                fill="#FE6808"
                fillOpacity="0.6"
              />
              <path
                d="M16 8C18.2091 8 20 9.79086 20 12V20C20 22.2091 18.2091 24 16 24C13.7909 24 12 22.2091 12 20V12C12 9.79086 13.7909 8 16 8Z"
                fill="#FE6808"
              />
              <path
                d="M14 14L15.5 15.5L18 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="flex flex-col items-center w-full">
              <div className="w-full text-[#A45838] text-center font-['Circular_Std'] text-lg font-bold leading-7">
                40+
              </div>
              <div className="w-full text-[#A45838] text-center font-['Circular_Std'] text-base font-normal leading-5">
                organizations trust us
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContainerStats };
