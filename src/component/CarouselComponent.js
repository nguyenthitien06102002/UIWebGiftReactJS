import React from 'react';
import panner1 from '../assets/images/panner.png';
import panner2 from '../assets/images/panner2.png';



const CarouselComponent = () => {
  return (
    <div className=''>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" style={{height: '400px'}}>
        <div className="carousel-item active">
          <img src={panner1} className="d-block w-100" alt="Wild Landscape"/>
        </div>
        <div className="carousel-item">
          <img src={panner2} className="d-block w-100" alt="Camera"/>
        </div>
        <div className="carousel-item">
          <img src="https://shopquatructuyen.com/wp-content/uploads/2018/02/8-3.png" className="d-block w-100" alt="Exotic Fruits"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
}

export default CarouselComponent;
