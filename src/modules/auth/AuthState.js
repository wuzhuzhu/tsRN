// Initial state
const initialState = {
  isLoggedIn: false,
  currentUser: null,
  authenticationToken: null
};

// Actions
const USER_LOGIN_SUCCESS = 'AppState/USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'AppState/USER_LOGIN_ERROR';

export function onUserLoginSuccess(profile, token) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      profile,
      token,
    }
  };
}

export function onUserLoginError(error) {
  return {
    type: USER_LOGIN_ERROR,
    payload: error,
    error: true
  };
}

// Reducer
export default function AuthStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload.profile,
        authenticationToken: action.payload.token
      };
    case USER_LOGIN_ERROR:
      return initialState;
    default:
      return state;
  }
}
