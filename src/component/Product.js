import React, { useState } from 'react';
import { FaPlus, FaMinus, FaAngleDown,FaCartPlus  } from 'react-icons/fa';



import Header from './Header'
import Menu from './Menu'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { hover } from '@testing-library/user-event/dist/hover';
import FooterComponent from './FooterComponent';
import { Link } from 'react-router-dom';


const Product = () => {

  const [isListOpen, setIsListOpen] = useState(true);

   // State để theo dõi trạng thái hiển thị của mỗi mục con
   const [isOpen, setIsOpen] = useState(new Array(5).fill(false));

   // Hàm xử lý sự kiện khi nhấp vào một mục danh sách
   const toggleSublist = (index) => {
     const newIsOpen = [...isOpen]; // Tạo một bản sao của mảng state hiện tại
     newIsOpen[index] = !newIsOpen[index]; // Đảo ngược trạng thái của mục con tương ứng
     setIsOpen(newIsOpen); // Cập nhật state mới
   };
   const [priceRange, setPriceRange] = useState([0, 1000000]); // Giá trị mặc định của thanh trượt

   const handlePriceChange = (value) => {
     setPriceRange(value);
   };
  return (
    <div>
      <Header/>
      <Menu/>


      <div className="container">
  <div className="row">
    <div className="col-md-3">
    <ul className="list-group list-group-light">
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        onClick={() => setIsListOpen(!isListOpen)}
        style={styles.ListGroup}
      >
        Danh mục sản phẩm
        {isListOpen ? <FaMinus /> : <FaPlus />}
      </li>
      <div
        style={{
          maxHeight: isListOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.8s ease-out'
        }}
      >
        <ul className="list-group list-group-light" style={styles.ListGroupOpen}>
        <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => toggleSublist(0)}>Set hộp quà <FaAngleDown /></li>
      {isOpen[0] && (
        <ul className="list-group list-group-light">
          <li className="list-group-item" style={{paddingLeft: '30px'}}>Set quà yêu thương</li>
         
        </ul>
      )}

      <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => toggleSublist(1)}>Nến thơm <FaAngleDown /></li>
      {isOpen[1] && (
        <ul className="list-group list-group-light">
          <li className="list-group-item" style={{paddingLeft: '30px'}}>Nến gel</li>
          <li className="list-group-item" style={{paddingLeft: '30px'}}>Nến Thơm Tealight</li>
          <li className="list-group-item" style={{paddingLeft: '30px'}}>Nến Votive</li>
          <li className="list-group-item" style={{paddingLeft: '30px'}}>Nến Cốc</li>
        </ul>
      )}

      
