import React,{useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './bookingdetails.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Footersection from '../Footersection';
import Navheader from '../Navheader';

export default function BookingDetails() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const location = useLocation()
    const {flightID} = location.state

    const [flightid, setFlightid] = useState(flightID)

    const addToList = () => {
        axios.post("https://flightticket-booking.herokuapp.com/postbooking",{
            name:name,
            password: password,
            flightid:flightid,
        })
    }



    return (
            <>
                <Navheader />
                    <div className="booking">     
                        <Form className="Form" onSubmit={(e) => e.preventDefault()}>
                        <Form.Group className="mb-3 col-sm-3 offset-sm-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required onChange={(e) => {setName(e.target.value)}} value={name} type="text" placeholder="Enter name" />
                            <Form.Text className="text-muted">
                            We'll never share your Detail with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-3 offset-sm-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" placeholder="Password" />
                        </Form.Group>
                            <Button href="/allbooking" className="col-sm-3 offset-sm-3" variant="dark" type="submit" onClick={addToList}>
                                Submit
                            </Button>
                            <Button href="/homepage" variant="primary" className="col-sm-3 offset-sm-3">
                                Cancel
                            </Button>
                        {console.log(flightid)}
                    </Form>          
                    </div>
                <Footersection/>
    </>
    )
}
