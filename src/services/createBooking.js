import axios from 'axios'
import {apiKey,hotelId} from '../utils/config'

const createBooking = async (data) =>{

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