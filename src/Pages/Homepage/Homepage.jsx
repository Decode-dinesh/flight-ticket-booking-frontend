import React,{ useContext } from 'react';
import './homepage.css';
import Navheader from '../../components/Navheader';
import FlightSearch from '../../components/flightSearch/FlightSearch';
import Footersection from '../../components/Footersection';
import { context } from '../../App';


export default function Homepage() {

    const [log] = useContext(context);

    return (
        <>  
             {log?
                <div>
                <Navheader />
                    <header class="header bg-dark py-5">
                        <div class="container px-4 px-lg-5 my-5">
                            <div class="text-center text-white">
                                <h1 class="display-4 fw-bolder">BOOK TICKETS</h1>
                                <p class="lead fw-normal text-white-50 mb-0">Enjoy your holiday</p>
                            </div>
                        </div>
                    </header> 
                    
                    <FlightSearch />
                    <Footersection />
                </div>
                : "not found"} 
        </>
    );
}
