import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const InboxListRow = ({mail}) => {
  return (
        <tr>
          <td>{mail.name}</td>
          <td>{mail.email}</td>
          <td>{mail.subject}</td>
          <td>{mail.date}</td>
        </tr>
  );
};

InboxListRow.propTypes = {
  mail: PropTypes.object.isRequired
};

export default InboxListRow;
