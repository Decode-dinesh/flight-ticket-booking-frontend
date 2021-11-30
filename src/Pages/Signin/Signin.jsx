import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../../utils/Common';
import Footersection from '../../components/Footersection';
import { context } from '../../App';

export default function Signin(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword]= useState("");
    const [error, setError]= useState(null);
    const [log, setLog] = useContext(context);

    const navigate = useNavigate();

    const handleSubmit =async (e) => {
        e.preventDefault();
        setError(null)
        axios.post("https://flightticket-booking.herokuapp.com/login",{
          username:username,
          password:password
        }).then(response => {
          setUserSession(response.data.token, response.data.user)
          setLog(true);
          navigate('/homepage');
          console.log('response >>>>>',response);
        }).catch(error => {
          console.log("something went wrong")
        });
       
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
                <Link to="/SignUp">
                  <Button variant="outline-success">Sign up</Button>
                </Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>



        <div className="signin">
          <Form className="Form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 col-sm-3 offset-sm-3" >
            <Form.Label>USERNAME</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter username" 
            onChange={(e) => {setUsername(e.target.value)}}
            value={username} 
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        
          <Form.Group className="mb-3 col-sm-3 offset-sm-3">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password" 
            onChange={(e) => {setPassword(e.target.value)}}
            value={password}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="col-sm-3 offset-sm-3">
            LOGIN
          </Button>
          {error && <span style={{color:"red" , marginTop:"10px"}}>something went wrong</span>}
        </Form>
      </div>
      <Footersection />
      </>
    )
}
