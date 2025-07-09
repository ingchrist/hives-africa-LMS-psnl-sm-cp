import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/21d57e5d947566565327522137d4ab593142ff9f",
      category: "GAMIFIED PROGRESSION",
      description:
        "Unlock achievements, earn points, level up, and track your progress through community leaderboards.",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d5c48bb8141ed892c9cf1c35a1399c3f18486b93",
      category: "INTERACTIVE LABS",
      description:
        "Hands-on, dockerized vulnerable machines with OpenVPN access to help you practice real-world skills in a safe environment.",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/27eb8030d0d450c4291a97c1377524a323b27e2e",
      category: "STRUCTURED CURRICULUM",
      description:
        "Access expert mentors for real-time guidance, feedback, and career advice to accelerate your learning journey.",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0652750c085b26efe8280a9be69233cd6986ec8b",
      category: "MENTORSHIP INTEGRATION",
      description:
        "Access expert mentors for real-time guidance, feedback, and career advice to accelerate your learning journey.",
    },
    {
      id: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7358ff6840973a9ec9b0ae80ddc1fd23d6ae7537",
      category: "JOB-READY SKILLS",
      description:
        "Unlock achievements, earn points, level up, and track your progress through community leaderboards.",
    },
    {
      id: 6,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ebec682ad121b8000bcf3f507f835770cd10f6c3",
      category: "COMMUNITY FEED",
      description:
        "Stay connected with peers, share your accomplishments, give and receive kudos, and stay motivated through social-style updates.",
    },
  ];

  return (
    <section className="bg-[#0B1321] px-8 py-18 flex flex-col justify-center items-center gap-12 relative">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-70">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1B1B1B 1.2px, transparent 1.2px),
              linear-gradient(to bottom, #1B1B1B 1.2px, transparent 1.2px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-start w-full gap-2 mb-8">
          <div className="flex flex-col items-start gap-1 w-full">
            <div className="w-full text-[#99E500] font-['Nunito'] text-xs font-bold leading-4 tracking-[0.48px] uppercase">
              Your All-in-one cybersecurity learning platform
            </div>
            <div className="w-full text-[#D19016] font-['Suisse_Intl'] text-2xl font-bold leading-[132%] tracking-[0.096px]">
              Everything you need for a successful Cybersecurity Career
            </div>
          </div>
          <div className="w-full text-[#8B949E] font-['Circular_Std'] text-base font-medium leading-6 tracking-[0.2px]">
            At AquilaCyberLMS, we've crafted a comprehensive platform to help
            you grow from beginner to pro — with all the tools, resources, and
            support you'll ever need to{" "}
            <span className="text-[#5AA438]">succeed in cybersecurity.</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="flex px-6 py-8 flex-col justify-center items-center gap-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col items-start gap-6">
                <img
                  src={feature.image}
                  alt={feature.category}
                  className="w-full h-[180px] rounded-xl object-cover"
                />
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="w-full text-[#5BC551] font-['Inter'] text-sm font-bold leading-5 tracking-[1px] uppercase">
                    {feature.category}
                  </div>
                  <div className="w-full text-[#EFEFEF] font-['Circular_Std'] text-base font-bold leading-6">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="flex flex-col justify-center items-end gap-5 w-full">
          {/* All-in-One Learning Hub Card */}
          <div className="flex px-4 py-4 flex-col items-start gap-3 w-full rounded-[10px] border border-[#FA0B53] bg-gradient-to-b from-[rgba(250,11,83,0.21)] to-[rgba(250,11,83,0.06)] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.20)]">
            <div className="flex justify-center items-center gap-4 w-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                  fill="#F3EDE8"
                />
              </svg>
              <div className="flex-1 text-[#F3EDE8] font-['Circular_Std'] text-base font-normal leading-6">
                Your{" "}
                <span className="font-bold">
                  All-in-One Learning Hub, Interactive & Engaging
                </span>
              </div>
            </div>
          </div>

          {/* Community-Driven Card */}
          <div className="flex px-4 py-4 flex-col items-start gap-3 w-full rounded-[10px] border border-[#FABE0B] bg-gradient-to-b from-[rgba(250,154,11,0.21)] to-[rgba(250,174,11,0.06)] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.20)]">
            <div className="flex justify-center items-center gap-4 w-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke="#F3EDE8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                  stroke="#F3EDE8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 21V19C23 18.1645 22.7155 17.3541 22.2009 16.6977C21.6864 16.0414 20.9714 15.5751 20.1561 15.3677"
                  stroke="#F3EDE8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3.36756C16.8156 3.57483 17.5308 4.04088 18.0456 4.69687C18.5604 5.35287 18.8451 6.16275 18.8451 6.99756C18.8451 7.83238 18.5604 8.64226 18.0456 9.29825C17.5308 9.95425 16.8156 10.4203 16 10.6276"
                  stroke="#F3EDE8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex-1 text-[#F3EDE8] font-['Circular_Std'] text-base font-bold leading-6">
                Community-Driven, Expert Mentors
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection };
