import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Navheader from '../Navheader';
import Footersection from '../Footersection';



const BookingsHelper = ({id}) => {
    const [flightName ,setFlightName] = useState("")
    const [fromLocation ,setFromLocation] = useState("")
    const [toLocation ,setToLocation] = useState("")
    const [date ,setDate] = useState("")
    const [fare ,setFare] = useState(0)
    
    

    useEffect(() => {
        axios.get(`https://flightticket-booking.herokuapp.com/getflight/${id}`).then((response)=>{
            console.log(response)
            setFlightName(response.data.name)
            setFromLocation(response.data.from)
            setToLocation(response.data.to)
            setDate(response.data.date.slice(0,10))
            setFare(response.data.fare)
        })
    },[])
    return(
        <>
            <td>{flightName}</td> 
            <td>{fromLocation}</td> 
            <td>{toLocation}</td> 
            <td>{date}</td> 
            <td>{fare}</td>
        </>
    )
}


export default function AllBooking() {

    const[bookingsList,setBookingsList] = useState([])
    const[updatehelper,setupdatehelper] = useState(0) 


    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("https://flightticket-booking.herokuapp.com/getallbooking")
            setBookingsList(response.data)
            console.log(response)
        }
        fetchData();
    }, [updatehelper])

    const deleteList = (id,password) => {
        var answer = prompt("Please enter your password:");
        if (answer === password) {
            axios.delete(`https://flightticket-booking.herokuapp.com/booking/${id}`)
            setupdatehelper(updatehelper+1)
        }else{
            window.alert("wrong password")
        }
    }



    return (
            <>
    
            
                <Navheader />
                <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>FLIGHT</th>
                            <th>FROM</th>
                            <th>TO</th>
                            <th>DATE</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        {bookingsList.map((val,idx)=>{
                                return (
                                    <tbody key={idx}>
                                        <tr>    
                                            <td><h2>{val.name}</h2></td>
                                            <BookingsHelper id={val.travelsid}/>
                                            <td><button onClick={()=>deleteList(val._id,val.password)}>cancel ticket</button></td> 
                                        </tr> 
                                    </tbody> 
                                )
                            })} 
                </Table>          
                <Footersection/>
    
        </> 
    )
}
