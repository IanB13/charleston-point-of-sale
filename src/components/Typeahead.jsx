import React, { useState } from 'react'
import { Search } from 'semantic-ui-react'
import guests from "../resources/guests.json"

const guestsToTypeahead = () => {
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


const Typeahead = () => {
    const guests1 = guestsToTypeahead()
    const [results, setResults] = useState(guests1)
    const [value, setValue] = useState('')
    
    const changeValue = (e) =>{
        
        const searchValue = e.target.value
        const filteredGuests = guests1.filter( (guest) =>{
            const guestName = guest.title.toLowerCase()
            return guestName.includes(searchValue.toLowerCase())
        })
        setResults(filteredGuests)
        setValue(searchValue)
    }


    return (
        <Search
            onResultSelect={(e) =>
                console.log(e)
            }
            onSearchChange={changeValue}
            results={results}
            value={value}
            icon = {false}
        />
    )
}


export default Typeahead