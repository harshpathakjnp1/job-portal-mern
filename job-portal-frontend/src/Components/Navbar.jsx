import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      path: "/",
      title: "Start a Search",
    },
    {
      path: "/my-job",
      title: "My Jobs",
    },
    {
      path: "/salary",
      title: "Salary Estimate",
    },
    {
      path: "/post-job",
      title: "Post A Job",
    },
  ];
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <Link className="flex text-2xl gap-2 text-black items-center" to="/">
          {" "}
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M11.327.512c-3.806.034-7.447 3.19-7.181 7.75.102 1.547.88 3.382 2.981 5.733a.365.365 0 00.635-.23l.053-2.266a.36.36 0 00-.1-.255 5.047 5.047 0 013.407-8.502c2.27-.104 4.011 1.236 4.753 2.744.34.693.527 1.45.55 2.222a.357.357 0 00.343.344c.482.015.962.064 1.437.147a.359.359 0 00.424-.344 7.237 7.237 0 00-2.769-5.788C15.02 1.404 13.564.52 11.327.512zm4.94 8.362a14.8 14.8 0 00-2.515.26.364.364 0 00-.17.635l1.695 1.435a.36.36 0 00.316.073 5.026 5.026 0 013.123.281c1.78.787 2.92 2.414 3.042 4.304.208 3.187-2.48 5.539-5.277 5.37a5.032 5.032 0 01-1.751-.412.365.365 0 00-.443.115c-.289.385-.603.75-.94 1.094a.367.367 0 00.09.573c1.887 1.073 3.936 1.16 6.014.32 3.303-1.304 4.63-4.523 4.545-6.847-.096-2.641-1.48-5.072-4.085-6.402-.921-.47-2.04-.812-3.643-.799zm-12.931 1.2a.364.364 0 00-.152.052c-1.41.827-2.216 2.057-2.798 3.777-.285.892-.386 1.51-.386 2.436a7.276 7.276 0 007.157 7.141c1.129.017 2.104-.235 2.962-.583 1.45-.62 3.142-1.597 4.65-4.912a.363.363 0 00-.459-.489l-2.365.867a.357.357 0 00-.195.174 5.03 5.03 0 01-2.268 2.224C6 22.428 2.473 19.784 2.235 16.74c-.145-1.741.494-3.053 1.37-3.982.293-.308.41-.477.663-.662a.36.36 0 00.098-.471 9.173 9.173 0 01-.653-1.326.366.366 0 00-.377-.225z" />
          </svg>
          Job Portal
        </Link>

        {/* Navitems for large devices */}

        <ul className="hidden md:flex gap-12  ">
          {navItems.map(({ title, path }) => {
            return (
              <li key={path} className="text-base  text-primary">
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </ul>

        {/* sign up and login button */}

        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">
            Log-in
          </Link>
          <Link
            to="/sign-up"
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            Sign-up
          </Link>
        </div>

        {/* mobile menu */}

        <div className="md:hidden block">
          <button onClick={handleToggler}>
            {isMenuOpen ? (
              <svg
                className="w-5 h-5 text-primary"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM676.1 657.9c4.4 5.2.7 13.1-6.1 13.1h-58.9c-4.7 0-9.2-2.1-12.3-5.7L512 561.8l-86.8 103.5c-3 3.6-7.5 5.7-12.3 5.7H354c-6.8 0-10.5-7.9-6.1-13.1L470.2 512 347.9 366.1A7.95 7.95 0 01354 353h58.9c4.7 0 9.2 2.1 12.3 5.7L512 462.2l86.8-103.5c3-3.6 7.5-5.7 12.3-5.7H670c6.8 0 10.5 7.9 6.1 13.1L553.8 512l122.3 145.9z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-primary"
                viewBox="0 0 448 512"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
              >
                <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* nav items for mobile  */}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ title, path }) => {
            return (
              <li key={path} className="text-base first: py-1">
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
          <li>
            <Link to="/login" className="  py-2  rounded">
              Log-in
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
