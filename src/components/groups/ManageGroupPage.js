import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NotificationSystem from 'react-notification-system';
import * as groupActions from '../../actions/groupActions';
import GroupForm from './GroupForm';
import {browserHistory} from 'react-router';

export class ManageGroupPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      group: Object.assign({}, this.props.group),
      errors: {},
      saving: false
    };

    this.saveGroup = this.saveGroup.bind(this);
    this.updateGroupState = this.updateGroupState.bind(this);
  }

  addSuccessNotification () {
    this.notificationSystem.addNotification({
      message: 'Group Added Successfully',
      level: 'success',
      position: 'tc',
      autoDismiss: 0,
      action: {
        label: 'Ok, awesome!',
        callback: function() {
          console.log('Notification button clicked!');
          browserHistory.push('/groups');
        }
      }
    });
  }

  addErrorNotification (errors) {
    this.notificationSystem.addNotification({
      message: errors.message,
      level: 'error',
      position: 'tc',
      autoDismiss: 0,
  });
  }

  componentDidMount() {
  this.notificationSystem = this.refs.notificationSystem;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.group.id != nextProps.group.id) {
      this.setState({group: Object.assign({}, nextProps.group)});
    }
  }

  updateGroupState(event) {
    const field = event.target.name;
    let group = Object.assign({}, this.state.group);
    group[field] = event.target.value;
    return this.setState({group: group});
  }

  groupFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.group.name.length < 3) {
      errors.message = 'Name must be at least 3 characters.';
      formIsValid = false;
      this.addErrorNotification(errors);
    }
    if (this.state.group.location.length < 3) {
      errors.message = 'Location must be at least 3 characters.';
      formIsValid = false;
      this.addErrorNotification(errors);
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveGroup(event) {
    event.preventDefault();

    if (!this.groupFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveGroup(this.state.group)
    this.addSuccessNotification();
      if(error => {
        this.setState({saving: false});
      });
  }

  render() {
    return (
      <div>
        <NotificationSystem ref="notificationSystem" />
        <GroupForm
          group={this.state.group}
          onChange={this.updateGroupState}
          onSave={this.saveGroup}
          errors={this.state.errors}
          saving={this.state.saving}
        />
    </div>
    );
  }
}

ManageGroupPage.propTypes = {
  group: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageGroupPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let group = {id: '', name: '', location: ''};

  return {
    group: group
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(groupActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageGroupPage);
