import React from "react";

export const Title = function ({ titleString }) {
  return (
    <div className="menu-title">
      <p>{titleString}</p>
    </div>
  );
}

export const SideItem = function ({ menu, isActive }) {
  return isActive === true ? (
    <div className="menu-active">
      <p>{menu.name}</p>
    </div>
  ) : (
    <div className="menu-common">
      <p>{menu.name}</p>
    </div>
  );
}

export const Copyright = function () {
  return (
    <div className="menu-copyright">
      <p>
        © 2014-2022. Han Young<br />
        All contents cannot be copied without permission.
      </p>
    </div>
  );
}