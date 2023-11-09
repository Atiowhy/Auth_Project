import axios from 'axios';
// import swal from 'sweetalert';
import Swal from 'sweetalert2';

const RegisAction = (data, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: 'AUTH_REGIS_PENDING',
    });
    Swal.fire({
      title: 'Please Wait...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const result = await axios.post(
      'https://raspberry-binturong-kit.cyclic.app/auth/register',
      data
    );
    console.log(result);
    dispatch({
      type: 'AUTH_REGIS_SUCCESS',
      payload: result.data,
    });
    Swal.fire({
      icon: 'success',
      title: 'Register Sucessfully!',
      text: 'Please Login',
    });
  } catch (error) {
    dispatch({
      type: 'AUTH_REGISTER_FAILED',
      payload: error.message,
    });
    Swal.fire({
      icon: 'error',
      title: 'Register Failed',
      text: error.response.data.message,
    });
  }
};
export default RegisAction
