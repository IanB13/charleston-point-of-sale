import axios from 'axios'
import {apiKey,hotelId} from '../utils/config'

const createBooking = async (data) =>{
    data = {
        start: 0,
        end: 1000000,
        requestedAreaTypeId: "5f944224dcd592d8c71b44d1", //need area from button
        ratePlanId: "is rate plan", //need rate plans
        guests:"is id", // need guest ID from guests
        adultCount: 2, // int
        contact:{ //contacy obj
            type:"App Generated"
        },
    }

    const URI = `https://api.getimpala.com/v2/hotel/${hotelId}/bookings`

    const config = {
        headers: {
            Authorization: 'Bearer ' + apiKey ,
            "Content-Type": "application/json"
        }
    }

    const request = await axios.post(URI,data,config)

    return request.data.data
}

export default createBooking