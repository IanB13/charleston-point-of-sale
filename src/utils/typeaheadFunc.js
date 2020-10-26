import getGuests from '../services/getGuests'
import getRatePlans from '../services/getRatePlans'

export const guestsToTypeahead = async () => {
    const guests = await getGuests()
    console.log("hitting guest api")
    const typeaheadGuests = guests.map( (guest) =>{
        const title = `${guest.title} ${guest.firstName} ${guest.lastName}`
        return{
            title,
            id: guest.id
        }
    })
    console.log(typeaheadGuests)
    return typeaheadGuests
}

export const ratesToTypeahead = async () => {
    const rates = await getRatePlans()
    console.log("hitting rates api")
    const typeaheadGuests = rates.map( (rate) =>{
        const title = rate.name
        return{
            title,
            id: rate.id
        }
    })
    console.log(typeaheadGuests)
    return typeaheadGuests
}