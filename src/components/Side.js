import React from "react";
import "../assets/styles/side.css";
import { Link, useLocation } from "react-router-dom";

import { Title, SideItem, Copyright } from "./SideItem";

export const Side = function () {
  const pathName = useLocation().pathname;
  const menus = [
    { name: "about", path: "/about" },
    { name: "tab-a", path: "/a" },
    { name: "tab-b", path: "/b" }
  ];
  return (
    <div className="sidebar">
      <Link to="/">
        <Title titleString="ttt.pt.iii"></Title>
      </Link>
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SideItem
              menu={menu}
              isActive={pathName === menu.path ? true : false}
            />
          </Link>
        );
      })}
      <Copyright></Copyright>
    </div>
  );
}