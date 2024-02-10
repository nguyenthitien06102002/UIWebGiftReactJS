import React from 'react'
import { FaTiktok , FaFacebookSquare , FaYoutube, FaPhoneAlt, FaMapMarkerAlt   } from 'react-icons/fa';
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

import logo from '../assets/images/logo2.png';

const FooterComponent = () => {
  return (
    <div style={{paddingTop: '30px'}} >
   <footer style={styles.bg} className="text-center text-lg-start  ">
      {/* Section: Social media */}
      
      {/* Section: Social media */}

      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              {/* <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Company name
              </h6> */}
               <img src={logo} alt="Company Logo" style={{ maxWidth: '120px' }} />


              <p>
                Hãy kết nối với chúng mình
              </p>
              <div ><PiInstagramLogoFill style={styles.Icon} />  <FaFacebookSquare style={styles.Icon} /> <FaYoutube style={styles.Icon} />  <FaTiktok style={styles.Icon} /> </div>
              <img src="https://web.nvnstatic.net/img/bocongthuong.png?v=2" alt="Company Logo" style={{ maxWidth: '80px', paddingTop: '20px' }} />
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Chính sách hỗ trợ
              </h6>
              <p>
                <a href="#!" className="text-reset" style={styles.a}>Chính sách vận chuyển</a>
              </p>
              <p>
                <a href="#!" className="text-reset" style={styles.a}>Chính sách thanh toán</a>
              </p>
              <p>
                <a href="#!" className="text-reset" style={styles.a} >Chính sách đổi trả</a>
              </p>
              <p>
                <a href="#!" className="text-reset" style={styles.a} >Chính sách bảo mật</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Tư vấn chọn quà
              </h6>
              <p>
                <a href="#!" className="text-reset" style={styles.a} > <FaPhoneAlt style={{width: '40px', height: '40px', paddingRight: '20px'}} /> 0336782660</a>
              </p>
              <p>
                <a href="#!" className="text-reset" style={styles.a} >(8h-20h Thứ 2 – CN)</a>
              </p>
        
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Địa chỉ</h6>
              <p><i className="fas fa-home me-3"></i><FaMapMarkerAlt/> Đại Học Nông Lâm TP.HCM</p>
              <p>
                <i className="fas fa-envelope me-3"></i><MdEmail/>
                 info@example.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="#"></a>
      </div>
      {/* Copyright */}
    </footer>
   
  

    </div>
  )
}
const styles = {
    bg: {
backgroundColor:'#FEAFA2',
paddingTop: '30px',
fontFamily: 'Montserrat',
color: '#ffffff'

    },
    Icon: {
        width: '20px', 
        height: '20px',
        color: 'black',
      
    },
    a: {
        textDecoration: 'none', 
        color: 'white'
    }

}

export default FooterComponent