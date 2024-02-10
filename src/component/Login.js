import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import Header from './Header'
import Menu from './Menu'
import { FaFacebook, FaGoogle,FaGithub,FaTwitter    } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import FooterComponent from './FooterComponent';
import { Link } from 'react-router-dom';

const Login = () => {
    const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  
  return (
    <div>
        <Header/>
        <Menu/>
        <div style={styles.container}>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >
            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
            <MDBTabsItem>
            <Link to="/login" style={{textDecoration: 'none'}}>
      <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} 
         style={{ backgroundColor: justifyActive === 'tab1' ? '#FEAFA2' : 'rgba(204, 204, 204, 0.4)', color:justifyActive === 'tab1' ? 'white' : 'black' }}
      >
        Đăng nhập
      </MDBTabsLink>
      </Link>
    </MDBTabsItem>
  
    <MDBTabsItem>
    <Link to="/register" style={{textDecoration: 'none'}}>
      <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} activeColor="#FEAFA2"
      style={{ backgroundColor: justifyActive === 'tab2' ? '#FEAFA2' : 'rgba(204, 204, 204, 0.4)', color:justifyActive === 'tab2' ? 'white' : 'black' }}
      >
        Đăng ký
      </MDBTabsLink>
      </Link>
    </MDBTabsItem>
    
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane open={justifyActive === 'tab1'}>

        <div className="text-center mb-3">
            <p>Đăng nhập bằng:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#0863f7' }}>
               <FaFacebook style={styles.Icon}/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#FEAFA2' }}>
                <FaGoogle style={styles.Icon} />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1d9bf0' }}>
               <FaTwitter style={styles.Icon} />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: 'black' }}>
                <FaGithub style={styles.Icon} />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">Hoặc:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>

          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Nhớ mật khẩu' />
            <a style={styles.forget}>Quên mật khẩu?</a>
          </div>

          <MDBBtn className="mb-4 w-100" style={{backgroundColor: '#FEAFA2', border: 'none'}}>Đăng Nhập</MDBBtn>
          <p className="text-center">Chưa có tài khoản? <a style={styles.forget}>Đăng ký</a></p>
        </MDBTabsPane>

        {/* tab2 */}
        <MDBTabsPane open={justifyActive === 'tab2'}>
        <div className="text-center mb-3">
            <p>Đăng nhập bằng:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#0863f7' }}>
               <FaFacebook style={styles.Icon}/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#FEAFA2' }}>
                <FaGoogle style={styles.Icon} />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1d9bf0' }}>
               <FaTwitter style={styles.Icon} />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: 'black' }}>
                <FaGithub style={styles.Icon} />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">Hoặc:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Họ và Tên' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Số điện thoại' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Tôi đã đọc và đồng ý với các điều khoản' />
          </div>

          <MDBBtn className="mb-4 w-100" style={{backgroundColor: '#FEAFA2', border: 'none'}}>Đăng ký</MDBBtn>
        </MDBTabsPane>
      
        {/* tab2 */}
      </MDBTabsContent>
            </MDBContainer>
    
            
        </div>


        <FooterComponent/>
    </div>
  )
}
const styles = {
    Icon: {
        fontSize: '50px',
    },
    container: {
        fontFamily: 'Montserrat',
    
    
      },
      customActiveTab: {
        backgroundColor: 'red !important', // Thay đổi màu nền của tab được chọn thành màu đỏ
        color : 'white !important',
      },
      forget: {
        color: '#ae2214',
        cursor: 'pointer',
        
      }
}

export default Login