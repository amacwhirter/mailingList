import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

let divStyle = {
  margin: "20px"
};

const Header = () => {
  return (
    <div className="nav" style={divStyle}>
      <Nav bsStyle="pills">
        <NavItem eventKey={1} href="/inbox">Inbox</NavItem>
        <NavItem eventKey={2} href="/compose">Compose Message</NavItem>
        <NavDropdown eventKey="3" title="Manage Mailing Lists" id="nav-dropdown">
          <MenuItem eventKey="3.1" href="/contacts">View & Manage Contacts</MenuItem>
          <MenuItem eventKey="3.2" href="/groups">View & Manage Groups</MenuItem>
        </NavDropdown>
      </Nav>
    </div>
  );
};

export default Header;
