import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          label={name}
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
