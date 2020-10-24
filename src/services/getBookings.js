import axios from 'axios'

const getBookings = async (startDate, endDate) =>{
    /*Adding api key in react allows anyone to view it 
    for a real app this would be better served with the API Key existing 
    only in the backend */
    const apiKey = process.env.REACT_APP_API_KEY
    const hotelId = process.env.REACT_APP_HOTEL_ID

    const URI = `https://api.getimpala.com/v2/hotel/${hotelId}/bookings`

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