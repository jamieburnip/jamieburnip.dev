import React from "react";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white ">
          Timeline
        </h1>
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700"></div>
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
              <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                Today
              </span>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                YouTube Content Creator
              </h3>
              <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                6 years
              </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
              My humble attempt at building my version of the digital world one
              step at a time by documenting my coding journey and creating
              software engineering and computer science content to help those
              coming behind me.
            </p>
          </li>
        </ol>
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700"></div>
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
              <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                Today
              </span>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                Solo Indie Developer
              </h3>
              <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                4 years
              </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
              I&apos;m a solo indie developer building software for myself and
              clients to showcase on YouTube. All coding projects are built from
              the ground up, from planning and designing all the way to solving
              real-life problems with code.
            </p>
          </li>
        </ol>
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700"></div>
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
              <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                2019
              </span>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                Software Engineer
              </h3>
              <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                2 years
              </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
              I helped build an enterprise application for a Fortune 500 company
              in an Agile team setting. Our tech stack consisted of TypeSciprt,
              Angular, Java, Gradle, and a handful of other languages and tools.
            </p>
          </li>
        </ol>
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700"></div>
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
              <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                2018
              </span>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                Bachelor&apos;s Degree in Computer Science
              </h3>
              <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                5 years
              </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
              I pursued the knowledge that a computer science degree had to
              offer. I learned about computer architecture, computer science
              theory, an array of programming, and aspects of artificial
              intelligence.
            </p>
          </li>
        </ol>
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700"></div>
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
              <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                2013
              </span>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                First Line of Code
              </h3>
              <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                the beginning
              </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
              I wrote my first line of real code that started this journey into
              digital craftsmanship that I never could&apos;ve imagined,
              especially as someone who never saw themselves as anything other
              than a blue collar worker.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Timeline;
