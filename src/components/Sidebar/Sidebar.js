import "./Sidebar.css";
import React from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChaiIcon from "@mui/icons-material/Chat";
import MoreVertIcone from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "../SidebarChat/SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/361102949_675090271181613_6925746496077796987_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQrAk8B9pYJot3MTX7MJ_EAS4SYG2vD8d_vBFhXEkwh9g&oe=64D4145B" />
        <div className="sidebarHeaderRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChaiIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcone />
          </IconButton>
        </div>
      </div>
      <div className="sidebarSearch">
        <div className="sidebarSearchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebarChats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
