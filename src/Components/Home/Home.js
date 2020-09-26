import { findAllByPlaceholderText } from '@testing-library/react';
import React from 'react';
import './Home.css';
import { CardDeck, Card, Carousel, Container } from 'react-bootstrap';
import sundorbonImg from '../Image/sundorbon.png';
import sreemongolImg from '../Image/Sreemongol.png';
import sajekImg from '../Image/Sajek.png';
import data from '../fakeData/fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Home = () => {

  // const bannarData = data.filter();

  return (
    <div className="main-body">
        <div className="row">
          <div className="col-md-5">
            <div className="bannerLeft">
              <h1>Cox's bazar</h1>
              <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
              <Link to={`/booking/${data[0].id}`}>
                <button className="btn btn-warning" >Booking <FontAwesomeIcon icon={faArrowRight} /></button>
              </Link>
            </div>

          </div>
          <div className="col-md-7 d-flex">
            {
              data.slice(1,4).map(data =>
                 <div className="cardStyle">
                 <div className="cardImg">
                   <Link to={`/booking/${data.id}`}><img src={data.img} alt="" /></Link>
                   <div className='banner-text'>
                     <h2>{data.title}</h2>
                   </div>
                 </div>
               </div>                 
                )
            }
          </div>
        </div>
  
    </div>
  );
};

export default Home;