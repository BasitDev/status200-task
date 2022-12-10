import React, { useEffect, useState } from "react";
import "./../style/users.css";
import image from "./../assets/Images/istockphoto-1165537740-612x612.png";
import axios from "axios";
const Users = () => {
  //GET USER DATA
  const [userData, setUserData] = useState([]);
  const getUserData = async () => {
    const res = await axios.get(`http://localhost:8000/getdata`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.status === 400 || !res.data) {
      console.log("error");
    } else {
      setUserData(res.data);
      console.log("get data");
      // console.log(res.data);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      {userData.length > 0
        ? userData.map((data, id) => {
            return (
              <div className="usersDiv" key={id}>
                <div className="userData">
                  <div className="userImageDiv">
                    <img
                      src={`http://localhost:8000/uploads/${data.image}`}
                      className="userImage"
                    />
                  </div>
                  <div className="userNames">
                    <h3>{data.firstName + " " + data.lastName}</h3>
                  </div>
                  <div className="userDetails">
                    <p>
                      <p className="myDetails">First Name</p>
                      {data.firstName}
                    </p>
                    <p>
                      <p className="myDetails">Last Name</p>
                      {data.lastName}
                    </p>
                    <p>
                      <p className="myDetails">Location</p>
                      {data.country}
                    </p>
                    <p>
                      <p className="myDetails">Email</p>
                      {data.email}
                    </p>
                  </div>
                  <div className="userDescription">
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Users;
