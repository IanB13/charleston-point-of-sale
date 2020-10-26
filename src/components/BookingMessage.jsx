import { Message } from 'semantic-ui-react'

const BookingMessage = ({message}) =>{ 
  if(message){
  return (
  <Message success>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We
      recommend reviewing the changes.
    </p>
  </Message>
)}
else return null
}

export default BookingMessage