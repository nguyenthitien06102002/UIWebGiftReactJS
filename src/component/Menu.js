import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, InputGroup,NavDropdown   } from 'react-bootstrap';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'; // Import icon components
import cart from '../assets/images/cart.png';
import logo from '../assets/images/logo1.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {


    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      }
  return (
    <div>
    <Navbar style={styles.header} variant="dark" expand="lg">
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="container justify-content-center">
        <Link style={styles.headerLink} 
          to="/product"
        
        onMouseEnter={(e) => e.target.style.color = '#FF5733'}
        onMouseLeave={(e) => e.target.style.color = '#ae2214'}
        >TẤT CẢ 
        </Link>
        <Link style={styles.headerLink} 
          to="/product"
         
        onMouseEnter={(e) => e.target.style.color = '#FF5733'}
        onMouseLeave={(e) => e.target.style.color = '#ae2214'}
        >Set hộp quà 
        </Link>
        <Link style={styles.headerLink} 
          to="/product"
         
        onMouseEnter={(e) => e.target.style.color = '#FF5733'}
        onMouseLeave={(e) => e.target.style.color = '#ae2214'}
        >Nến Thơm
        </Link>
        <Link style={styles.headerLink} 
          to="/product"
        
        onMouseEnter={(e) => e.target.style.color = '#FF5733'}
        onMouseLeave={(e) => e.target.style.color = '#ae2214'}
        >Tinh Dầu 
        </Link>
        <Link style={styles.headerLink} 
          to="/product"
       
        onMouseEnter={(e) => e.target.style.color = '#FF5733'}
        onMouseLeave={(e) => e.target.style.color = '#ae2214'}
        >Thú nhồi Bông
        </Link>
        <Link style={styles.headerLink} 
          to="/product"
        
        onMouseEnter={(e) => e.target.style.color = '#FF5733'}
        onMouseLeave={(e) => e.target.style.color = '#ae2214'}
        >Phụ kiện tặng quà 
        </Link>
        <Link style={styles.headerLink} 
          to="/product"
      
        onMouseEnter={(e) => e.target.style.color = '#FF5733'}
        onMouseLeave={(e) => e.target.style.color = '#ae2214'}
        >Hộp & Túi đựng quà 
        </Link>
        <Link style={styles.headerLink} 
          to="/product"
         
        onMouseEnter={(e) => e.target.style.color = '#FF5733'}
        onMouseLeave={(e) => e.target.style.color = '#ae2214'}
        >Thiệp
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    </div>
  )
}

const styles = {
    header: {
      backgroundColor: '#FEAFA2',
      height: '50px',
    },
    headerLink: {
      color: '#ae2214',
      fontFamily: 'Montserrat',
      fontSize: '15px',
      fontWeight: 'bold',
      transition: 'color 0.3s',
      textDecoration: 'none', 
      padding: '10px',


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


export default Menu