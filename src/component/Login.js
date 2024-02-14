import React, { useState } from 'react'
import Header from './Header'
import NavbarConponent from './NavbarComponent'
import Menu from './Menu'
import FooterComponent from './FooterComponent'
import { FaFacebookF, FaGoogle  } from "react-icons/fa";

const Login = () => {
 
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [canSubmit, setCanSubmit] = useState(true);
  const [passWord, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
 
  
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    // Kiểm tra email có đúng định dạng không
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      setEmailError('Email không hợp lệ');
      setCanSubmit(false);
    } else {
      setEmailError('');
      setCanSubmit(true);
    }
  };
  //password
  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);

    // Kiểm tra mật khẩu phải có ít nhất 8 ký tự và chứa ít nhất một chữ cái
    // const passwordRegex = /^(?=.*[A-Za-z]).{8,}$/;
    // if (!passwordRegex.test(value)) {
    //   setPasswordError('Mật khẩu phải chứa ít nhất 8 ký tự và ít nhất một chữ cái');
    //   setCanSubmit(false);
    // } else {
    //   setPasswordError('');
    //   setCanSubmit(true);
    // }
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Xử lý khi nhấn nút submit
    if (canSubmit) {
      // Gửi dữ liệu đăng ký đến API
      console.log('thanh cong')
 
    } else {
      console.log('Vui lòng nhập đúng thông tin');
    }
  };



  return (
    <div>
      <Header />
      <div style={{ paddingBottom: '10px' }}>
        <Menu />
      </div>
      <div className="container" style={styles.container}>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="card">
              <h2 className='text-center' style={{ color: '#FEAFA2' }}>Đăng Nhập</h2>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                 

                

                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Nhập Email"
                    />
                    {emailError && <small className="text-danger">{emailError}</small>}
                  </div>
                  <div className="form-group mb-3">
                    <label>Mật khẩu</label>
                    <input
                      type="password"
                      className="form-control"
                      value={passWord}
                      onChange={handlePasswordChange}
                      placeholder="Nhập mật khẩu"
                    />
                    {passwordError && <small className="text-danger">{passwordError}</small>}
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#FEAFA2', border: 'none' }} disabled={!canSubmit}>
                    Đăng ký
                  </button>
              
                  <p style={{fontSize: '15px', color: 'gray'}} className='from-text text-center md-3'>Quên mật Khẩu</p>
                  <h6 className='from-text text-center md-3' style={{paddingBottom: '30px'}}>Hoặc đăng nhập với:</h6>

                  <div className="form-group mb-3">
                  <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#2e4b88', border: 'none' }} disabled={!canSubmit}>
                  <FaFacebookF/>  Đăng Nhập bằng Facebook
                  </button>
                  </div>

                  <div className="form-group mb-3">
                  <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#ea4235', border: 'none' }} disabled={!canSubmit}>
                    <FaGoogle />  Đăng nhập bằng Google
                  </button>
                  </div>
                 
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}
const styles = {
  container: {
    fontFamily: 'Montserrat',


  },
}

export default Login