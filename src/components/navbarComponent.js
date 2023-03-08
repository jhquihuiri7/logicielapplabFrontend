import "../index.css";
import { useState } from "react";

export function NavbarComponent() {
  var routes = [
    {
      route: "Quienes somos",
      href: "#whyus",
    },
    {
      route: "Nuestros servicios",
      href: "#whfyus",
    },
    {
      route: "Trabajos recientes",
      href: "#whsyus",
    },
    {
      route: "Contacto",
      href: "#whyvus",
    },
  ];
  var [open, setOpen] = useState(false);
  var navIcon = {
    open: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-x-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
    ),
    close: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    ),
  };
  return (
    <div className="absolute z-40 top-0 left-0 w-full">
      <nav className="relative z-20 bg-transparent px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="z-20 container flex flex-wrap items-center justify-between mx-auto">
          <a className="flex items-center">
            <img
              src="https://res.cloudinary.com/logicielapplab/image/upload/v1675059391/LogicielApplab/Logo_gvmg58.png"
              className="h-6 mr-3 sm:h-9"
              alt="Logiciel Applab Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Logiciel Applab
            </span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            id="navButton"
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="true"
          >
            <span className="sr-only">Open main menu</span>
            {open ? navIcon.open : navIcon.close}
          </button>
          <div
            id="menu"
            className={`${
              open ? "visible" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {routes.map((items) => (
                <li key={items.href}>
                  <a
                    href={items.href}
                    className={`block py-2 pl-3 pr-4 ${
                      open ? "text-black" : "text-white"
                    } hover:text-[#ed184f] rounded md:bg-transparent md:p-0`}
                    aria-current="page"
                  >
                    {items.route}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
