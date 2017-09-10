import axios from 'axios';
import Cookies from "js-cookie";
const csrftoken = Cookies.get('csrftoken');

//========Action Types=========

export const LOAD_CONTACTS_SUCCESS = "LOAD_CONTACTS_SUCCESS";
export const CREATE_CONTACT_SUCCESS = "CREATE_CONTACT_SUCCESS";
export const UPDATE_CONTACT_SUCCESS = "UPDATE_CONTACT_SUCCESS";

//========Actions=========

export function loadContactsSuccess(contacts) {
  return {type: LOAD_CONTACTS_SUCCESS, contacts}
}

export function createContactSuccess(contact) {
  return {type: CREATE_CONTACT_SUCCESS, contact};
}

export function updateContactSuccess(contact) {
  return {type: UPDATE_CONTACT_SUCCESS, contact};
}

//=========Thunks===========

export function loadContacts() {
  return function(dispatch) {
    axios.get('http://localhost:3000/api/contacts/')
    .then(response => {
      console.log("responses", response);
      dispatch({
        type: LOAD_CONTACTS_SUCCESS,
        payload: response.data
      });
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export function saveContact(contact) {

  let newData=new FormData();
    newData.append('name', contact.name)
    newData.append('email', contact.email)
    newData.append('group', contact.group)

  return function(dispatch, getState) {
    axios({
      method: 'POST',
      url:'http://localhost:3000/create_contact/',
      data: newData,
      headers: {"X-CSRFToken": csrftoken}
    })
    .then(response => {
      dispatch({
        type: CREATE_CONTACT_SUCCESS,
        payload: response.data
      });
      console.log(response.data);
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
      }
    });
  };
}
