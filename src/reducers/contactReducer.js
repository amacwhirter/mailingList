import * as types from '../actions/contactActions';

export default function contacts(state = [], action, payload) {
  switch (action.type) {
    case types.LOAD_CONTACTS_SUCCESS:
      return action.payload;

    case types.CREATE_CONTACT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    case types.UPDATE_CONTACT_SUCCESS:
      return [
        ...state.filter(contact => contact.id !== action.contact.id),
        Object.assign({}, action.payload)
      ];

    default:
      return state;
  }
}
