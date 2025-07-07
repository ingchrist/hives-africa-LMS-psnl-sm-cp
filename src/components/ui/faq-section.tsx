"use client";

import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is AquilaCyberLMS?",
      answer:
        "AquilaCyberLMS is a comprehensive cybersecurity learning management system designed to provide hands-on training, structured learning paths, and community-driven education for cybersecurity professionals and enthusiasts of all levels.",
    },
    {
      question: "How much does it cost to join?",
      answer:
        "We offer both free and premium tiers. The free tier includes access to basic courses and community features, while premium memberships unlock advanced labs, one-on-one mentorship, and exclusive content.",
    },
    {
      question: "What makes AquilaCyberLMS different from other platforms?",
      answer:
        "Our platform combines gamified learning with real-world scenarios, offers direct access to cybersecurity experts, provides hands-on labs with vulnerable machines, and fosters a supportive community environment for collaborative learning.",
    },
    {
      question: "Do I need prior experience in cybersecurity?",
      answer:
        "Not at all! Our platform is designed for learners at all levels. We offer beginner-friendly courses that start with the fundamentals and gradually progress to advanced topics. Our structured learning paths ensure you build knowledge systematically.",
    },
    {
      question: "How do the hands-on labs work?",
      answer:
        "Our labs use dockerized vulnerable machines accessible through OpenVPN. This provides a safe, isolated environment where you can practice real-world cybersecurity techniques without any risk to external systems.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex px-10 py-16 flex-col justify-center items-start gap-8 w-full bg-[#0D131D]">
      <h2 className="w-full text-white text-center font-['Suisse_Intl'] text-2xl font-bold leading-[132%] tracking-[-0.88px]">
        Frequently Asked Questions
      </h2>

      <div className="flex max-w-[950px] flex-col items-start gap-4 w-full mx-auto rounded">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex px-5 py-4 flex-col items-start w-full rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.06)] transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <div className="flex-1 text-white font-['Circular_Std'] text-lg font-normal leading-7 tracking-[-0.1px] pr-4">
                {faq.question}
              </div>
              <div className="flex w-[15px] h-[15px] flex-col justify-center items-start">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-[15px] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M12.6851 6.62241L7.99756 11.3099C7.93224 11.3755 7.85462 11.4275 7.76915 11.463C7.68368 11.4984 7.59205 11.5167 7.49951 11.5167C7.40697 11.5167 7.31534 11.4984 7.22987 11.463C7.14441 11.4275 7.06679 11.3755 7.00146 11.3099L2.31396 6.62241C2.18187 6.49032 2.10767 6.31117 2.10767 6.12436C2.10767 5.93756 2.18187 5.75841 2.31396 5.62632C2.44605 5.49423 2.62521 5.42002 2.81201 5.42002C2.99881 5.42002 3.17797 5.49423 3.31006 5.62632L7.5001 9.81636L11.6901 5.62573C11.8222 5.49364 12.0014 5.41943 12.1882 5.41943C12.375 5.41943 12.5541 5.49364 12.6862 5.62573C12.8183 5.75782 12.8925 5.93697 12.8925 6.12378C12.8925 6.31058 12.8183 6.48974 12.6862 6.62183L12.6851 6.62241Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>

            {/* Answer Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-[#9BA1A5] font-['Circular_Std'] text-base font-normal leading-6 pb-2">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { FAQSection };
