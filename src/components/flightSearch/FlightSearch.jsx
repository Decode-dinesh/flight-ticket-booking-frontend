import React,{useState } from 'react';
import './flightSearch.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Destination from '../Destination/Destination';
import { Link } from 'react-router-dom';
import Footersection from '../Footersection';

export default function FlightSearch() {


    const [destination, setDestination] = useState(false)
    const [fromLocation ,setFromLocation] = useState("")
    const [toLocation ,setToLocation] = useState("")

    const flightSearch = (e) => {
        e.preventDefault();
        return false
    };


    const destinationfunc = () => {
        setDestination(true)
    };



    return (
        <>
        
          <Form onSubmit={flightSearch}>
            <Row className="flights align-items-center">
                <Col xs="auto">
                    <Form.Group className="input mb-3">
                        <Form.Label className="label" >From</Form.Label>
                        <Form.Control type="text" required onChange={(e)=>{setFromLocation(e.target.value)}} value={fromLocation} placeholder="search" />
                    </Form.Group>
                </Col>
                <Col xs="auto">
                    <i class="icon fas fa-fighter-jet"></i>
                </Col>
                <Col xs="auto">
                    <Form.Group className="input mb-3">
                        <Form.Label className="label" >To</Form.Label>
                        <Form.Control type="text" required onChange={(e)=>{setToLocation(e.target.value)}} value={toLocation} placeholder="search" />
                    </Form.Group>
                </Col>
                <Col xs="auto">
                    <i class="icon fas fa-fighter-jet"></i>
                </Col>
                <Col xs="auto">
                    <Link to="/destination">
                        <Button variant="dark" onClick={destinationfunc} type="submit">
                            Find Flights
                        </Button>
                    </Link>
                </Col>
            </Row>
            
            {destination?<Destination fromCity={fromLocation} ToCity={toLocation}/>:""}
        </Form>


        
        </>
    )
}
