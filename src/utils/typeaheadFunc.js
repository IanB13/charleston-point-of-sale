import getGuests from '../services/getGuests'
import getRatePlans from '../services/getRatePlans'

export const guestsToTypeahead = async () => {
    const guests = await getGuests()
    const typeaheadGuests = guests.map( (guest) =>{
        const title = `${guest.title} ${guest.firstName} ${guest.lastName}`
        return{
            title,
            id: guest.id
        }
    })
    return typeaheadGuests
}

export const ratesToTypeahead = async () => {
    const rates = await getRatePlans()
    const typeaheadGuests = rates.map( (rate) =>{
        const title = rate.name
        return{
            title,
            id: rate.id
        }
    })
    return typeaheadGuests
}