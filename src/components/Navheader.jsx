import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

import Container from 'react-bootstrap/Container';
import Allflights from './Allflights/Allflights';
import { useNavigate } from 'react-router-dom';
import { getUser, removeUserSession } from '../utils/Common';


export default function Navheader() {

    const [Allflights, setAllFlights] = useState(true)
    const navigate = useNavigate();

    const AllflightsFunc = () => {
        setAllFlights(true)
    }

    // const user = getUser();
 
    const handleLogout = () => {
        removeUserSession();
        navigate('/');
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/homepage">Ticket Booking</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={AllflightsFunc} href="/flights">Available Flights</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                <Dropdown>
                        <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                            hi User
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item value="logout" onClick={handleLogout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
                    {/* <Button value="logout" onClick={handleLogout} variant="outline-success">Logout</Button> */}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
