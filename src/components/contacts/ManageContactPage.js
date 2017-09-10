import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NotificationSystem from 'react-notification-system';
import * as contactActions from '../../actions/contactActions';
import ContactForm from './ContactForm';
import {browserHistory} from 'react-router';

export class ManageContactPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      contact: Object.assign({}, this.props.contact),
      errors: {},
      saving: false
    };

    this.saveContact = this.saveContact.bind(this);
    this.updateContactState = this.updateContactState.bind(this);
  }

  addSuccessNotification () {
    this.notificationSystem.addNotification({
      message: 'Contact Added Successfully',
      level: 'success',
      position: 'tc',
      autoDismiss: 0,
      action: {
        label: 'Ok, awesome!',
        callback: function() {
          console.log('Notification button clicked!');
          browserHistory.push('/contacts');
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
    if (this.props.contact.id != nextProps.contact.id) {
      this.setState({contact: Object.assign({}, nextProps.contact)});
    }
  }

  updateContactState(event) {
    const field = event.target.name;
    let contact = Object.assign({}, this.state.contact);
    contact[field] = event.target.value;
    return this.setState({contact: contact});
  }

  contactFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.contact.name.length < 3) {
      errors.message = 'Name must be at least 3 characters.';
      formIsValid = false;
      this.addErrorNotification(errors);
    }
    // if (this.state.contact.email.filter !== "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$") {
    //   errors.message = 'Please enter a valid email address.';
    //   formIsValid = false;
    //   this._addErrorNotification(errors);
    // }
    // if (this.state.contact.group.value === "Select Group") {
    //   errors.message = 'Please select a group from the dropdown.';
    //   formIsValid = false;
    //   this._addErrorNotification(errors);
    // }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveContact(event) {
    event.preventDefault();

    if (!this.contactFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveContact(this.state.contact)
    this.addSuccessNotification();
      if(error => {
        this.setState({saving: false});
      });
  }

  render() {
    return (
      <div>
        <NotificationSystem ref="notificationSystem" />
        <ContactForm
          contact={this.state.contact}
          onChange={this.updateContactState}
          onSave={this.saveContact}
          errors={this.state.errors}
          allGroups={this.props.groups}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

ManageContactPage.propTypes = {
  contact: PropTypes.object.isRequired,
  groups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageContactPage.contextTypes = {
  router: PropTypes.object
};

function getContactById(contacts, id) {
  const contact = contacts.filter(contact => contact.id == id);
  if (contact) return contact[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  let contact = {id: '', name: '', email: '', group: ''};

  const groupsFormattedForDropdown = state.groups.map(group => {
    return{
      value: group.id,
      text: group.name
    };
  });

  return {
    contact: contact,
    groups: groupsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageContactPage);
