import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Navheader from '../Navheader';
import Footersection from '../Footersection';

export default function Allflights() {

    const [flightList, setFlightList] = useState([]);

    useEffect(async () =>{
        try {
            let list = await axios.get("https://flightticket-booking.herokuapp.com/getallflights")
            setFlightList(list.data)
        } catch (err) {
            console.log(err)
        }
        
    },[])


    return (
        <>
        <Navheader/>

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
                    flightList.map((item, id) => {
                        return (
                                <tbody key={id}>
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.from}</td>
                                        <td>{item.to}</td>
                                        <td>{item.date}</td>
                                        <td>{item.fare}</td>
                                        <td><Link to="/bookingdetails" state={{flightID: item._id}} ><Button variant="dark">Book</Button></Link></td>
                                    </tr>
                                </tbody>
                        )
                    })
                }
        </Table>

        <Footersection/>
        </>
    )
}
