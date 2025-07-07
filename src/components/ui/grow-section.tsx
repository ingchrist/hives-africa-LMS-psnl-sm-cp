import React from "react";

const GrowSection = () => {
  const features = [
    {
      icon: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="12"
            width="28"
            height="20"
            rx="2"
            stroke="#8BAD85"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="10"
            y="14"
            width="24"
            height="16"
            rx="1"
            fill="#8BAD85"
            fillOpacity="0.1"
          />
          <circle cx="22" cy="22" r="3" fill="#8BAD85" />
          <path
            d="M19 25h6M17 28h10"
            stroke="#8BAD85"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Interactive Labs & Quests",
      description:
        "Learn by practicing with labs designed by real security professionals.",
    },
    {
      icon: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 8L26 16H18L22 8Z" fill="#8BAD85" />
          <path
            d="M15 20L22 32L29 20H15Z"
            stroke="#8BAD85"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="22" cy="26" r="2" fill="#8BAD85" />
        </svg>
      ),
      title: "CTF Challenges & Quests",
      description:
        "Gamified learning that rewards real skills, not just theory.",
    },
    {
      icon: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C12 22 16 18 22 18C28 18 32 22 32 22"
            stroke="#8BAD85"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 26C12 26 16 22 22 22C28 22 32 26 32 26"
            stroke="#8BAD85"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="10" cy="22" r="2" fill="#8BAD85" />
          <circle cx="34" cy="26" r="2" fill="#8BAD85" />
        </svg>
      ),
      title: "Custom Learning Paths",
      description:
        "Whether you're a beginner or pro, we've got a path that fits.",
    },
    {
      icon: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="10"
            width="28"
            height="24"
            rx="3"
            stroke="#8BAD85"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="10"
            y="12"
            width="24"
            height="16"
            rx="1"
            fill="#8BAD85"
            fillOpacity="0.1"
          />
          <circle cx="16" cy="20" r="2" fill="#8BAD85" />
          <circle cx="22" cy="20" r="2" fill="#8BAD85" />
          <circle cx="28" cy="20" r="2" fill="#8BAD85" />
          <path
            d="M12 30h20"
            stroke="#8BAD85"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Mentorship & Community",
      description:
        "Connect with mentors, join collab sprints, or teach others.",
    },
  ];

  return (
    <section className="bg-[#060D14] px-4 pb-4">
      <div className="bg-[#000D19] border-[24px] border-[#1A173D] rounded-t-[4px] px-6 py-8">
        <div className="max-w-[1188px] mx-auto">
          <h2 className="text-[#D19016] text-center text-2xl font-bold leading-[132%] tracking-[0.096px] mb-10 font-['Suisse_Intl']">
            Built to put your growth and career first
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-11">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-5 px-3 py-1 min-w-[264px]"
              >
                <div className="w-11 h-11">{feature.icon}</div>

                <div className="flex flex-col gap-2 w-full">
                  <h3 className="text-[#D9D9D9] text-xl font-normal leading-7 font-['Circular_Std']">
                    {feature.title}
                  </h3>

                  <p className="text-[#9DA8BA] text-lg font-normal leading-7 font-['Circular_Std']">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { GrowSection };
