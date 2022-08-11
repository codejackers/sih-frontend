import {
  REGISTER_DOC_UID,
  REGISTER_EMAIL_NAME_PASS,
  REGISTER_TIME_SLOT,
} from "../actions/actionTypes";

const initialAuthState = {
  Registration: {
    Uemail: "",
    Uname: "",
    UID: "",
    DOC: "",
    Pass: "",
    Slot: "",
  },
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case REGISTER_EMAIL_NAME_PASS:
      return {
        ...state,
        Registration: {
          ...state.Registration,
          Uemail: action.data.email,
          Uname: action.data.name,
          Pass: action.data.pass,
        },
      };
    case REGISTER_TIME_SLOT:
      return {
        ...state,
        Registration: {
          ...state.Registration,
          Slot: action.data.slot,
        },
      };
    case REGISTER_DOC_UID:
      return {
        ...state,
        Registration: {
          ...state.Registration,
          UID: action.data.uid,
          DOC: action.data.doc,
        },
      };

    default:
      return state;
  }
}
