import axios from 'axios';
import Cookies from "js-cookie";
const csrftoken = Cookies.get('csrftoken');

//========Action Types=========

export const SEND_EMAIL_SUCCESS = "SEND_EMAIL_SUCCESS";

//========Actions=========

export function sendEmailSuccess(email) {
  return {type: SEND_EMAIL_SUCCESS, email};
}

//=========Thunks===========

export function sendEmail(email) {
  console.log(email);
  return function(dispatch, getState) {

    let newData=new FormData();
      newData.append('subject', email.subject)
      newData.append('message', email.message)
      newData.append('group', email.group)

    axios({
      method: 'POST',
      url:'http://localhost:3000/send_email/',
      data: newData,
      headers: {"X-CSRFToken": csrftoken}
    })
    .then(response => {
      dispatch({
        type: SEND_EMAIL_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
      }
    });
  };
}
