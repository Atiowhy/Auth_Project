import React, { useState } from 'react';
import Bg from '../../assets/bg.jpg';
import gitar from '../../assets/gitar.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginAction from '../../redux/actions/login';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const postData = (e) => {
    e.preventDefault();
    dispatch(LoginAction(form, navigate));
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const backgroundStyle = {
    backgroundImage: `url(${Bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}>
        <div
          className="card shadow"
          style={{ width: '20rem' }}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="card-body">
            <div className="card-title d-flex justify-content-center border-bottom border-2 border-secondary">
              <div
                className="l"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h3>L</h3>
              </div>
              <div
                className="o"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1600"
              >
                <h3>O</h3>
              </div>
              <div
                className="g"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1700"
              >
                <h3>G</h3>
              </div>
              <div
                className="i"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1800"
              >
                <h3>I</h3>
              </div>
              <div
                className="n"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1900"
              >
                <h3>N</h3>
              </div>
            </div>
            <div
              className="subtitle d-flex justify-content-center text-muted"
              data-aos="zoom-in"
            >
              <p className="text-warning">Log In to your existing Account</p>
            </div>
            <form className="mt-3" onSubmit={(e) => postData(e)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control shadow"
                  placeholder="Email Address"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control shadow"
                  name="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label text-muted"
                  htmlFor="exampleCheck1"
                >
                  I agree to terms & condition
                </label>
              </div>
              <div className="submit w-100 text-center">
                <button type="submit" className="btn btn-warning w-100 shadow">
                  Login
                </button>
              </div>
              <div className="already mt-5 text-center">
                <p className="text-muted">
                  Dont have account?
                  <span>
                    <Link
                      to={'/regis'}
                      className="text-decoration-none ms-1 text-warning"
                    >
                      Sign Up
                    </Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
