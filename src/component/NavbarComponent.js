import React ,{useState} from 'react';
import { FaBell, FaShoppingCart ,FaUser , FaUserEdit,FaSearch  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, InputGroup  } from 'react-bootstrap';
import logo from '../assets/images/logo1.png';




const NavbarConponent = () => {
  // const [iconColor, setIconColor] = useState('black'); 
  const [iconColor, setIconColor] = useState({});
  return (
    <div className='container ' style={styles.container}>
        <nav className="navbar navbar-expand-lg navbar-light " style={styles.container}>
      <div className="container-fluid">
        {/* Toggle button */}
        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <Link to="/">
            <img
              src={logo}
              height="150"
              alt="Fox Box Logo"
              loading="lazy"
            />
            </Link>
          </a>
          {/* Left links */}
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
          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}

        {/* Right elements */}
        <div className="d-flex align-items-center">
      {/* Đăng nhập */}
      <Link  to="/login"
         >
      <a className="text-reset me-3" style={styles.user}
        onMouseEnter={() => setIconColor({ user: '#FEAFA2' })} // Thay đổi màu khi di chuột vào
        onMouseLeave={() => setIconColor({})} // Reset màu khi di chuột ra
      >
        <span style={{ display: 'inline-block' , color: iconColor.user || 'black' }}>
          <FaUser style={{}} />
          <span className="ms-2 d-lg-inline d-none">Đăng nhập</span>
        </span>
      </a>
      </Link>
      <Link  to="/register"
         >
      {/* Đăng ký */}
      <a className="text-reset me-3" style={styles.user}
        onMouseEnter={() => setIconColor({ userEdit: '#FEAFA2' })} // Thay đổi màu khi di chuột vào
        onMouseLeave={() => setIconColor({})} // Reset màu khi di chuột ra
      >
        <span style={{ display: 'inline-block', color: iconColor.userEdit || 'black' }}>
          <FaUserEdit style={{fontSize: '20px',  }} />
          <span className="ms-2 d-lg-inline d-none">Đăng ký</span>
        </span>
      </a>
      </Link>
      {/* giỏ hàng */}
      <div className="dropdown">
        <Link to="/cart" 
         onMouseEnter={() => setIconColor({ shoppingCart: '#FEAFA2' })}
        onMouseLeave={() => setIconColor({})}>
          <FaShoppingCart style={{ fontSize: '30px', color: iconColor.shoppingCart || 'black', cursor: 'pointer' }} />
          <span className="badge rounded-pill badge-notification bg-danger position-absolute top-0 start-100 translate-middle">
            1
          </span>
        </Link>
      </div>
    </div>
        {/* Right elements */}
      </div>
      {/* Container wrapper */}
    </nav>
    {/* Navbar */}

    </div>
 
  );
};
const styles = {
  container : {
    height: '110px',
    backgroundColor: 'white',
    fontFamily: 'Montserrat',
    
  },
  user : {
    textDecoration: 'none' ,
    fontWeight: 'bold',
    cursor: 'pointer',
    
   
  },
  search: {
    width: '500px', 
    height: '40px', 
    fontSize: '18px',
    borderColor: '#FEAFA2',
    responsive: [
      {
        breakpoint: 768,
        search: {
          width: '100px', 
          height: '40px', 
          fontSize: '18px',
          borderColor: '#FEAFA2',
        }
      },
      {
        breakpoint: 480,
        search: {
          width: '100px', 
          height: '40px', 
          fontSize: '18px',
          borderColor: '#FEAFA2',
        }
      }
    ]
   
    

  },
  searchButton: {
    backgroundColor: '#FEAFA2',
    borderColor: '#FEAFA2',

  },
}

export default NavbarConponent;
