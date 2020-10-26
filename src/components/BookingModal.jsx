import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

function ModalExampleModal({area, startDate, endDate }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Book Area</Button>}
    >
        <Header>
            Booking {area.name} <span>id: ({area.id})</span>
        </Header>
        <p>
        area id is {area.id}
        </p>
        <p>
        from time {startDate} to {endDate}
        </p>
        
    </Modal>
  )
}

export default ModalExampleModal