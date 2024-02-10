import React, {useState, useEffect, useRef } from 'react'
import Header from './Header'
import Menu from './Menu'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { HiShare, HiHeart  } from "react-icons/hi";
import { FaSearch, FaHeart, FaCartPlus  } from 'react-icons/fa'; 
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
 MDBListGroup, MDBListGroupItem,
 MDBContainer, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import FooterComponent from './FooterComponent';

const Detail = () => {
  const [selectedImage, setSelectedImage] = useState('https://i.pinimg.com/564x/4a/8b/ca/4a8bcaaf2c84df2ff8ddaa8fb1f4dd81.jpg');
  const sliderRef = React.createRef();
const handleSlideClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };
  const [quantity, setQuantity] = useState(1);
  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  const [basicActive, setBasicActive] = useState('tab1');
  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  
  return (
    <div>
      <Header/>
      <Menu/>
      <div className='container' style={styles.container}>
      {/* Breadcrumb  */}
     
      <nav  aria-label="breadcrumb"  style={styles.breadcrumb}>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#" style={{ color: 'black', textDecoration: 'none' }} >Home</a></li>
        <li className="breadcrumb-item active" aria-current="page" style={{ color: '#FEAFA2' }} >Library</li>
      </ol>
    </nav>

       {/* Breadcrumb  */}



       <div className="row">
       {/* left */}
  <div className="col-md-9">
  <div className="row">
    <div className="col-md-6">

        <div>
          <img src={selectedImage} style={styles.imgProduct} alt="Selected Product"></img>
        </div>

        <Slider ref={sliderRef} {...settings}>
          <div onClick={() => handleSlideClick('https://i.pinimg.com/564x/4a/8b/ca/4a8bcaaf2c84df2ff8ddaa8fb1f4dd81.jpg')}>
            <img src="https://i.pinimg.com/564x/4a/8b/ca/4a8bcaaf2c84df2ff8ddaa8fb1f4dd81.jpg" alt="Image 1" style={styles.settings} />
          </div>
          <div onClick={() => handleSlideClick('https://i.pinimg.com/564x/d8/f3/a0/d8f3a071536deba7d8d1bc2f87ee9439.jpg')}>
            <img src="https://i.pinimg.com/564x/d8/f3/a0/d8f3a071536deba7d8d1bc2f87ee9439.jpg" alt="Image 2" style={styles.settings} />
          </div>
          <div onClick={() => handleSlideClick('https://i.pinimg.com/564x/c1/32/46/c132469cd3cc82c4028f5e74c94a5d72.jpg')}>
            <img src="https://i.pinimg.com/564x/c1/32/46/c132469cd3cc82c4028f5e74c94a5d72.jpg" alt="Image 3" style={styles.settings} />
          </div>
          <div onClick={() => handleSlideClick('https://bizweb.dktcdn.net/100/293/212/files/54523213-2385641581667261-1468282003756417024-o.jpg?v=1587372283355')}>
            <img src="https://bizweb.dktcdn.net/100/293/212/files/54523213-2385641581667261-1468282003756417024-o.jpg?v=1587372283355" alt="Image 4" style={styles.settings} />
          </div>
          <div onClick={() => handleSlideClick('https://down-vn.img.susercontent.com/file/ab451529736b4d33db1fa0228b126b82')}>
            <img src="https://down-vn.img.susercontent.com/file/ab451529736b4d33db1fa0228b126b82" alt="Image 5" style={styles.settings} />
          </div>
        </Slider>
     


    </div>
    <div className="col-md-6">
      <div style={styles.productName}>Kẹp tóc MJ lông xù Frog face má hồng - Mix</div>
      <p style={{color: '#9d9d9d'}}>Mã sản phẩm: 12333</p>
      <div style={styles.price}>
      <p style={styles.price} >20.000đ</p>
      <p style={{textDecoration: 'line-through', color:'#9d9d9d'}}>40.000đ</p>
      </div>

      {/* // */}
      <div style={styles.quantityContainer}>
        
        <div style={{paddingRight: '20px'}}>Số lượng</div>
  <button style={styles.quantityButton} onClick={handleDecreaseQuantity}>-</button>
  <span style={styles.quantityNumber}>{quantity}</span>
  <button style={styles.quantityButton} onClick={handleIncreaseQuantity}>+</button>
</div>
{/* 
// */}
<div className="row">
    <div className="col-md-6" style={{paddingTop: '30px'}}>
    <button type="button" className="btn btn-primary" style={styles.customBtn}>Thêm vào giỏ hàng</button>
    </div>
    <div className="col-md-6" style={{paddingTop: '30px'}}>
    <button type="button" className="btn btn-primary"  style={styles.customBtn}>Mua ngay</button>
    </div>
  </div>


  <div style={{borderBottom: '2px solid #9d9d9d', paddingTop: '50px',}}></div>

  <div><HiShare style={{fontSize: '30px'}}
   onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
   onMouseLeave={(e) => e.target.style.color = 'black'}
  /> <HiHeart style={{fontSize: '30px'}}
  onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
  onMouseLeave={(e) => e.target.style.color = 'black'}
  /> </div>





    </div>

   


  </div>


  {/* mô tả */}
<div style={{paddingTop: '50px',}}>
<MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}
          style={{color: 'black'}}
          >
            <h5>Mô tả sản phẩm</h5>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}
            style={{color: 'black'}}>
            <h5>Đánh giá(1)</h5>
          </MDBTabsLink>
        </MDBTabsItem>
        
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane open={basicActive === 'tab1'}>

        <p>
        Đây là nơi bạn có thể thêm mô tả chi tiết về sản phẩm của mình. Bạn có thể đưa ra thông tin về tính năng,
        kích thước, chất liệu, hướng dẫn sử dụng, và bất kỳ thông tin nào khác mà bạn cho là quan trọng.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
        Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
      </p>
        </MDBTabsPane>
        <MDBTabsPane open={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
       
      </MDBTabsContent>
  </div>

  {/* mô tả */}

  <hr className="hr" />

  {/* Sản phẩm tương tự */}
  <h5 style={{fontWeight: 'bold'}}>Sản phẩm tương tự</h5>

  <div className='row'  >
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
      <h5
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h5>
    <div  style={{...styles.price, fontSize: '15px'}}>
    <p style={{...styles.price, fontSize: '15px'}}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}>40.000đ</p>
  
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
      <h5
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h5>
    <div  style={{...styles.price, fontSize: '15px'}}>
    <p style={{...styles.price, fontSize: '15px'}}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}>40.000đ</p>
  
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
      <h5
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h5>
    <div  style={{...styles.price, fontSize: '15px'}}>
    <p style={{...styles.price, fontSize: '15px'}}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}>40.000đ</p>
  
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
      <h5
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h5>
      <div  style={{...styles.price, fontSize: '15px'}}>
    <p style={{...styles.price, fontSize: '15px'}}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}>40.000đ</p>
  
  </div>
    </div>
  </div>
  
 
 

