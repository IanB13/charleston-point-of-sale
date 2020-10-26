import axios from 'axios'
import {apiKey,hotelId,baseURI} from '../utils/config'

const getRatePlans = async () =>{

    const URI = `${baseURI}/${hotelId}/rate-plans`

    const config = {
        headers: {
            Authorization: 'Bearer ' + apiKey 
        }
    }

    const request = await axios.get(URI,config)


    return request.data.data
}

export default getRatePlans