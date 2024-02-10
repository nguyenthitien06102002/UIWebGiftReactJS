import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, InputGroup  } from 'react-bootstrap';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'; // Import icon components
import cart from '../assets/images/cart.png';
import logo from '../assets/images/logo1.png';
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import NavbarConponent from './NavbarComponent';


const Header = () => {
  return (
    <div>
    <Navbar style={styles.header} variant="dark" expand="lg">
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="container justify-content-end">
        <Nav.Link style={styles.headerLink} href="#home"
        onMouseEnter={(e) => e.target.style.color = '#FF5733'}
        onMouseLeave={(e) => e.target.style.color = '#ae2214'}
        >HỆ THỐNG CỬA HÀNG
        </Nav.Link>
        <Nav.Link style={styles.headerLink} href="#about"
         onMouseEnter={(e) => e.target.style.color = '#FF5733'}
         onMouseLeave={(e) => e.target.style.color = '#ae2214'}
        >VỀ FOXBOX</Nav.Link>
        <Nav.Link style={styles.headerLink} href="#recruitment"
         onMouseEnter={(e) => e.target.style.color = '#FF5733'}
         onMouseLeave={(e) => e.target.style.color = '#ae2214'}
        >TUYỂN DỤNG</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  {/* <Navbar style={styles.menu} bg="light" variant="light" expand="lg">
      <Nav className='container'>
        <Link 
        to="/"
      

        >
          <img
            src={logo} // Thay thế bằng đường dẫn của logo của bạn
            width="200"
            height="150"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <InputGroup style={{paddingLeft: '50px'}}>
              <FormControl type="search" id="form1" placeholder="Tìm kiếm sản phẩm" style={styles.search} 
              />
              <Button style={styles.searchButton}>
                <FaSearch />
              </Button>
            </InputGroup>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
          <Nav className="ml-auto" >
            <Nav.Link href="#login" 
            onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
            onMouseLeave={(e) => e.target.style.color = 'black'}
            ><FaUser /> Đăng nhập</Nav.Link>
            
            <Nav.Link href="#register"
            onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
            onMouseLeave={(e) => e.target.style.color = 'black'}
            ><FaUser /> Đăng ký</Nav.Link>
            
            <Nav className="ml-auto">
            <Nav.Link href="#cart"
              onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
             onMouseLeave={(e) => e.target.style.color = 'black'}
            ><FaShoppingCart style={styles.cartIcon} /></Nav.Link> 
            <span style={styles.notification}>3</span>
            </Nav>

          
          </Nav>
        </Navbar.Collapse>
      </Nav>
    </Navbar> */}
    <NavbarConponent/>
  </div>
  
  )
}

const styles = {
    header: {
      backgroundColor: '#FEAFA2',
      height: '30px',
    },
    headerLink: {
      color: '#ae2214',
      fontFamily: 'Montserrat',
      fontSize: '12px',
      fontWeight: 'bold',
      transition: 'color 0.3s'
    },
    headerLinkHover: {
        color: '#cd655a', // Màu mới khi di chuột vào
      },
      menu: {
        backgroundColor: 'white',
        height: '110px',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
      },
      search: {
        width: '500px', 
        height: '40px', 
        fontSize: '18px',
        borderColor: '#FEAFA2',
       
        

      },
      searchButton: {
        backgroundColor: '#FEAFA2',
        borderColor: '#FEAFA2',

      },
      cart: {
        paddingBottom: '30px'
      },
   
    notification: {
        position: 'absolute', // Đặt vị trí tuyệt đối cho bong bóng thông báo
       // top: '-8px', // Điều chỉnh vị trí theo chiều dọc
        right: '8%', // Điều chỉnh vị trí theo chiều ngang
        backgroundColor: '#ae2214',
        color: 'white',
        borderRadius: '50%',
        padding: '4px 8px', // Điều chỉnh kích thước của bong bóng thông báo
        fontSize: '12px',
      },
       cartIcon: {
        fontSize: '30px', // Điều chỉnh kích thước của biểu tượng giỏ hàng
        marginRight: '10px', // Để tạo ra một khoảng cách giữa biểu tượng và thông báo
        position: 'relative', // Để có thể sử dụng vị trí tương đối cho bong bóng thông báo
        // color: '#ae2214'
    },
  
  };

export default Header