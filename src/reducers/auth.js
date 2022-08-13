import {
  AUTHENTICATION,
  REGISTER_COMPLETE,
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
  Login: {
    Uemail: "",
    UID: "",
    Verified: false,
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
    case AUTHENTICATION:
      return {
        ...state,
        Login: {
          ...state.Login,
          Uemail: action.data.Uemail,
          UID: action.data.UID,
          Verified: action.data.Verified,
        },
      };
    case REGISTER_COMPLETE:
      return {
        ...state,
        Registration: {
          ...initialAuthState.Registration,
        },
      };

    default:
      return state;
  }
}
