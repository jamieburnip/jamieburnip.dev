import React from "react";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtu.be/KtYby2QN0kQ"
          className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
        >
          {/* <img src="/assets/terminal-website.jpg" alt="portfolio" className="w-full h-36 md:h-48 object-cover cursor-pointer" /> */}
          <div className="w-full p-4">
            <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">
              Terminal Website
            </h3>
            <p className="flex flex-wrap gap-2 flex-row items-center dark:text-white justify-start text-xs md:text-sm ">
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                HTML
              </span>
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                CSS
              </span>
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                JavaScript
              </span>
            </p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtu.be/g9hPa-G3lfw"
          className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
        >
          {/* <img src="/assets/dev-portfolio.jpg" alt="portfolio" className="w-full h-36 md:h-48 object-cover cursor-pointer" /> */}
          <div className="w-full p-4">
            <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">
              Developer Portfolio
            </h3>
            <p className="flex flex-wrap gap-2 flex-row items-center dark:text-white justify-start text-xs md:text-sm ">
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                React
              </span>
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                Tailwind
              </span>
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                Vite
              </span>
            </p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtu.be/A8eegxL82PI"
          className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
        >
          {/* <img src="/assets/ai-nerf-gun.jpg" alt="portfolio" className="w-full h-36 md:h-48 object-cover cursor-pointer" /> */}
          <div className="w-full p-4">
            <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">
              AI Nerf Gun
            </h3>
            <p className="flex flex-wrap gap-2 flex-row items-center dark:text-white justify-start text-xs md:text-sm ">
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                Python
              </span>
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                C++
              </span>
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                Robotics
              </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
