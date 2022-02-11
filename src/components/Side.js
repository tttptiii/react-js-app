import React from "react";
import "../assets/styles/side.css";
import { Link, useLocation } from "react-router-dom";

import { Title, SideItem, Copyright } from "./SideItem";

export const Side = function () {
  const pathName = useLocation().pathname;
  const menus = [
    { name: "about", isPage: 1, path: "/about" },
    { isSpacer: 1 },
    { name: "::2014", isPage: 0 },
    { name: "color wheel", isPage: 1, path: "/2014/color-wheel" },
    { name: "Lux Aeterna (MV)", isPage: 1, path: "/2014/lux-aeterna-mv" },
    { name: "rainy cube", isPage: 1, path: "/2014/rainy-cube" },
    { isSpacer: 1 },
    { name: "::2015", isPage: 0 },
    { name: "bubbles", isPage: 1, path: "/2015/bubbles" },
    { name: "wave", isPage: 1, path: "/2015/wave" },
    { name: "PCA", isPage: 1, path: "/2015/probabilistic-cellular-automata" },
    { name: "explosion", isPage: 1, path: "/2015/explosion" },
    { isSpacer: 1 },
    { name: "::2016", isPage: 0 },
    { name: "objects", isPage: 1, path: "/2016/objects" },
    { name: "city", isPage: 1, path: "/2016/city" },
    { isSpacer: 1 },
    { name: "::2017", isPage: 0 },
    { name: "howler", isPage: 1, path: "/2017/howler" },
    { name: "objects", isPage: 1, path: "/2017/objects" },
    { name: "airy cube", isPage: 1, path: "/2017/airy-cube" },
    { isSpacer: 1 },
    { name: "::2018", isPage: 0 },
    { name: "spaces", isPage: 1, path: "/2018/spaces" },
    { name: "sound", isPage: 1, path: "/2018/sound" },
    { isSpacer: 1 },
    { name: "::2019", isPage: 0 },
    { name: "spaces", isPage: 1, path: "/2019/spaces" },
    { name: "sound", isPage: 1, path: "/2019/sound" },
    { name: "sound recorded", isPage: 1, path: "/2019/sound-recorded" },
    { name: "sound played", isPage: 1, path: "/2019/sound-played" },
    { isSpacer: 1 },
    { name: "::2020", isPage: 0 },
    { isSpacer: 1 },
    { name: "::2021", isPage: 0 },
    { isSpacer: 1 },
    { name: "::2022", isPage: 0 },

  ];
  return (
    <div className="sidebar">
      <Link to="/">
        <Title titleString="ttt.pt.iii"></Title>
      </Link>
      {menus.map((menu, index) => {
        return (
          menu.isSpacer ? (
            <div className="spacer"><p><br/></p></div>
          ) : (
            menu.isPage ? (
              <Link to={menu.path} key={index}>
                <SideItem
                  menu={menu}
                  isActive={pathName === menu.path ? true : false}
                />
              </Link>)
              : (
                <SideItem
                  menu={menu}
                />
              )
          )
        );
      })}
      <Copyright></Copyright>
    </div>
  );
}