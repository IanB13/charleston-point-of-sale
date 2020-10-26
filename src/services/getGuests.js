import axios from 'axios'
import {apiKey,hotelId,baseURI} from '../utils/config'

// takes start date and end date as "YYYY-MM-DD"
//defaults to start and end of 32 bit UNIX time
const getGuests = async (startDate = "1970-01-02", endDate = "2038-01-19") =>{
    const URI = `${baseURI}/${hotelId}/guests`

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
    console.log(request.data)
    return request.data.data
}

export default getGuests