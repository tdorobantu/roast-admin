import * as React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./SimpleNavBar.css";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import LayersIcon from "@mui/icons-material/Layers";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const CustomLink = ({ icon,btnLabel, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="customLink__wrapper">
      <Link to={to} {...props} style={{textDecoration:'none'}}>
        <IconButton>
          <Button  variant={match ? "contained" : "text"} startIcon={icon}>{btnLabel}</Button>
        </IconButton>
      </Link>
    </div>
  );
};

const SimpleNavBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className="simpleNavBar__container">

      <CustomLink icon={<CampaignIcon/>} btnLabel="Campaign" to="/campaign" />
      <CustomLink icon={<LayersIcon/>} btnLabel="Tables" to="/tables" />
      <CustomLink icon={<AccountCircleIcon/>}btnLabel="Account" to="/account" />
    </div>
  );
};

export default SimpleNavBar;
