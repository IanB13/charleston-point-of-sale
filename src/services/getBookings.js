import axios from 'axios'
import {apiKey,hotelId,baseURI} from '../utils/config'

const getBookings = async (startDate, endDate) =>{

    const URI = `${baseURI}/${hotelId}/bookings`

    const config = {
        headers: {
            Authorization: 'Bearer ' + apiKey 
        },
        params: {
            startDate,
            endDate
        }
    }

    const request = await axios.get(URI,config)


    return request.data.data
}

export default getBookings