import axios from 'axios';
import Swal from 'sweetalert2';

const LoginAction = (form, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: 'AUTH_LOGIN_PENDING',
    });

    Swal.fire({
      title: 'Please Wait...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    const result = await axios.post(
      `https://raspberry-binturong-kit.cyclic.app/auth/login`,
      form
    );

    console.log(result);

    // Simpan data ke local storage
    localStorage.setItem('name', result.data.data.name);
    localStorage.setItem('token', result.data.data.token);
    localStorage.setItem('email', result.data.data.email);
    localStorage.setItem('phone', result.data.data.phone);

    dispatch({
      type: 'AUTH_LOGIN_SUCCESS',
      payload: result.data,
    });

    // Tampilkan notifikasi sukses
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: `Welcome ${localStorage.getItem('name')}`,
    });
  } catch (error) {
    dispatch({
      type: 'AUTH_LOGIN_FAILED',
      payload: error.message,
    });
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: error.response.data.message,
    });
    console.error(error); // Log error ke konsol untuk informasi lebih lanjut
  }
};

export default LoginAction;
