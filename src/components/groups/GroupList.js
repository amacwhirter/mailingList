import React, {PropTypes} from 'react';
import GroupListRow from './GroupListRow';

const GroupList = ({groups}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Group Name</th>
        <th>Location</th>
      </tr>
      </thead>
      <tbody>
        {groups.map(group =>
          <GroupListRow key={group.id} group={group}/>
        )}
      </tbody>
    </table>
  );
};

GroupList.propTypes = {
  groups: PropTypes.array.isRequired
};

export default GroupList;
