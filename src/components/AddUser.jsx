import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./../style/adduser.css";

const AddUser = () => {
  //Navigation Hook
  const navigate = useNavigate();

  // Input States
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");

  // Post Api
  const createUser = (e) => {
    e.preventDefault();
    const data = {
      image: image,
      firstName: firstName,
      lastName: lastName,
      email: email,
      country: country,
      description: description,
    };
    console.log(data);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    axios.post(`http://localhost:8000/register`, data, config).then((res) => {
      //after posting data to backend navigate to users page
      navigate("/users");
    });
  };

  return (
    <div className="addUsersDiv">
      <form onSubmit={(e) => createUser(e)}>
        <ul className="form-style-1">
          <li>
            <label>
              Upload User Image <span className="required">*</span>
            </label>
            <input
              style={{ objectFit: "cover" }}
              type="file"
              name="image"
              className="field-long"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </li>
          <li>
            <label>
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              className="field-divided"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />{" "}
            <input
              type="text"
              name="lastName"
              className="field-divided"
              placeholder="Last Name "
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </li>
          <li>
            <label>
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="field-long"
              placeholder="Enter Your Email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label>
              Country <span className="required">*</span>
            </label>
            <input
              type="text"
              name="country"
              className="field-long"
              placeholder="Enter Your Country Name "
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </li>
          <li>
            <label>
              Description <span className="required">*</span>
            </label>
            <textarea
              name="description"
              id="field5"
              className="field-long field-textarea"
              placeholder="Enter Description Here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </li>
          <li>
            <input type="submit" value="Submit" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default AddUser;
