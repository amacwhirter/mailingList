import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as groupActions from '../../actions/groupActions';
import GroupList from './GroupList';

class GroupsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddGroupPage = this.redirectToAddGroupPage.bind(this);
  }

  redirectToAddGroupPage() {
    browserHistory.push('/managegroups');
  }

  render() {
    return (
      <div>
        <h1>Groups</h1>
        <input type="submit"
               value="Add Group"
               className="btn btn-primary"
               onClick={this.redirectToAddGroupPage}/>

        <GroupList groups={this.props.groups}/>
      </div>
    );
  }
}

GroupsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  groups: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    groups: state.groups
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(groupActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupsPage);
