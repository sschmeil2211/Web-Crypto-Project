import React from 'react';

import Woman from '../assets/Images/woman.png';
import Bed from '../assets/Images/bed.png';
import Oldman from '../assets/Images/oldman.png';
import Paying from '../assets/Images/paying.png';
import Stonks from '../assets/Images/stonks.png';

const Carousel: React.FC = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active rounded-circle"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            className="rounded-circle"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            className="rounded-circle"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={3}
            className="rounded-circle"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={4}
            className="rounded-circle"
            aria-label="Slide 5"
          ></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Woman}
              className="d-block w-100 rounded-item"
              alt="First slide"
            />
          </div>

          <div className="carousel-item">
            <img
              src={Bed}
              className="d-block w-100 rounded-item"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Oldman}
              className="d-block w-100 rounded-item"
              alt="Third slide"
            />
          </div>

          <div className="carousel-item">
            <img
              src={Stonks}
              className="d-block w-100 rounded-item"
              alt="Fourth slide"
            />
          </div>

          <div className="carousel-item">
            <img
              src={Paying}
              className="d-block w-100 rounded-item"
              alt="Fifth slide"
            />
          </div>
        </div>
        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;