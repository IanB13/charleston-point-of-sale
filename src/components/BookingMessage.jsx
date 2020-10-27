import { Message } from 'semantic-ui-react'

const BookingMessage = ({message}) =>{ 
  if(message?.area?.name){
  return (
  <Message success>
    <Message.Header>Booking successful</Message.Header>
    <p>
      We booked {message.area.name} from {message.startDate} to {message.endDate}
    </p>
  </Message>
)}
else if (message){
  return(
  <Message error>
    <Message.Header>Error Occured</Message.Header>
    <p>
      {message.message}
    </p>
  </Message>
  )
}
else return null
}

export default BookingMessage