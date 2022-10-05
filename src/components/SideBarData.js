import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdAddToPhotos } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Add Event",
    path: "/form",
    icon: <MdAddToPhotos />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <IoIosContacts />,
    cName: "nav-text",
  },
];
