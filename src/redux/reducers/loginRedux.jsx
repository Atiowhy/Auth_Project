// import state from 'sweetalert/typings/modules/state';

const initialState = {
  data: null,
  isError: false,
  message: '',
  isLoading: false,
};

const LoginReducers = (state = initialState, action) => {
  if (action.type === 'AUTH_LOGIN_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'AUTH_LOGIN_SUCCESS') {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      message: '',
      isError: false,
    };
  } else if (action.type === 'AUTH_LOGIN_FAILED') {
    return {
      ...state,
      data: null,
      message: '',
      isLoading: false,
      isError: true,
    };
  } else {
    return {
      state,
    };
  }
};

export default LoginReducers
