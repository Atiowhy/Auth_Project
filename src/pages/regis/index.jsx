import React from 'react';
import Bg from '../../assets/bg.jpg';
import gitar from '../../assets/gitar.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import RegisAction from '../../redux/actions/regis';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    emai: '',
    password: '',
  });

  const regisData = (e) => {
    e.preventDefault();
    dispatch(RegisAction(data, navigate));
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
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="card-body">
            <div className="card-title d-flex justify-content-center border-bottom border-2 border-secondary">
              <div
                className="R"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h3>R</h3>
              </div>
              <div
                className="e"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1600"
              >
                <h3>E</h3>
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
                <h3>S</h3>
              </div>
              <div
                className="n"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000"
              >
                <h3>T</h3>
              </div>
              <div
                className="n"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2100"
              >
                <h3>E</h3>
              </div>
              <div
                className="n"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2200"
              >
                <h3>R</h3>
              </div>
            </div>
            <div
              className="subtitle d-flex justify-content-center text-muted"
              data-aos="zoom-in"
            >
              <p className="text-warning">Log In to your existing Account</p>
            </div>
            <form className="mt-3" onSubmit={(e) => regisData(e)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control shadow"
                  placeholder="Email Address"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control shadow"
                  placeholder="Email Address"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
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
                    setData({ ...data, password: e.target.value })
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
                  Register
                </button>
              </div>
              <div className="already mt-5 text-center">
                <p className="text-muted">
                  Have account?
                  <span>
                    <Link
                      to={'/'}
                      className="text-decoration-none ms-1 text-warning"
                    >
                      Log In
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

export default Register;
