import React, { useState } from 'react';
import './signup.css';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Footersection from '../../components/Footersection';
import Button from 'react-bootstrap/Button';

export default function Signup() {

    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const register =async (e) => {
        e.preventDefault();
        setError(false);
        try{
            await axios.post("https://flightticket-booking.herokuapp.com/signup",{
                fullname,
                username,
                email,
                password,
            });
        }catch(err){
            setError(true)
        }
    }

    return (
        <>

        <Navbar bg="dark" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#">Ticket Booking</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              </Nav>
              <Form className="d-flex">
                <Link to="/">
                  <Button variant="outline-success">Sign in</Button>
                </Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>




        <div className="signin">
            <div className="">
                <Form onSubmit={register} className="Form">
                    <Form.Group className="mb-3 col-sm-3 offset-sm-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"
                        className="form-control form-group"
                        placeholder="Name" 
                        onChange={(e) => {setFullname(e.target.value)}}
                        value={fullname}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 col-sm-3 offset-sm-3">
                    <Form.Label>USERNAME</Form.Label>
                        <Form.Control type="text"
                        className="form-control form-group"
                        placeholder="username" 
                        onChange={(e) => {setUsername(e.target.value)}}
                        value={username}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 col-sm-3 offset-sm-3">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control type="email"
                        className="form-control form-group"
                        placeholder="email" 
                        onChange={(e) => {setEmail(e.target.value)}}
                        value={email}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 col-sm-3 offset-sm-3">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control type="password"
                        className="form-control form-group"
                        placeholder="password" 
                        onChange={(e) => {setPassword(e.target.value)}}
                        value={password}
                        />
                    </Form.Group>

                    <Button type="submit" variant="primary" className="col-sm-3 offset-sm-3" value='submit'>SIGN UP</Button>
                    {error && <span style={{color:"red" , marginTop:"10px"}}>something went wrong</span>}
                </Form>
            </div>
        </div>

        <Footersection/>

    </>
    )
};
