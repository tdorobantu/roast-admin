import * as React from "react";
import { Link,   useMatch,
  useResolvedPath, } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CampaignIcon from "@mui/icons-material/Campaign";
import LayersIcon from "@mui/icons-material/Layers";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " (active)"}
    </div>
  );
}


const NavBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label={<Link to="/campaign">Campaign</Link>}
          icon={
            <CustomLink to="/campaign">
              <CampaignIcon />
            </CustomLink>
          }
        />
        <BottomNavigationAction
          label={<Link to="/Tables">Tables</Link>}
          icon={
            <CustomLink to="/Tables">
              <LayersIcon />
            </CustomLink>
          }
        />
        <BottomNavigationAction
          label={<Link to="/Account">Account</Link>}
          icon={
            <CustomLink to="/Account">
              <AccountCircleIcon />
            </CustomLink>
          }
        />
      </BottomNavigation>
    </Box>
  );
};

export default NavBar;
