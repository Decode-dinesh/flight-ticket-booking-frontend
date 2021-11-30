import React, { useState ,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Footersection from '../Footersection';

export default function Destination({fromCity, ToCity}) {
    const [flightsList, setFlightList] = useState([]);
    
    useEffect(async () => {
        try {
            let list = await axios.get("https://flightticket-booking.herokuapp.com/getallflights")
            setFlightList(list.data)
        } catch (err) {
            console.log(err);
        }
    },[])

  

    return (
        <>
    
               <Table striped bordered hover>
                <thead>
                <tr>
                    <th>FLIGHT</th>
                    <th>FROM</th>
                    <th>TO</th>
                    <th>DATE</th>
                    <th>Price</th>
                </tr>
                </thead>
                {
                    flightsList.map((item, id) => {
                        return (
                            <tbody key={id}>
                             {(item.from ===fromCity && item.to === ToCity)?
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.from}</td>
                                        <td>{item.to}</td>
                                        <td>{item.date}</td>
                                        <td>{item.fare}</td>
                                        <td><Link to="/bookingdetails"><Button variant="dark">Book</Button></Link></td>
                                    </tr>: ""}
                                </tbody>
                        )
                    })}
        </Table> 
        
        <Footersection/>
    </>
    )
}
