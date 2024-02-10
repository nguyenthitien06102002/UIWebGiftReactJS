import React, {useState, useEffect, useRef } from 'react'
import Header from './Header'
import Menu from './Menu'
import { Carousel, Container  } from 'react-bootstrap'
import CarouselComponent from './CarouselComponent'
import { FaSearch, FaHeart, FaCartPlus  } from 'react-icons/fa'; 
import { hover } from '@testing-library/user-event/dist/hover'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import FooterComponent from './FooterComponent'
import NavbarConponent from './NavbarComponent'

const Home = () => {

  const sliderRef = useRef(null);

  useEffect(() => {
    sliderRef.current.slickGoTo(1);
  }, []);

 


    const [showAddToCartButton, setShowAddToCartButton] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [hoveredProductId, setHoveredProductId] = useState(null);

    const handleMouseEnter = (productId) => {
        setHoveredProductId(productId);
    };

    const handleMouseLeave = () => {
        setHoveredProductId(null);
    };

    const handleAddToCartButtonClick = () => {
        setShowAddToCartButton(false);
    };

   

  return (
    <>
    <Header/>
    <Menu/>
    {/* <NavbarConponent/> */}
    <CarouselComponent/>
    <div className='container' style={styles.container}>
        <div>
    <div style={styles.texth1}>Sản Phẩm mới</div>

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
</div>
<div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
<button style={styles.ButtonAdd} >Xem Thêm 
</button> 
</div>
</div>

<div>
    <div  style={styles.texth1}>Chủ Đề mới</div>
    <div>
    <div className="row">
    <div className="col-md-3">
   
        <div  style={{ position: 'relative', display: 'inline-block'}}>
      <img src="https://i.pinimg.com/564x/d5/34/dd/d534dd39b7fcf214cebdcd80c6a7f8bc.jpg" alt="Product 2"
       className="product-image"  style={styles.imgCarogory}
       onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)' }
       onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
       />  
   
    </div>
    </div>
    <div className="col-md-3">
    <div style={{ position: 'relative', display: 'inline-block'}}>
      <img src="https://i.pinimg.com/564x/ec/61/75/ec6175b9877a3d994c912911ab37ffcf.jpg" alt="Product 2"
       className="product-image"  style={styles.imgCarogory}
       onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)' }
       onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
       />  
   
    </div>
    </div>
    <div className="col-md-3">
    <div style={{ position: 'relative', display: 'inline-block'}}>
      <img src="https://i.pinimg.com/564x/38/b3/02/38b302f218bc0fd9c0916e1679a8e81c.jpg" alt="Product 2" 
      className="product-image"  style={styles.imgCarogory}
      onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)' }
      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />  
   
    </div>
    </div>
    <div className="col-md-3">
    <div style={{ position: 'relative', display: 'inline-block'}}>
      <img src="https://i.pinimg.com/564x/dc/fe/85/dcfe854d3101c3da73db65ee7844dcca.jpg" alt="Product 2"
      
      className="product-image"  style={styles.imgCarogory}
      onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)' }
      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />  
   
    </div>
    </div>
    </div>
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
  
 
 

</div>
  </div>
</div>


<div  style={styles.texth1}>Bộ sưu tập</div>

 <Slider ref={sliderRef} {...settings}>
      <div>
        <img src="https://i.pinimg.com/564x/4a/8b/ca/4a8bcaaf2c84df2ff8ddaa8fb1f4dd81.jpg" alt="Image 1" 

        style={styles.settings} />
      </div>
      <div>
        <img src="https://i.pinimg.com/564x/d8/f3/a0/d8f3a071536deba7d8d1bc2f87ee9439.jpg" alt="Image 2"
        style={styles.settings} />
      </div>
      <div>
        <img src="https://i.pinimg.com/564x/c1/32/46/c132469cd3cc82c4028f5e74c94a5d72.jpg" alt="Image 3" 
        style={styles.settings}/>
      </div>
      <div>
        <img src="https://bizweb.dktcdn.net/100/293/212/files/54523213-2385641581667261-1468282003756417024-o.jpg?v=1587372283355" alt="Image 4" 
        style={styles.settings}/>
      </div>
      <div>
        <img src="https://down-vn.img.susercontent.com/file/ab451529736b4d33db1fa0228b126b82" alt="Image 5" 
        style={styles.settings}/>
      </div>
    </Slider>
    

   

</div>
<FooterComponent/>
    </>
  )
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

const styles = {
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
        fontSize: '18px',
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
      imgCarogory: {
        width: '300px',
        height: '100px',
        borderRadius: '40px',
        padding: '10px',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer'
      },
      settings: {
        with: '450px',
        height: '450px',
        padding: '20px',
        cursor: 'pointer'
        
        
      }
     

   
  
  };

export default Home