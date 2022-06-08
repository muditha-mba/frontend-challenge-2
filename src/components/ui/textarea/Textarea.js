import PropTypes from "prop-types";
import React, { useState } from "react";

const Textarea = (props) => {
  const {
    errorMessage,
    onChange,
    placeholder,
    type,
    name,
    required,
    pattern,
    value,
  } = props;
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="input-container">
      <textarea
        placeholder={placeholder}
        type={type}
        name={name}
        required={required}
        pattern={pattern}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        value={value}
      />

      <div className="input__ErrorMessage--container">
        <span className="input-ErrorMessage">{errorMessage}</span>
      </div>
    </div>
  );
};

Textarea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  value: PropTypes.any,
};

export default Textarea;
