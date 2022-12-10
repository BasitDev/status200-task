import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import TvIcon from "@mui/icons-material/Tv";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ChatIcon from "@mui/icons-material/Chat";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

function Navbar({ visible, show }) {
  return (
    <>
      <div className="mobile-nav"></div>
      <nav className={visible ? "navbar" : ""}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => show(!visible)}
        >
          {!visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button>
        <div>
          <div className="links nav-top">
            <NavLink to="/profile" className="nav-link">
              <PersonIcon />
              <span>Profile</span>
            </NavLink>
            <NavLink to="/users" className="nav-link">
              <GroupIcon />
              <span>Users</span>
            </NavLink>
            <NavLink to="/others" className="nav-link">
              <TvIcon />
              <span>Control Panel</span>
            </NavLink>
            <NavLink to="/others" className="nav-link">
              <FormatListBulletedIcon />
              <span>Projects</span>
            </NavLink>
            <NavLink to="/others" className="nav-link">
              <CallToActionIcon />
              <span>Task</span>
            </NavLink>
            <NavLink to="/others" className="nav-link">
              <ArrowDropDownCircleIcon />
              <span>Logs</span>
            </NavLink>
            <NavLink to="/others" className="nav-link">
              <ChatIcon />
              <span>Group Chat</span>
            </NavLink>
            <NavLink to="/others" className="nav-link">
              <SummarizeIcon />
              <span>Report</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
