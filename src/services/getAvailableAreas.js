import getBookings from "./getBookings"
import getAreas from "./getAreas"

const getAvailableAreas = async (startDate, endDate) =>{
    console.log("Using API to get avalible rooms")
    //Find Booked Rooms
    const bookings = await getBookings(startDate, endDate)
    // bookings statuses that don't mean the area is unavalible:
    const availBookings = [ "NO_SHOW" , "CANCELLED" , "CHECKED_OUT", "TRANSFERRED"]

    const bookedAreas = bookings
        .filter(booking => {
        return !availBookings.includes(booking.status)
        })
        .map(
            booking => booking.areaId
        )
        .reduce((uniqueAreas, areaId ) => {
            return uniqueAreas.includes(areaId) ? uniqueAreas : [areaId, ...uniqueAreas]
        },[])
    const areas = await getAreas()

    // Areas statuses that mean the area is unavailable
    const unavailAreas = ["OUT_OF_SERVICE","OUT_OF_ORDER","OUT_OF_INVENTORY"]
     
    const availableAreas = areas
        .filter(area => {
            return !(unavailAreas.includes(area.status) || bookedAreas.includes(area.id))
        })

    return availableAreas
}

export default getAvailableAreas