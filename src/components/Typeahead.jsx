import React, { useState ,useEffect } from 'react'
import { Search } from 'semantic-ui-react'
import {guestsToTypeahead,ratesToTypeahead} from "../utils/typeaheadFunc"

const Typeahead = ({setSelector, dataType}) => {
    useEffect( ()=>{
        const interfunction = async () => {
            let tempData = null
            if(dataType === "guest"){
                tempData = await guestsToTypeahead()
            }
            else if(dataType === "rate") {
                tempData = await ratesToTypeahead()
            }
            else{
                console.error("INCORRECT RATE TYPE")
            }
            setData(tempData)
            setLoading(false)
        } 
        interfunction()
    },[dataType])


    const [data, setData] = useState(null)
    const [results, setResults] = useState(data)
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(true)
    
    const changeValue = (e) =>{
        
        const searchValue = e.target.value
        const filteredResults = data.filter( (data) =>{
            const title = data.title.toLowerCase()
            return title.includes(searchValue.toLowerCase())
        })
        setResults(filteredResults)
        setValue(searchValue)
    }


    return (
        <Search
            loading = {loading}
            onResultSelect={(_e ,data) =>{
                setValue(data.result.title)
                setSelector(data.result.id)
            }}
            onSearchChange={changeValue}
            results={results}
            value={value}
            icon = {false}
        />
    )
}


export default Typeahead