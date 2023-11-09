// import state from 'sweetalert/typings/modules/state';

const initialState = {
  data: null,
  isError: false,
  message: '',
  isLoading: false,
};

const RegisReducers = (state = initialState, action) => {
  if (action.type === 'AUTH_REGIS_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'AUTH_REGIS_SUCCESS') {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      message: '',
      isError: false,
    };
  } else if (action.type === 'AUTH_REGIS_FAILED') {
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

export default RegisReducers;
