import React, { useContext } from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../Logo.png';
import './Header.css';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div >
            <Container>
            <Navbar>
                <Navbar.Brand href="/home">
                <img
                    src={logo}
                    width="120"
                    height="56"
                    left= "135"
                    filter="contrast(0%) brightness(250%)"
                    className="d-inline-block align-top"
                    alt="travel guru logo"
                />
                </Navbar.Brand>

                <Form inline className="ml-auto" >
                    <FormControl type="text"   placeholder="Search Your Destination..." className="mr-sm-2 searchBg" />
                </Form>
                <Nav className="ml-auto">
                <Nav.Link > <Link to='/news' className="menuList">News</Link> </Nav.Link>
                <Nav.Link > <Link to='/destination' className="menuList">Destination</Link> </Nav.Link>
                <Nav.Link > <Link to='/blog' className="menuList">Blog</Link> </Nav.Link>
                <Nav.Link > <Link to='/contact' className="menuList">Contact</Link> </Nav.Link>
                <Link to='/login'><button  class="btn btn-warning"> Login </button></Link> 
                </Nav>
            </Navbar>
            </Container>
        </div>
    );
};

export default Header;