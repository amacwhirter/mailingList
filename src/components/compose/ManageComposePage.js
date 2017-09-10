import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NotificationSystem from 'react-notification-system';
import * as composeActions from '../../actions/composeActions';
import ComposeForm from './ComposeForm';
import {browserHistory} from 'react-router';

export class ManageComposePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: Object.assign({}, this.props.email),
      errors: {},
      saving: false
    };

    this.updateComposeState = this.updateComposeState.bind(this);
    this.sendEmail = this.sendEmail.bind(this);

  }

  addSuccessNotification () {
    this.notificationSystem.addNotification({
      message: 'Email Sent Successfully',
      level: 'success',
      position: 'tc',
      autoDismiss: 0,
      action: {
        label: 'Ok, awesome!',
        callback: function() {
          console.log('Notification button clicked!');
          browserHistory.push('/inbox');
    }
  }
});
}

  addErrorNotification (errors) {
    this.notificationSystem.addNotification({
      message: errors.title,
      level: 'error',
      position: 'tc',
      autoDismiss: 0,
  });
  }

  componentDidMount() {
  this.notificationSystem = this.refs.notificationSystem;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.email.id != nextProps.email.id) {
      this.setState({email: Object.assign({}, nextProps.email)});
    }
  }

  updateComposeState(event) {
    const field = event.target.name;
    let email = Object.assign({}, this.state.email);
    email[field] = event.target.value;
    return this.setState({email: email});
    compose.log("EMAIL STATE", email);
  }

  sendEmail(event) {
    event.preventDefault();
    this.setState({sending: true});
    this.props.actions.sendEmail(this.state.email)
    this.addSuccessNotification();
    if(error => {
      this.setState({saving: false});
    });

  }

  render() {
    return (
      <div>
      <NotificationSystem ref="notificationSystem" />
      <ComposeForm
        email={this.state.email}
        onChange={this.updateComposeState}
        onSend={this.sendEmail}
        errors={this.state.errors}
        allGroups={this.props.groups}
        sending={this.state.sending}
      />
    </div>
    );
  }
}

ManageComposePage.propTypes = {
  email: PropTypes.object.isRequired,
  groups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageComposePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let email = {group: '', subject: '', message: ''};

  const groupsFormattedForDropdown = state.groups.map(group => {
    return{
      value: group.id,
      text: group.name
    };
  });

  return {
    email: email,
    groups: groupsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(composeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageComposePage);
