import React from "react";

const InputField = ({header,placeholder,type, editable}) => {
  return (
    <div>
      <label>
        <h3>{header}</h3>
      </label>
      <input type={type} placeholder={placeholder} disabled={!editable} />
    </div>
  );
};

export default InputField;
