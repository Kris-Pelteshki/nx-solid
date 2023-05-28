import logo from '../logo.svg';

export function Header() {
  return (
    <nav id="site-nav" class="sticky top-0 z-[1000] bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://www.solidjs.com/" class="flex items-center">
          <img src={logo} class="h-8 mr-3" alt="Solid Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Learning SolidJS
          </span>
        </a>

        <div class="hidden w-full md:block md:w-auto">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-primary"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
