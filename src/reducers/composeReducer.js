import * as types from '../actions/composeActions';

export default function emails(state = [], action, payload) {
  switch (action.type) {
    case types.SEND_EMAIL_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    default:
      return state;
  }
}
