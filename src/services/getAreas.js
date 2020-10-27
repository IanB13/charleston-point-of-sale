import axios from 'axios'

const getAreas = async () =>{
    /*Adding api key in react allows anyone to view it 
    for a real app this would be better served with the API Key existing 
    only in the backend */
    const apiKey = process.env.REACT_APP_API_KEY
    const hotelId = process.env.REACT_APP_HOTEL_ID
    console.log("key is: ", apiKey)
    console.log("hotel ID is: ",hotelId )
    const URI = `https://api.getimpala.com/v2/hotel/${hotelId}/areas`

    const config = {
        headers: {
            Authorization: 'Bearer ' + apiKey 
        }
    }

    const request = await axios.get(URI,config)

    return request.data.data
}

export default getAreas