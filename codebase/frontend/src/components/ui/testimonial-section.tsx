import React from "react";

const TestimonialSection = () => {
  return (
    <section className="flex px-8 py-12 flex-col justify-center items-center gap-2.5 w-full bg-[#060D14]">
      <div className="flex p-6 flex-col justify-center items-start gap-12 w-full rounded-lg border border-[rgba(255,255,255,0.05)] bg-[#0B1321] max-w-6xl">
        {/* CTA Section */}
        <div className="flex flex-col items-start gap-4 w-full">
          {/* "For everyone" label */}
          <div className="flex justify-center items-center gap-2">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <mask
                id="mask0_443_1175"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <path d="M20 0.856934H0V19.9046H20V0.856934Z" fill="white" />
              </mask>
              <g mask="url(#mask0_443_1175)">
                <path
                  d="M1.52881 8.7224L20.1641 2.31348L13.4347 20.0613L9.81115 12.1734L1.52881 8.7224Z"
                  fill="white"
                />
              </g>
            </svg>
            <div className="text-white font-['Inter'] text-[17.719px] font-normal leading-[27px]">
              For everyone
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col justify-center items-start gap-2 w-full">
            <div className="flex max-w-[366px] flex-col items-start w-full">
              <h2 className="w-full text-white font-['Circular_Std'] text-[32px] font-medium leading-[124%] tracking-[0.128px]">
                Learn Cybersecurity Better.
              </h2>
            </div>
            <p className="max-w-[396px] w-full text-[#9BA1A5] font-['Circular_Std'] text-base font-normal leading-6 tracking-[0.032px]">
              Whether you're new to cybersecurity or leveling up your career,
              AquilaCyber gives you the tools, the guidance, and the community
              to succeed.
            </p>
          </div>

          {/* Join Now Button */}
          <button className="flex px-8 py-3 flex-col justify-center items-center rounded-lg bg-[#5AA438] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <span className="text-[#0F1626] text-center font-['Circular_Std'] text-lg font-medium leading-6 tracking-[0.8px]">
              Join Now
            </span>
          </button>
        </div>

        {/* Testimonial Section */}
        <div className="flex pb-6 flex-col items-start gap-2.5 w-full rounded-lg bg-gradient-to-r from-[#0a1ae49c] to-transparent relative">
          {/* Background image overlay */}
          <div
            className="absolute inset-0 rounded-lg opacity-30"
            style={{
              backgroundImage:
                "url('https://cdn.builder.io/api/v1/image/assets/TEMP/0a1ae49c2ff692e17ca2d1b6ccab289e66fa3a26')",
              backgroundSize: "127.895% 100%",
              backgroundPosition: "-38.775px 0px",
              backgroundRepeat: "no-repeat",
            }}
          />

          <div className="flex p-6 flex-col justify-center items-center gap-6 w-full rounded-lg border border-[#202837] bg-[#0D1117] relative z-10">
            {/* Quote mark */}
            <div className="flex pt-6 justify-center items-center relative">
              <div className="text-[#210DD2] text-center font-['Circular_Std'] text-[96px] font-medium leading-8 absolute left-0 top-6 w-10 h-8">
                "
              </div>
            </div>

            {/* Testimonial content */}
            <div className="flex flex-col justify-center items-center gap-7">
              <p className="w-full text-[#C2C2C2] text-center font-['Circular_Std'] text-base font-normal leading-6">
                Honestly, I never thought learning cybersecurity could be this
                engaging. I've tried so many platforms, but this one just hits
                differently. The explanations are so clear, even the complex
                stuff feels easy. The structured paths meant I wasn't lost, and
                the best part? The buddy system, I never feel like I'm learning
                alone. It's competitive, but in a good way.
              </p>

              {/* User profile */}
              <div className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full border-4 border-[rgba(18,18,18,0.21)] bg-gray-300 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://cdn.builder.io/api/v1/image/assets/TEMP/user-avatar')",
                    }}
                  />
                </div>
                <div className="flex w-[154px] flex-col items-start">
                  <div className="w-full text-[#F3EDE8] font-['Circular_Std'] text-base font-medium leading-6">
                    Oreoluwa Williams
                  </div>
                  <div className="w-full text-[#F3EDE8] font-['Nunito'] text-xs font-normal leading-[14px] tracking-[0.24px]">
                    Oreoluwa Williams
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex items-center gap-0.5">
              <div className="w-5 h-1.5 rounded-[3px] bg-[#D19016]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
            </div>

            {/* Navigation arrows */}
            <div className="absolute right-[-24px] top-[250px]">
              <button className="flex p-1.5 items-center gap-2.5 rounded-full bg-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#0B1321"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute left-[-24px] top-[250px]">
              <button className="flex p-1.5 items-center gap-2.5 rounded-full opacity-68 bg-[rgba(255,255,255,0.24)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="#0B1321"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TestimonialSection };
