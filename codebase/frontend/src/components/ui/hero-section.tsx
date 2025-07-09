"use client";

import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#000D19] to-[#0B121F] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-70">
        <div className="grid grid-cols-[repeat(23,72px)] grid-rows-[repeat(16,72px)] h-full w-full">
          {Array.from({ length: 23 * 16 }).map((_, i) => (
            <div
              key={i}
              className="border-t border-r border-[#1B1B1B]"
              style={{ borderWidth: "1.2px" }}
            />
          ))}
        </div>
      </div>

      {/* Decorative Overlays */}
      <div className="absolute inset-0">
        {/* Grid of overlay cards */}
        <div className="absolute left-[334px] top-[164px] w-[1858px] h-[782px]">
          {/* Row 1 */}
          <div className="absolute left-[-173px] top-0 w-[445px] h-[250px] rounded border border-[rgba(40,64,129,0.28)] bg-transparent" />
          <div className="absolute left-[284px] top-0 w-[445px] h-[250px] rounded border border-[rgba(40,64,129,0.28)] bg-transparent" />
          <div className="absolute left-[740px] top-0 w-[445px] h-[250px] rounded border border-[rgba(40,64,129,0.28)] bg-transparent" />
          <div className="absolute left-[1197px] top-0 w-[445px] h-[250px] rounded border border-[rgba(40,64,129,0.28)] bg-transparent" />

          {/* Row 2 */}
          <div className="absolute left-[-461px] top-[266px] w-[445px] h-[250px] rounded border border-[rgba(40,64,129,0.33)] bg-transparent" />
          <div className="absolute left-0 top-[266px] w-[445px] h-[250px] rounded border border-[rgba(40,64,129,0.33)] bg-transparent" />
          <div className="absolute left-[464px] top-[266px] w-[445px] h-[250px] rounded border border-[rgba(40,64,129,0.40)] bg-transparent" />
          <div className="absolute left-[928px] top-[266px] w-[445px] h-[250px] rounded border border-[rgba(40,64,129,0.40)] bg-transparent" />
          <div className="absolute left-[1413px] top-[266px] w-[445px] h-[250px] rounded border border-[rgba(40,64,129,0.40)] bg-transparent" />

          {/* Additional overlay cards */}
          <div className="absolute left-[-372px] top-[532px] flex gap-3 w-[1815px] h-[250px]">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-[444.72px] h-[250.41px] rounded border border-[rgba(40,64,129,0.40)] bg-transparent"
              />
            ))}
          </div>

          <div className="absolute left-[-224px] top-[794px] flex gap-4 w-[1827px] h-[250px]">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-[444.72px] h-[250.41px] rounded border border-[rgba(40,64,129,0.40)] bg-transparent"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute w-[1496px] h-[647px] opacity-23"
        style={{
          right: "-1504px",
          bottom: "-13px",
          background:
            "radial-gradient(50% 50% at 50% 50%, #A2EB2A 0%, rgba(0, 54, 31, 0.00) 100%)",
        }}
      />

      {/* Main Content */}
      <div
        className="relative z-10 px-8 pt-18 pb-24 flex flex-col justify-end items-start gap-11 min-h-screen w-full"
        style={{ padding: "72px 32px 96px 32px" }}
      >
        <div className="flex flex-col items-start gap-11 w-full">
          {/* Brief Section */}
          <div className="flex flex-col items-start gap-5 w-full">
            {/* Headings */}
            <div className="flex flex-col items-start gap-3 w-full">
              {/* Badge */}
              <div className="flex px-3 py-3 justify-center items-center rounded-lg border border-white/10 bg-[#0D0D0D]">
                <span className="text-[#DADADA] text-center font-[Nunito] text-xs font-normal leading-[14px]">
                  Used by 2,000+ Cybersecurity Enthusiasts
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="w-full font-[Suisse_Intl] text-[32px] font-bold leading-[132%]">
                <span className="text-[#FE6808]">Master Cybersecurity</span>
                <span className="text-[#8BAD85]">
                  {" "}
                  skills, faster and more effectively
                </span>
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 w-full">
              <button className="flex px-6 py-3 flex-col justify-center items-center flex-1 rounded-lg bg-[#D19016] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#D19016]/90 transition-colors">
                <span className="text-[#0F1626] text-center font-circular text-base font-medium leading-5 tracking-[0.8px]">
                  Get Started
                </span>
              </button>

              <button className="flex px-6 py-3 justify-center items-center gap-4 flex-1 rounded-lg bg-gradient-to-r from-[rgba(29,46,72,0.09)] to-[rgba(67,98,145,0.03)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-white/5 transition-colors">
                <span className="text-[#E8E8E8] text-center font-circular text-lg font-medium leading-6 tracking-[0.8px]">
                  Explore
                </span>
                <ArrowRight className="w-5 h-5 text-[#E8E8E8]" />
              </button>
            </div>
          </div>

          {/* User Avatars and Features */}
          <div className="flex flex-col items-start gap-4 w-full">
            {/* User Avatars Row */}
            <div className="flex items-center gap-2 w-full">
              <div className="flex items-center gap-[-12px]">
                {/* Avatar circles */}
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-11 h-11 rounded-full border-4 border-[#121212] bg-gradient-to-br from-orange-400 to-red-500 -ml-3 first:ml-0"
                      style={{
                        backgroundImage: `url('https://i.pravatar.cc/44?img=${i + 1}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  ))}
                  <div className="w-11 h-11 rounded-full border-4 border-[#121212] bg-[#272B2D] -ml-3 flex items-center justify-center">
                    <span className="text-white font-circular text-xs">
                      +200
                    </span>
                  </div>
                </div>
              </div>
              <span className="flex-1 text-[#E8E8E8] font-[Nunito] text-xs font-normal leading-[14px]">
                Over 200+ learners are on the waitlist
              </span>
            </div>

            {/* Features */}
            <div className="flex flex-col justify-center items-center gap-6 w-full">
              <div className="flex justify-center items-center gap-4">
                <Check className="w-5 h-5 text-[#F3EDE8]" />
                <span className="text-[#F3EDE8] font-[Nunito] text-sm font-normal leading-5">
                  Access to structured programs
                </span>
              </div>

              <div className="flex justify-center items-center gap-4">
                <Check className="w-5 h-5 text-[#F3EDE8]" />
                <span className="text-[#F3EDE8] font-[Nunito] text-sm font-normal leading-5">
                  Hands-on Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
