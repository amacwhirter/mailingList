import React, {PropTypes} from 'react';
import InboxListRow from './InboxListRow';

const InboxList = ({email}) => {
  return (
    <div>
    <h1>Inbox</h1>
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {/* {email.map(email =>
          <InboxListRow key={email.id} eail={email} />
        )} */}
      </tbody>
    </table>
  </div>
  );
};

InboxList.propTypes = {
  // email: PropTypes.array.isRequired
};

export default InboxList;
