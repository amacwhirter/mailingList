import React, {PropTypes} from 'react';

const TextArea = ({name, label, onChange, placeholder, value, rows, maxLength, misc}) => {

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <textarea
          className="form-control generic-form-control"
          type="text"
          id={name}
          name={name}
          maxLength={maxLength}
          rows={rows}
          placeholder={placeholder}
          defaultValue={value}
          onChange={onChange} />
      </div>
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default TextArea;