<li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => toggleSublist(2)}>Tinh dầu <FaAngleDown /></li>
      {isOpen[2] && (
        <ul className="list-group list-group-light" >
          <li className="list-group-item" style={{paddingLeft: '30px'}}>Tinh dầu thơm phòng</li>
          <li className="list-group-item" style={{paddingLeft: '30px'}} >Tinh dầu massage</li>
          <li className="list-group-item"style={{paddingLeft: '30px'}}>Tinh dầu làm đẹp</li>
          <li className="list-group-item" style={{paddingLeft: '30px'}}>Tinh dầu thảo dược</li>
        </ul>
      )}
      
      <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => toggleSublist(3)}>Thú nhồi bông <FaAngleDown /></li>
      {isOpen[3] && (
        <ul className="list-group list-group-light">
          <li className="list-group-item" style={{paddingLeft: '30px'}}>Gấu bông Cute</li>
          <li className="list-group-item" style={{paddingLeft: '30px'}}>Gối chữ U</li>
          <li className="list-group-item"style={{paddingLeft: '30px'}}>Gấu bông Idol</li>
          <li className="list-group-item"style={{paddingLeft: '30px'}}>Gấu bông khác</li>
        </ul>
      )}

       












        </ul>
      </div>
    </ul>
    <li
        className="list-group-item d-flex justify-content-between align-items-center"
      
        style={{...styles.ListGroup, padding: '10px', paddingLeft: '15px'}}
      >
        Giá
       
      </li>

      <div style={{padding: '15px'}}>
      <p>Giá: {priceRange[0]} - {priceRange[1]} đ</p>
      <Slider
        min={0}
        max={1000000} // Giá trị tối đa của thanh trượt
        value={priceRange}
        onChange={handlePriceChange}
        range // Cho phép chọn khoảng giá trị
        trackStyle={sliderTrackStyle} // Sử dụng kiểu CSS của thanh trượt
        handleStyle={[sliderHandleStyle, sliderHandleStyle]} // Sử dụng kiểu CSS của nút kéo (thanh trượt có thể có nhiều nút kéo)
      />
     
    </div>
  
    </div>
    <div className="col-md-8">
    {/* breadcrumb */}
    <nav>
      <ol className="breadcrumb">
      <li
        className="container"
      
        style={{...styles.ListGroup, padding: '8px', paddingLeft: '15px'}}
      >
        Sản phẩm
       
      </li>

      </ol>
    </nav>
  {/* breadcrumb */}

  {/* product */}
  <div className='row'  >
    <div className='col-md-3'>
    <div className="product" style={{padding: '20px'}}>
        <div  style={{ position: 'relative', display: 'inline-block', overflow: 'hidden'  }}>
          <Link  to="/detail"
         >
      <img src="https://pos.nvncdn.com/cba2a3-7534/ps/20240205_XpTAqlSUS2.jpeg" 
      alt="Product 2" 
       style={styles.productImage}
     onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)' }
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />
      </Link>
      <span style={styles.newTag}>New</span>
    
      <button style={styles.addToCartButton} ><FaCartPlus  style={styles.cartIcon} />  
            </button> 

      </div>
      <h3 style={styles.productName}
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h3>
      <div  style={styles.price}>
    <p style={styles.price}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}></p>
  
  </div>
    </div>
  </div>
  <div className='col-md-3'>
    <div className="product" style={{padding: '20px'}}>
        <div  style={{ position: 'relative', display: 'inline-block', overflow: 'hidden'  }}>
      <img src="https://pos.nvncdn.com/cba2a3-7534/ps/20240205_XpTAqlSUS2.jpeg" 
      alt="Product 2" 
       style={styles.productImage}
     onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)' }
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />
      <span style={styles.newTag}>New</span>
    
            <button style={styles.addToCartButton} ><FaCartPlus  style={styles.cartIcon} />  
            </button> 

      </div>
      <h3 style={styles.productName}
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h3>
      <div  style={styles.price}>
    <p style={styles.price}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}></p>
  
  </div>
    </div>
  </div>
  <div className='col-md-3'>
    <div className="product" style={{padding: '15px'}}>
        <div  style={{ position: 'relative', display: 'inline-block', overflow: 'hidden'  }}>
      <img src="https://pos.nvncdn.com/cba2a3-7534/ps/20240205_XpTAqlSUS2.jpeg" 
      alt="Product 2" 
       style={styles.productImage}
     onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)' }
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />
      <span style={styles.newTag}>New</span>
    
            <button style={styles.addToCartButton} ><FaCartPlus  style={styles.cartIcon} />  
            </button> 

      </div>
      <h3 style={styles.productName}
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h3>
      <div  style={styles.price}>
    <p style={styles.price}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}></p>
  
  </div>
    </div>
  </div>
  <div className='col-md-3'>
    <div className="product" style={{padding: '15px'}}>
        <div  style={{ position: 'relative', display: 'inline-block', overflow: 'hidden'  }}>
      <img src="https://pos.nvncdn.com/cba2a3-7534/ps/20240205_XpTAqlSUS2.jpeg" 
      alt="Product 2" 
       style={styles.productImage}
     onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)' }
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />
      <span style={styles.newTag}>New</span>
    
            <button style={styles.addToCartButton} ><FaCartPlus  style={styles.cartIcon} />  
            </button> 

      </div>
      <h3 style={styles.productName}
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h3>
      <div  style={styles.price}>
    <p style={styles.price}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}></p>
  
  </div>
    </div>
  </div>
  <div className='col-md-3'>
    <div className="product" style={{padding: '15px'}}>
        <div  style={{ position: 'relative', display: 'inline-block', overflow: 'hidden'  }}>
      <img src="https://pos.nvncdn.com/cba2a3-7534/ps/20240205_XpTAqlSUS2.jpeg" 
      alt="Product 2" 
       style={styles.productImage}
     onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)' }
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />
      <span style={styles.newTag}>New</span>
    
            <button style={styles.addToCartButton} ><FaCartPlus  style={styles.cartIcon} />  
            </button> 

      </div>
      <h3 style={styles.productName}
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h3>
      <div  style={styles.price}>
    <p style={styles.price}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}></p>
  
  </div>
    </div>
  </div>
  <div className='col-md-3'>
    <div className="product" style={{padding: '15px'}}>
        <div  style={{ position: 'relative', display: 'inline-block', overflow: 'hidden'  }}>
      <img src="https://pos.nvncdn.com/cba2a3-7534/ps/20240205_XpTAqlSUS2.jpeg" 
      alt="Product 2" 
       style={styles.productImage}
     onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)' }
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />
      <span style={styles.newTag}>New</span>
    
            <button style={styles.addToCartButton} ><FaCartPlus  style={styles.cartIcon} />  
            </button> 

      </div>
      <h3 style={styles.productName}
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h3>
      <div  style={styles.price}>
    <p style={styles.price}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}></p>
  
  </div>
    </div>
  </div>
  <div className='col-md-3'>
    <div className="product" style={{padding: '15px'}}>
        <div  style={{ position: 'relative', display: 'inline-block', overflow: 'hidden'  }}>
      <img src="https://pos.nvncdn.com/cba2a3-7534/ps/20240205_XpTAqlSUS2.jpeg" 
      alt="Product 2" 
       style={styles.productImage}
     onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)' }
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />
      <span style={styles.newTag}>New</span>
    
            <button style={styles.addToCartButton} ><FaCartPlus  style={styles.cartIcon} />  
            </button> 

      </div>
      <h3 style={styles.productName}
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h3>
      <div  style={styles.price}>
    <p style={styles.price}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}></p>
  
  </div>
    </div>
  </div>
  <div className='col-md-3'>
    <div className="product" style={{padding: '15px'}}>
        <div  style={{ position: 'relative', display: 'inline-block', overflow: 'hidden'  }}>
      <img src="https://pos.nvncdn.com/cba2a3-7534/ps/20240205_XpTAqlSUS2.jpeg" 
      alt="Product 2" 
       style={styles.productImage}
     onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)' }
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />
      <span style={styles.newTag}>New</span>
    
            <button style={styles.addToCartButton} ><FaCartPlus  style={styles.cartIcon} />  
            </button> 

      </div>
      <h3 style={styles.productName}
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h3>
      <div  style={styles.price}>
    <p style={styles.price}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}></p>
  
  </div>
    </div>
  </div>
