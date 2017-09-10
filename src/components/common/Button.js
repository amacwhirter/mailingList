import React, {PropTypes} from 'react';

const ButtonInput = ({className, id, text, name, disabled, onClick}) => {

  return (
        <button
          type="button"
          id={name}
          name={name}
          className="btn btn-info"
          onClick={onClick}>
          {text}
        </button>
  );
};

ButtonInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default ButtonInput;
