

/*Adding api key in react allows anyone to view it 
for a real app this would be better served with the API Key existing 
only in the backend */
export const apiKey = process.env.REACT_APP_API_KEY
export const hotelId = process.env.REACT_APP_HOTEL_ID

export const baseURI = "https://api.getimpala.com/v2/hotel"


console.log("key is: ", apiKey)
console.log("hotel ID is: ",hotelId )