</div>
  {/* product */}

  {/* Pagination */}
  <nav aria-label="...">
      <ul className="pagination justify-content-center"> {/* Thêm lớp justify-content-center */}
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true" style={styles.PageLink} >Previous</a>
        </li>
        <li className="page-item"><a className="page-link"  style={styles.PageLink}  href="#">1</a></li>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#"  style={{...styles.PageLink, backgroundColor: '#FEAFA2'}} >2</a>
        </li>
        <li className="page-item"><a className="page-link"  style={styles.PageLink}  href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" style={styles.PageLink} href="#">Next</a>
        </li>
      </ul>
    </nav>
    {/* Pagination */}

   

    </div>
  
  </div>
</div>

 {/* Footter */}
 <FooterComponent/>

{/* Footter */}



    </div>
  )
}
const sliderTrackStyle = {
  backgroundColor: '#FEAFA2', // Màu của thanh trượt
};

const sliderHandleStyle = {
  borderColor: '#FEAFA2', // Màu của viền nút kéo
  backgroundColor: '#ae2214', // Màu nền của nút kéo
};
const styles = {
  container: {
    fontFamily: 'Montserrat',


  },
  ListGroup: {
    cursor: 'pointer',
    color : '#FEAFA2',
    fontWeight: 'bold',
    fontSize: '20px',
    border : 'none',
    borderBottom: '1px solid #FEAFA2'
    
  },
  ListGroupOpen: {
    cursor: 'pointer',
    paddingTop : '15px',
    borderRadius: 'none',
   
  },
  texth1: {
    fontSize: '30px',
    paddingTop: '40px',
    fontWeight: 'bold',
    paddingBottom: '20px',
    
   
  },
  container : {
      fontFamily: 'Montserrat',
  },

  productImage : {
      width: '100%', // Đảm bảo rằng hình ảnh sẽ có chiều rộng 100% của phần tử cha
      height: 'auto',
      transition: 'transform 0.3s ease-in-out',
      cursor: 'pointer'
  },
  price: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '10px',
      fontWeight: 'bold',
      paddingTop: '10px',
  },
  productName: {
      fontSize: '16px',
      paddingTop: '12px',
      cursor: 'pointer'

  },
  newTag: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      backgroundColor: '#FEAFA2',
      color: 'white',
      padding: '5px 10px',
      fontSize: '16px',
    
      zIndex: '1'
    },
    addToCartButton: {
      position: 'absolute',
      bottom: '0px',
      left: '0px',
    
      backgroundColor: 'rgba(254, 175, 162, 0.8)',
    
      color: '#fff',
      padding: '8px',
   
      width: '100%',
     
      border: 'none',

display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cartIcon: {
      fontSize: '25px', // Điều chỉnh kích thước của biểu tượng giỏ hàng        
    },
    ButtonAdd: {
      backgroundColor: '#FEAFA2',
      color: '#fff',
      width: '160px',
      padding: '10px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',


    },
    PageLink: {
      // backgroundColor: '#FEAFA2',
      borderColor: '#babdc0',
      color: 'black',
    },
   

}

export default Product