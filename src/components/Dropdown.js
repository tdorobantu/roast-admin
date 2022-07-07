import React, { useState } from "react";
import useAsync from "../hooks/useAsync";
import LoadingCircle from "./LoadingCircle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ErrorText from "./ErrorText";

const Dropdown = ({ header, editable, api }) => {
  const { value, error, loading } = useAsync(api);
  

  const [selected, setSelected] = useState("Select a Country");

  const renderDropdown = (value, error, loading, header) => {
    if (loading) {
      return <LoadingCircle />;
    }

    if (error !== null) {
      return (
        <div>
          <ErrorText />
        </div>
      );
    }

    if (value !== null) {
      const handleChange = (event) => {
        setSelected((prev) => event.target.value);
      };
      return (
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <h3>{header}</h3>
          <Select value={selected} onChange={handleChange} disabled={!editable}>
            {value.data.map((item) => {
              return <MenuItem value={item.value}>{item.value}</MenuItem>;
            })}
          </Select>
        </FormControl>
      );
    }
  };

  return <div>{renderDropdown(value, error, loading, header)}</div>;
};

export default Dropdown;
