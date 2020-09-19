import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className="sidebarRow ${selected && 'selected'}">
      <Icon className="sidebarRow__icon" />
    </div>
  );
}

export default SidebarRow;
