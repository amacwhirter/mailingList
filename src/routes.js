import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Inbox from './components/inbox/Inbox';
import ManageComposePage from './components/compose/ManageComposePage';
import ContactsPage from './components/contacts/ContactsPage';
import ManageContactPage from './components/contacts/ManageContactPage';
import GroupsPage from './components/groups/GroupsPage';
import ManageGroupPage from './components/groups/ManageGroupPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Inbox} />
    <Route path="inbox" component={Inbox} />
    <Route path="compose" component={ManageComposePage} />
    <Route path="contacts" component={ContactsPage} />
    <Route path="managecontacts" component={ManageContactPage} />
    <Route path="groups" component={GroupsPage} />
    <Route path="managegroups" component={ManageGroupPage} />
  </Route>
);
