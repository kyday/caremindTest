export const LOGIN_SUCCESS = "login/LOGIN_SUCCESS";
export const LOGIN_FAILED = "login/LOGIN_FAILED";

export const setLoginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const setLoginFailed = () => {
  return {
    type: LOGIN_FAILED,
  };
};

const initialState = {
  user: "CareMind",
  profile: "./images/profile.jpg",
  isLogin: true,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isLogin: false,
      };

    default:
      return state;
  }
}
