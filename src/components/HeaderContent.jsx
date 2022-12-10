import React, { useState } from "react";
import "./../style/headerContent.css";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
const HeaderContent = () => {
  return (
    <div className="headerContent">
      {/* USER AND ADMIN NAVIGATIONS */}
      <div className="headerArea">
        <div className="headerNavs">
          <div>
            <NavLink
              to="/users"
              style={{
                textDecoration: "none",
              }}
            >
              <h3
                className="usersNav"
                style={{
                  borderBottom: "4px solid #514390",
                }}
              >
                Users
              </h3>
            </NavLink>
          </div>
          <div>
            <h3>Admins</h3>
          </div>
        </div>
      </div>
      {/* SEARCH BAR AND BUTTONS */}
      <div className="searchContent">
        <h2>Users</h2>
        <button className="exportButton">Export to CSV</button>
        <SearchIcon className="searchIcon" fontSize="large" />
        <input type="search" placeholder="Type Anything" />
        <button className="searchButton">Search</button>
        <NavLink to="/user/add">
          <button className="addUser">Add User</button>
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderContent;
