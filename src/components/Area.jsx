import BookingModal from './BookingModal'

const Area = ({area, startDate, endDate}) => {
    return(
        <li>
            <details>
                <summary> {area.name} </summary>
                <p>
                    Area id is {area.id} <br/>
                    Area status is {area.status}
                </p>
                <BookingModal 
                area = {area} 
                startDate={startDate}
                endDate={endDate}
                />
            </details>     
        </li>
    )
}

export default Area