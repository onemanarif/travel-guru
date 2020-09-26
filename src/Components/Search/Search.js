import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router-dom';
import bannerData from '../fakeData/fakeData';
import room1 from '../Image/Rectangle 1.png';

import './Search.css'
const Search = () => {
    const {bookingId} = useParams();
    console.log(bookingId);
    return (
        <div className='container search'>
            <div className="row d-flex align-items-center">
                <div className="col-md-7">
                    <div style={{ color: '#000' }}>
                        <h6>252 stays Apr 13-17 3 guests</h6>
                        <h5>Stay in</h5>
                    </div>
                    <div className='roomStyle d-flex'>
                        <div className="room_img">
                            <img style={{ height: '150px', width: '200px' }} src={room1} alt="" />
                        </div>
                        <div className="room_info">
                            <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                            <p>4 guests 2 bedrooms 2 beds 2 baths . Wifi Air conditioning Kitchen.Cancellation fexibility availiable</p>
                            <div className='d-flex justify-content-between'>
                                <span><FontAwesomeIcon icon={faStar} />4.9 (50)</span>
                                <span>$52/ night</span>
                            </div>
                        </div>
                    </div>
                    <div className='roomStyle d-flex'>
                        <div className="room_img">
                            <img style={{ height: '150px', width: '200px' }} src='https://i.ibb.co/tMWtpKr/Rectangle-27.png' alt="" />
                        </div>
                        <div className="room_info">
                            <h5>Apartment in Lost Panorama</h5>
                            <p>4 guests 2 bedrooms 2 beds 2 baths . Wifi Air conditioning Kitchen.Cancellation fexibility availiable</p>
                            <div className='d-flex justify-content-between'>
                                <span><FontAwesomeIcon icon={faStar} />4.8 (40)</span>
                                <span>$52/ night</span>
                            </div>
                        </div>
                    </div>
                    <div className='roomStyle d-flex'>
                        <div className="room_img">
                            <img style={{ height: '150px', width: '200px' }} src='https://i.ibb.co/Yyh3Dns/Rectangle-28.png' alt="" />
                        </div>
                        <div className="room_info">
                            <h5>AR Lounge & Pool (r&r + b&b)</h5>
                            <p>4 guests 2 bedrooms 2 beds 2 baths . Wifi Air conditioning Kitchen.Cancellation fexibility availiable</p>
                            <div className='d-flex justify-content-between'>
                                <span><FontAwesomeIcon icon={faStar} />4.7 (30)</span>
                                <span>$52/ night</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2766243.7879151287!2d89.97055095426357!3d24.142547837459787!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1600294700894!5m2!1sen!2sbd" width="400px" height="400px" frameborder="0" style={{ border: '0' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Search;