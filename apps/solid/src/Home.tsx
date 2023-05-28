export function Home() {
  return (
    <>
      <section class=" relative bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div class="py-8 md:py-24 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            The Future of Frontend Frameworks
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            A look into what a modern framework with declarative syntax, simplicity and performance
            looks like. Focus on what's important — keep data flow and rendering simple.
          </p>

          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="https://www.solidjs.com/"
              target="_blank"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-orange-800 focus:ring-4"
            >
              Get started
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.solidjs.com/docs/latest/api"
              target="_blank"
              class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-secondary hover:border-secondary focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
        <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a
              href="#"
              class="text-secondary text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 mb-2"
            >
              <svg
                class="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Tutorial
            </a>
            <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              How to quickly deploy a static website
            </h2>
            <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              Static websites are now used to bootstrap lots of websites and are becoming the basis
              for a variety of tools that even influence both web designers and developers.
            </p>
            <a
              href="#"
              class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Read more
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                class="text-secondary text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 mb-2"
              >
                <svg
                  class="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  ></path>
                </svg>
                Design
              </a>
              <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Start with Flowbite Design System
              </h2>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Static websites are now used to bootstrap lots of websites and are becoming the
                basis for a variety of tools that even influence both web designers and developers.
              </p>
              <a
                href="#"
                class="text-primary hover:text-secondary hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                class="text-secondary text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700  mb-2"
              >
                <svg
                  class="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  ></path>
                </svg>
                Code
              </a>
              <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Best react libraries around the web
              </h2>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Static websites are now used to bootstrap lots of websites and are becoming the
                basis for a variety of tools that even influence both web designers and developers.
              </p>
              <a
                href="#"
                class="text-primary hover:text-secondary hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
