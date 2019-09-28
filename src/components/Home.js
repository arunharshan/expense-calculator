import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBRow,
  MDBCol
} from 'mdbreact';
const Home = () => {
  // we have 11 images in the local folder.
  const ImageHolder = () => {
    return [...Array(11)].map((e, i) => {
      return (
        <MDBCarouselItem itemId={i} key={i}>
          <div
            className='carousel-image'
            style={{ backgroundImage: `url(../assets/carousel/${i}.png)` }}
          ></div>
        </MDBCarouselItem>
      );
    });
  };
  return (
    <div className='body-container home-container'>
      <div className='d-flex justify-content-center mt-5'>
        <div
          className='
        text-white text-center'
        >
          <h1 className='display-1'>Expense calculator</h1>
          <h4>
            With Xpns budget recorder app,
            <br /> its easy to manage your expenses.
          </h4>
          <p>This is a React.js demo app</p>
        </div>
      </div>
      <MDBRow className='d-flex justify-content-center mt-5 mb-5'>
        <MDBCol sm='10'>
          <MDBCarousel activeItem={6} length={10} className='z-depth-0'>
            <MDBCarouselInner>
              <ImageHolder />
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Home;
