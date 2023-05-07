import {
  REGISTER_SUCCESS,
  DELETE_MSG,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_SUCCESSFUL,
  GET_USER_SUCCESSFUL,
  SIGN_OFF
} from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
    case REGISTER_SUCCESS:
      const alert = {
        msg: action.payload.msg,
        category: "success",
      }
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authenticated: true,
        msg: alert,
      };
    case REGISTER_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        authenticated: false,
        msg: action.payload,
      };
    case DELETE_MSG:
      return {
        ...state,
        msg: null,
      }
    case GET_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: true,
        isAdmin: action.payload.roles.some(rol => rol.name === "admin")
      };

    case GET_USER_SUCCESSFUL:
      return {
        ...state,
        loading: false
      }
    case SIGN_OFF:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        authenticated: false,
        loading: false
      }
    default:
      return state;
  }
};
