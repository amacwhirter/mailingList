import React, {PropTypes} from 'react';

const GroupListRow = ({group}) => {
  return (
        <tr>
          <td>{group.name}</td>
          <td>{group.location}</td>
        </tr>
  );
};
GroupListRow.propTypes = {
  group: PropTypes.object.isRequired
};

export default GroupListRow;
