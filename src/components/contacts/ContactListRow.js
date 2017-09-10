import React, {PropTypes} from 'react';

const ContactListRow = ({contact}) => {
  return (
        <tr>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.group?contact.group.name:""}</td>
        </tr>
  );
};
ContactListRow.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactListRow;
