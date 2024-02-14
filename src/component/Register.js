import React, { useState } from 'react'
import Header from './Header'
import NavbarConponent from './NavbarComponent'
import Menu from './Menu'
import FooterComponent from './FooterComponent'

const Register = () => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [canSubmit, setCanSubmit] = useState(true);
  const [passWord, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleUserNameChange = (event) => {
    const { value } = event.target;
    setUserName(value);
  };
  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);

    // Kiểm tra số điện thoại có đúng định dạng không
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(value)) {
      setPhoneNumberError('Số điện thoại không hợp lệ');
      setCanSubmit(false);
    } else {
      setPhoneNumberError('');
      setCanSubmit(true);
    }
  };
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
    const passwordRegex = /^(?=.*[A-Za-z]).{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError('Mật khẩu phải chứa ít nhất 8 ký tự và ít nhất một chữ cái');
      setCanSubmit(false);
    } else {
      setPasswordError('');
      setCanSubmit(true);
    }
  };

  //ConfirmPassword
  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);

    if (value !== passWord) {
      setConfirmPasswordError('Mật khẩu nhập lại không trùng khớp');
      setCanSubmit(false);
    } else {
      setConfirmPasswordError('');
      setCanSubmit(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Xử lý khi nhấn nút submit
    if (canSubmit) {
      // Gửi dữ liệu đăng ký đến API
      try {
        const response = await fetch('http://localhost:8080/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName,
            phoneNumber,
            email,
            passWord,
            status: 1,
            typeID: 1,
          }),
        });

        if (response.ok) {
          const responseData = await response.json(); // Chuyển đổi phản hồi thành đối tượng JavaScript
          console.log('Đăng ký thành công!');
          console.log('Thông tin người dùng:', responseData);
        } else {
          console.error('Đăng ký thất bại!');
        }
      } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
      }
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
              <h2 className='text-center' style={{ color: '#FEAFA2' }}>Đăng ký</h2>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label>Họ và Tên</label>
                    <input
                      type="text"
                      className="form-control"

                      value={userName}
                      onChange={handleUserNameChange}
                      placeholder="Nhập Họ & Tên"
                    />

                  </div>

                  <div className="form-group mb-3">
                    <label>Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      placeholder="Nhập Số điện thoại"
                    />
                    {phoneNumberError &&
                      <small className=" text-danger">
                        {phoneNumberError}
                      </small>
                    }
                  </div>

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
                  <div className="form-group mb-3">
                    <label>Nhập lại mật khẩu</label>
                    <input
                      type="password"
                      className="form-control"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      placeholder="Nhập lại mật khẩu"
                    />
                    {confirmPasswordError && <div className="text-danger">{confirmPasswordError}</div>}
                  </div>
                  <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label mb-3" >Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#FEAFA2', border: 'none' }} disabled={!canSubmit}>
                    Đăng ký
                  </button>
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

export default Register