</div>





  {/* Sản phẩm tương tự */}


  
  </div>
  {/* left */}

  {/* right */}
  <div className="col-md-2">
  <div>
    <img src="https://topquatang.vn/wp-content/uploads/2021/07/Screen-Shot-2021-07-13-at-11.03.56-AM.png"
    style={{width: 'auto', height: 'auto',  boxShadow: '0 0 5px rgba(0,0,0,0.5)', borderRadius: '5px' }}>

    </img>
  </div>

  {/* Sản phẩm mới */}
  {/* <h6 style={{paddingTop: '20px', }}>Sản phẩm mới</h6> */}
  <div>
  <MDBListGroup style={{ minWidth: '18.5rem',paddingTop: '20px', cursor:'pointer'  }} light>
      <MDBListGroupItem style={{fontWeight: 'bold'}}>
      Sản Phẩm mới
      </MDBListGroupItem>
      <MDBListGroupItem>

      <MDBRow>
        <MDBCol size='md-8'>
        <h6
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h6>
      <div  style={{...styles.price, fontSize: '15px',  paddingBottom: '0px',}}>
    <p style={{...styles.price, fontSize: '15px'}}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}>40.000đ</p>
    </div>
        </MDBCol>
        <MDBCol size='md-4'>
         <img
      src='https://mdbootstrap.com/img/new/standard/city/041.webp'
      className=''
      alt='...'
      style={{width:'100%', height:'auto'}}
    />
        </MDBCol>
       
      </MDBRow>
     
      </MDBListGroupItem>
      <MDBListGroupItem>
      <MDBRow>
        <MDBCol size='md-8'>
        <h6
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h6>
      <div  style={{...styles.price, fontSize: '15px',  paddingBottom: '0px',}}>
    <p style={{...styles.price, fontSize: '15px'}}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}>40.000đ</p>
    </div>
        </MDBCol>
        <MDBCol size='md-4'>
         <img
      src='https://mdbootstrap.com/img/new/standard/city/041.webp'
      className=''
      alt='...'
      style={{width:'100%', height:'auto'}}
    />
        </MDBCol>
       
      </MDBRow>
        </MDBListGroupItem>
      <MDBListGroupItem>
      <MDBRow>
        <MDBCol size='md-8'>
        <h6 
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h6>
      <div  style={{...styles.price, fontSize: '15px',  paddingBottom: '0px',}}>
    <p style={{...styles.price, fontSize: '15px'}}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}>40.000đ</p>
    </div>
        </MDBCol>
        <MDBCol size='md-4'>
         <img
      src='https://mdbootstrap.com/img/new/standard/city/041.webp'
      className=''
      alt='...'
      style={{width:'100%', height:'auto'}}
    />
        </MDBCol>
       
      </MDBRow>
      </MDBListGroupItem>
      <MDBListGroupItem>
      <MDBRow>
        <MDBCol size='md-8'>
        <h6
        onMouseEnter={(e) => e.target.style.color = '#FEAFA2'}
        onMouseLeave={(e) => e.target.style.color = 'black'}
      >Kẹp tóc MJ lông xù Frog face má hồng</h6>
      <div  style={{...styles.price, fontSize: '15px',  paddingBottom: '0px',}}>
    <p style={{...styles.price, fontSize: '15px'}}>20.000 đ</p>
    <p style={{textDecoration: 'line-through'}}>40.000đ</p>
    </div>
        </MDBCol>
        <MDBCol size='md-4'>
         <img
      src='https://mdbootstrap.com/img/new/standard/city/041.webp'
      className=''
      alt='...'
      style={{width:'100%', height:'auto'}}
    />
        </MDBCol>
       
      </MDBRow>
      </MDBListGroupItem>
    </MDBListGroup>
  </div>
  

  </div>

  {/* right */}
 
