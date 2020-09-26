import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import bannerData from '../fakeData/fakeData';
import './Booking.css';
const Booking = () => {
    const {bookingId} = useParams();
    const bookingData = bannerData.find(data => data.id == bookingId);
    const { title, description } = bookingData;
    return (
        <div>
        <div className="container">
        <div className="row d-flex align-items-center">
            <div className="col-md-6">
                <div className="bannerLeft">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
            
            <div className="col-md-5 offset-1 d-flex ">
                <div className="BookingForm"> 
                    <Form.Group>
                        <label>Origin</label>
                        <Form.Control className="formInput" type="text" placeholder= "Write your location"/>
                        <label>Destination</label> 
                        <Form.Control className="formInput" type="text" placeholder={title} />
                        <div className="d-flex justify-content-between">
                            <label htmlFor="">Form</label>
                            <label htmlFor="">To</label>
                        </div>
                        <div className="d-flex justify-content-between">
                            <input className="formDate" type="date" />
                            <input className="formDate" type="date" />
                        </div>
                       <Link to="/destination"><button className="btn btn-warning bookingbtnStyle d-flex justify-content-center">Start Booking</button></Link> 
                    </Form.Group>
                </div>
            </div>
      
    </div>
</div>
        </div>    
    );
};

export default Booking;