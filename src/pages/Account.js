import React, { useState } from "react";
import "./Account.css";
import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";
import ToggleUI from "../components/ToggleUI";
import { getCountry, getCurrency } from "../api";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

export function Account() {
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    setEdit((prev) => !prev);
  };

  return (
    <div className="account__container">
      <div className="account__heading">
        <h2 className="account__heading account__heading--left">
          Your Profile
        </h2>
        <h2 className="account__heading account__heading--right">Settings</h2>
      </div>
      <div className="account__body">
        <div className="account__column account__column--left" editable={edit}>
          <InputField header="Name" placeholder="Enter Name" editable={edit} />
          <InputField
            header="Store Name"
            placeholder="Enter Store Name"
            editable={edit}
          />
          <Dropdown header="Location" api={getCountry} editable={edit} />
          <Dropdown header="Currency" api={getCurrency} editable={edit} />
          <InputField
            header="Email"
            placeholder="Enter Email"
            editable={edit}
          />
          <InputField
            header="Enter Phone Number"
            placeholder="Enter Phone Number"
            editable={edit}
          />
          <InputField
            header="Enter Address"
            type="email"
            placeholder="Enter Address"
            editable={edit}
          />
        </div>

        <div className="account__column account__column--right">
          <div className="account__column password__square">
            <h2>Change Password</h2>
            <br />
            <InputField
              header="Current Password"
              type="text"
              placeholder="Current Password"
              editable={edit}
            />
            <InputField
              header="New Password"
              type="password"
              placeholder="New Password"
              editable={edit}
            />
            <InputField
              header="Confirm Passwrd"
              type="password"
              placeholder="Confirm Password"
              editable={edit}
            />
          </div>

          <div className="account__column notification__square">
            <h2>Notifications</h2>
            <br />
            <ToggleUI
              header="Toggle"
              description="This is a description"
              editable={edit}
            />
            <ToggleUI
              header="Toggle2"
              description="This is a description"
              editable={edit}
            />
            <ToggleUI
              header="Toggle3"
              description="This is a description"
              editable={edit}
            />
            <ToggleUI
              header="Toggle4"
              description="This is a description"
              editable={edit}
            />
          </div>
        </div>
      </div>
      <div className="account__footer">
        <Button
          onClick={handleClick}
          className="btn__save"
          variant="contained"
          size="medium"
        >
          {edit ? (
            <>
              <SaveAltIcon /> <p>Save</p>
            </>
          ) : (
            <>
              <EditIcon /> <p>Edit</p>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

export default Account;
