import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./../style/header.css";
import profile from "./../assets/Images/istockphoto-1310095070-612x612.png";
const Header = () => {
  return (
    <div className="parentHeader">
      <div className="Header">
        <div className="logo">
          <p>Nurency</p>
        </div>
        <div className="imageDiv">
          <NotificationsIcon
            style={{
              color: "white",
              margin: "8px 30px 0px 0px",
            }}
          />
          <img src={profile} alt="User Image" className="imageSize" />
          <div className="details">
            <p className="userName">Luke Astero</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