</div>
       </div>

       <FooterComponent/>
    </div>
  )
}
const styles = {
  container: {
    fontFamily: 'Montserrat',

  },
  breadcrumb: {
    paddingTop : '15px',
    fontSize : '15px',
  },
  imgProduct: {
    width: '100%',
    height: 'auto',
  },
  settings: {
    with: '100%',
    height: '150px',
    padding: '10px',
    cursor: 'pointer'
    
    
  },
  productName: {
    fontSize: '30px',
    fontWeight: 'bold',
  },
  buttonQuantity: {
    backgroundColor: 'red'

  },
  spanQuantity: {
   // padding: '10px',
    border: '1px solid red',

  },
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  quantityButton: {
    background: '#FEAFA2',
    color: 'white',
    border: '2px solid #FEAFA2',
    borderRadius: '5px',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    // marginRight: '5px',
    outline: 'none',
  },
  quantityNumber: {
    fontSize: '18px',
    // border: '2px solid #FF5733',
    padding: '10px 10px',
    borderRadius: '5px',
    margin: '0 5px',
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
    fontWeight: 'bold',
    fontSize: '25px',
    paddingTop: '10px',
    paddingBottom: '10px',

},
customBtn: {
  width: '100%',
  height: '50px',
  backgroundColor: '#FEAFA2',
  border: 'none',
  padding: '10px'
},
productImage : {
  width: '100%', // Đảm bảo rằng hình ảnh sẽ có chiều rộng 100% của phần tử cha
  height: 'auto',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer'
},
addToCartButton: {
  position: 'absolute',
  bottom: '0px',
  left: '0px',

  // with: '300px',
  backgroundColor: 'rgba(254, 175, 162, 0.8)',

  color: '#fff',
  padding: '8px',

  width: '100%',
 // borderRadius: '4px',
  border: 'none',
//cursor: 'pointer'
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
  
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

export default Detail