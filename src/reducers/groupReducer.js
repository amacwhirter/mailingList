import * as types from '../actions/groupActions';

export default function groups(state = [], action, payload) {
  switch (action.type) {
    case types.LOAD_GROUPS_SUCCESS:
      return action.payload;

    case types.CREATE_GROUP_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    case types.UPDATE_GROUP_SUCCESS:
      return [
        ...state.filter(group => group.id !== action.group.id),
        Object.assign({}, action.payload)
      ];

    default:
      return state;
  }
}
