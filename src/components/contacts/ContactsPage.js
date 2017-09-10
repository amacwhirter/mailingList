import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as contactActions from '../../actions/contactActions';
import ContactList from './ContactList';

class ContactsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddContactPage = this.redirectToAddContactPage.bind(this);
  }

  redirectToAddContactPage() {
    browserHistory.push('/managecontacts');
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <input type="submit"
               value="Add Contact"
               className="btn btn-primary"
               onClick={this.redirectToAddContactPage}/>

        <ContactList contacts={this.props.contacts}/>
      </div>
    );
  }
}

ContactsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
