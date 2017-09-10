import axios from 'axios';
// import {browserHistory} from 'react-router';

//========Action Types=========

export const LOAD_GROUPS_SUCCESS = "LOAD_GROUPS_SUCCESS";
export const CREATE_GROUP_SUCCESS = "CREATE_GROUP_SUCCESS";
export const UPDATE_GROUP_SUCCESS = "UPDATE_GROUP_SUCCESS";

//========Actions=========

export function loadGroupsSuccess(groups) {
  return { type: LOAD_GROUPS_SUCCESS, groups }
}

export function createGroupSuccess(group) {
  return { type: CREATE_GROUP_SUCCESS, group };
}

export function updateGroupSuccess(group) {
  return { type: UPDATE_GROUP_SUCCESS, group };
}

//=========Thunks===========

export function loadGroups() {
  return function(dispatch) {
    axios.get('http://localhost:3000/api/groups/')
    .then(response => {
      dispatch({
        type: LOAD_GROUPS_SUCCESS,
        payload: response.data
      });
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export function saveGroup(group) {
  return function(dispatch, getState) {
    axios({
      method: 'post',
      url:'http://localhost:3000/api/groups/',
      data: {
        name: group.name,
        location: group.location
      }
    })
    .then(response => {
      dispatch({
        type: CREATE_GROUP_SUCCESS,
        payload: response.data
      });
      console.log(response.data);
      // browserHistory.push('/groups');
    })
    .catch((error) => {
      console.log(error);
    })
  };
}
