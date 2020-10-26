import {useState} from 'react'
import { Button, Modal,Input } from 'semantic-ui-react'
import Typeahead from './Typeahead'
import createBooking from '../services/createBooking'

const BookingModal = ({area, startDate, endDate,setMessage }) => {
  const [open, setOpen] = useState(false)
  const [guestId,setGuestId] = useState(null)
  const [ratePlan, setRatePlan] = useState(null)
  const [adults, setAdults] = useState(null) 

  const booking ={
    start : Date.parse(startDate)/1000,
    end : Date.parse(endDate)/1000,
    requestedAreaTypeId: area.id,
    ratePlanId: ratePlan,
    guests: [guestId],
    adultCount: +adults, 
    contact:{ 
        type:"guest",
        id:guestId
    }
  }
  console.log(booking)

  const onSubmit = () =>{
    createBooking(booking)
    setMessage(true)
    setOpen(false)
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Book Area</Button>}
    >
        <Modal.Header>
            Booking {area.name} <span>id: ({area.id})</span>
        </Modal.Header>
        <Modal.Content>
          <div>
            Guest :
            <Typeahead setSelector = {setGuestId} dataType ="guest"/>
          </div>
          <div>
            Rate Plan :
              <Typeahead setSelector = {setRatePlan} dataType ="rate"/>
          </div>
          <div>
            Adult Count : <br/>
            <Input type = "number" onChange = {
              (e)=> setAdults(e.target.value)
            }/>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick = {onSubmit}>
            Book
          </Button>
        </Modal.Actions>
    </Modal>
  )
}

export default BookingModal