import React from "react";
import { MdOutlineLiveHelp } from "react-icons/md";

import { LuBadgePercent } from "react-icons/lu";

import { RiCustomerService2Fill, RiMoneyCnyCircleFill } from "react-icons/ri";
import { PiKeyLight } from "react-icons/pi";
import { TbHexagon0Filled, TbBrandProducthunt } from "react-icons/tb";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <TbHexagon0Filled className="icon_header" /> Dashboard
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <PiKeyLight className="icon" /> Dashboard
        </li>
        <li className="sidebar-list-item">
          <TbBrandProducthunt className="icon" /> Product
        </li>
        <li className="sidebar-list-item">
          <RiCustomerService2Fill className="icon" /> Customers
        </li>
        <li className="sidebar-list-item">
          <RiMoneyCnyCircleFill className="icon" /> Income
        </li>
        <li className="sidebar-list-item">
          <LuBadgePercent className="icon" /> promote
        </li>
        <li className="sidebar-list-item">
          <MdOutlineLiveHelp className="icon" /> Help
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
