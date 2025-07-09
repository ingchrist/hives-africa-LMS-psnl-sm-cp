"use client";
import React, { useState, useEffect } from "react";

interface ICourse {
  _id: string;
  title: string;
  price: number;
  imageUrl: string[];
  categories: string[];
  description: string;
  preferences: string[];
  requirements: string[];
}

const CoursesSection = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course`);
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const tabs = [
    { name: "Courses", active: true },
    { name: "Career Paths", active: false },
    { name: "Challenges", active: false },
  ];

  return (
    <section className="bg-[#0B1321] px-6 py-24 relative">
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
        <div className="flex flex-col items-center gap-6 mb-8">
          {/* Learn • Practice • Grow */}
          <div className="flex items-center gap-2">
            <span className="text-[#D19016] text-2xl font-bold font-['Suisse_Intl'] leading-[132%] tracking-[0.096px]">
              Learn
            </span>
            <div className="w-1 h-1 bg-[#A46428] rounded-full" />
            <span className="text-[#D19016] text-2xl font-bold font-['Suisse_Intl'] leading-[132%] tracking-[0.096px]">
              Practice
            </span>
            <div className="w-1 h-1 bg-[#A46428] rounded-full" />
            <span className="text-[#D19016] text-2xl font-bold font-['Suisse_Intl'] leading-[132%] tracking-[0.096px]">
              Grow
            </span>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center items-center gap-6">
            <div className="flex justify-center items-center flex-wrap gap-6">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`flex px-10 py-2 justify-center items-center gap-2.5 rounded border ${
                    tab.active
                      ? "border-[#5AA438] bg-[#9CDA96]"
                      : "border-transparent"
                  }`}
                >
                  <span
                    className={`font-['Circular_Std'] text-base font-medium leading-6 ${
                      tab.active
                        ? "text-[#067728]"
                        : "text-[rgba(232,232,232,0.5)]"
                    }`}
                  >
                    {tab.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Cards */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-9 overflow-x-auto pb-4">
            {courses.map((course) => (
              <div
                key={course._id}
                className="flex w-[336px] min-w-[336px] p-3 items-center gap-2.5 rounded-lg bg-[rgba(133,133,133,0.14)]"
              >
                <div className="flex flex-col items-start gap-5 flex-1">
                  {/* Course Image */}
                  <div className="h-[180px] w-full rounded-md relative overflow-hidden">
                    <img
                      src={course.imageUrl[0]}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Price Badge */}
                    <div className="absolute top-0 left-0 inline-flex px-2 py-1 items-center gap-2 rounded-br bg-[#95B541]">
                      <span className="text-white font-['Circular_Std'] text-sm font-medium leading-[120%]">
                        {course.price}
                      </span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="flex w-full px-1 flex-col items-start gap-3">
                    {/* Category and Title */}
                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="h-3 w-full text-[#B037A6] font-['Nunito'] text-xs font-bold leading-[14px] tracking-[0.024px] uppercase">
                        {course.categories.join(", ")}
                      </div>
                      <div className="w-full text-[#E8E8E8] font-['Circular_Std'] text-lg font-bold leading-7">
                        {course.title}
                      </div>
                    </div>

                    {/* Level and Description */}
                    <div className="flex flex-col items-start gap-2 w-full">
                      <div className="h-[14px] w-full text-white font-['Nunito'] text-xs font-medium leading-5 tracking-[0.024px]">
                        {/* Placeholder for level */}
                      </div>
                      <div className="w-full text-white font-['Circular_Std'] text-sm font-normal leading-5">
                        {course.description}
                      </div>
                    </div>
                  </div>

                  {/* Course Stats */}
                  <div className="flex px-1 items-center flex-wrap gap-3 w-full">
                    <div className="flex items-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0001 17.5L9.9167 17.3749C9.33783 16.5066 9.0484 16.0725 8.666 15.7582C8.32746 15.4799 7.93739 15.2712 7.51809 15.1438C7.04446 15 6.52267 15 5.4791 15H4.33341C3.39999 15 2.93328 15 2.57676 14.8183C2.26316 14.6586 2.00819 14.4036 1.8484 14.09C1.66675 13.7335 1.66675 13.2668 1.66675 12.3333V5.16667C1.66675 4.23325 1.66675 3.76654 1.8484 3.41002C2.00819 3.09641 2.26316 2.84144 2.57676 2.68166C2.93328 2.5 3.39999 2.5 4.33341 2.5H4.66675C6.53359 2.5 7.46701 2.5 8.18005 2.86331C8.80726 3.18289 9.31719 3.69282 9.63677 4.32003C10.0001 5.03307 10.0001 5.96649 10.0001 7.83333M10.0001 17.5V7.83333M10.0001 17.5L10.0835 17.3749C10.6623 16.5066 10.9518 16.0725 11.3342 15.7582C11.6727 15.4799 12.0628 15.2712 12.4821 15.1438C12.9557 15 13.4775 15 14.5211 15H15.6667C16.6002 15 17.0669 15 17.4234 14.8183C17.737 14.6586 17.992 14.4036 18.1518 14.09C18.3334 13.7335 18.3334 13.2668 18.3334 12.3333V5.16667C18.3334 4.23325 18.3334 3.76654 18.1518 3.41002C17.992 3.09641 17.737 2.84144 17.4234 2.68166C17.0669 2.5 16.6002 2.5 15.6667 2.5H15.3334C13.4666 2.5 12.5332 2.5 11.8201 2.86331C11.1929 3.18289 10.683 3.69282 10.3634 4.32003C10.0001 5.03307 10.0001 5.96649 10.0001 7.83333"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {/* Placeholder for modules */}
                    </div>

                    <div className="flex items-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_443_1127)">
                          <path
                            d="M1.66675 9.99997L9.70194 14.0176C9.81126 14.0722 9.86592 14.0996 9.92325 14.1103C9.97403 14.1198 10.0261 14.1198 10.0769 14.1103C10.1342 14.0996 10.1889 14.0722 10.2982 14.0176L18.3334 9.99997M1.66675 14.1666L9.70194 18.1842C9.81126 18.2389 9.86592 18.2662 9.92325 18.277C9.97403 18.2865 10.0261 18.2865 10.0769 18.277C10.1342 18.2662 10.1889 18.2389 10.2982 18.1842L18.3334 14.1666M1.66675 5.83331L9.70194 1.81571C9.81126 1.76105 9.86592 1.73372 9.92325 1.72297C9.97403 1.71344 10.0261 1.71344 10.0769 1.72297C10.1342 1.73372 10.1889 1.76105 10.2982 1.81571L18.3334 5.83331L10.2982 9.8509C10.1889 9.90556 10.1342 9.93289 10.0769 9.94365C10.0261 9.95317 9.97403 9.95317 9.92325 9.94365C9.86592 9.93289 9.81126 9.90556 9.70194 9.8509L1.66675 5.83331Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_443_1127">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      {/* Placeholder for labs */}
                    </div>

                    <div className="flex items-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 16.6666H18.3334V14.9999C18.3334 13.6192 17.2141 12.4999 15.8334 12.4999C15.0371 12.4999 14.3277 12.8723 13.8699 13.4523M14.1667 16.6666H5.83341M14.1667 16.6666V14.9999C14.1667 14.4531 14.0614 13.9308 13.8699 13.4523M5.83341 16.6666H1.66675V14.9999C1.66675 13.6192 2.78604 12.4999 4.16675 12.4999C4.96309 12.4999 5.67246 12.8723 6.13029 13.4523M5.83341 16.6666V14.9999C5.83341 14.4531 5.93877 13.9308 6.13029 13.4523M6.13029 13.4523C6.74467 11.9174 8.24576 10.8333 10.0001 10.8333C11.7544 10.8333 13.2555 11.9174 13.8699 13.4523M12.5001 5.83325C12.5001 7.21396 11.3808 8.33325 10.0001 8.33325C8.61937 8.33325 7.50008 7.21396 7.50008 5.83325C7.50008 4.45254 8.61937 3.33325 10.0001 3.33325C11.3808 3.33325 12.5001 4.45254 12.5001 5.83325ZM17.5001 8.33325C17.5001 9.25373 16.7539 9.99992 15.8334 9.99992C14.9129 9.99992 14.1667 9.25373 14.1667 8.33325C14.1667 7.41278 14.9129 6.66659 15.8334 6.66659C16.7539 6.66659 17.5001 7.41278 17.5001 8.33325ZM5.83341 8.33325C5.83341 9.25373 5.08722 9.99992 4.16675 9.99992C3.24627 9.99992 2.50008 9.25373 2.50008 8.33325C2.50008 7.41278 3.24627 6.66659 4.16675 6.66659C5.08722 6.66659 5.83341 7.41278 5.83341 8.33325Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {/* Placeholder for learners */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-1.5">
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="w-1 h-1 bg-white/17 rounded-full" />
            <div className="w-1 h-1 bg-white/17 rounded-full" />
          </div>
        </div>

        {/* View All Courses Button */}
        <div className="flex justify-center mt-8">
          <button className="flex px-8 py-4 flex-col justify-center items-center rounded-lg bg-[#D19016] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <span className="text-[#0F1626] text-center font-['Circular_Std'] text-lg font-medium leading-6 tracking-[0.8px]">
              View all courses
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export { CoursesSection };
