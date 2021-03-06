import axios from 'axios'
import {apiKey,hotelId,baseURI} from '../utils/config'

const getAreas = async () =>{

    const URI = `${baseURI}/${hotelId}/areas`
    
    const config = {
        headers: {
            Authorization: 'Bearer ' + apiKey 
        }
    }

    const request = await axios.get(URI,config)

    return request.data.data
}

export default getAreas