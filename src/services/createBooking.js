import axios from 'axios'

const createBooking = async (data) =>{
    data = {
        start: 0,
        end: 1000000,
        requestedAreaTypeId: "5f944224dcd592d8c71b44d1",
        ratePlanId:1,
        guests:1,
        adultCount: 2, // int
        contact:{ //contacy obj
            type:"App Generated"
        },
    }

    /*Adding api key in react allows anyone to view it 
    for a real app this would be better served with the API Key existing 
    only in the backend */
    const apiKey = process.env.REACT_APP_API_KEY
    const hotelId = process.env.REACT_APP_HOTEL_ID

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