import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
export default function NavLinks() {
  const [heading, setHeading] = useState("");
  const links = [
    // { path: "home", name: "Home" },
    { path: "about", name: "About Us" },
    {
      path: "courses",
      name: "Courses",
      submenu: true,
      sublinks: [
        {
          // Head: "TopWear",
          sublink: [
            { name: "Web Development", path: "courses/web-development" },
            {
              name: "Android Development",
              path: "courses/android-development",
            },
          ],
        },
      ],
    },
    // { path: "services", name: "Services" },
    { path: "class-schedule", name: "Class Schedule" },
    { path: "corporate-Trainings", name: "Corporate Trainings" },
    { path: "fee", name: "Fee" },
    { path: "gallery", name: "Gallery" },
  ];

  return (
    <>
    <NavLink to='home' className={(navClass) => (navClass.isActive ? "nav__active " : "")}><h1>Home</h1></NavLink>
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          className={(navClass) => (navClass.isActive ? "nav__active z-50" : "")}
        >
          <div className="group">
            <h1
              className="py-4 hover:text-red-500 flex justify-between items-center gap-1 group"
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
            >
              {link.name}
              <span className="lg:hidden ">
                {
                  heading === link.name ? <IoIosArrowUp /> : <IoIosArrowDown  />
                }
              </span>
              <span className="hidden lg:block">
                <IoIosArrowDown className="group-hover:rotate-180 hover:rotate-180" />
              </span>
            </h1>
            {link.submenu && (
              <div className="">
                <div className="absolute top-10 hidden  group-hover:lg:block hover:lg:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-slate-800 rotate-45"></div>
                  </div>
                  <div className="bg-slate-800 p-3.5 ">
                    {link.sublinks.map((mysublinks, i) => (
                      <div>
                        {/* <h1 className="text-red-600">{mysublinks.Head}</h1> */}
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-white my-2.5  hover:text-red-600 hover:bg-black/70  p-1.5 ">
                            <Link to={slink.path} key={i}>
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu  */}
          <div className={`${heading === link.name ? "lg:hidden" : "hidden"}`}>
            {link.submenu && (
              <div className="-my-4 z-50">
                <div className="">
                  <div className="">
                    {link.sublinks.map((mysublinks, i) => (
                      <div>
                        {/* <h1 className="text-red-600">{mysublinks.Head}</h1> */}
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-black my-3.5 mx-10 hover:text-red-600">
                            <Link to={slink.path} key={i}>
                              <h1>{slink.name}</h1>
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </NavLink>
      ))}
    </>
  );
}
