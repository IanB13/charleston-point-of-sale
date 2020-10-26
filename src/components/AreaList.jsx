import Area from './Area'

const AreaList = ({ areas, startDate, endDate, setMessage, setAvailAreas}) => {
    console.log(areas)
    if (areas) {
        return (
            <ul>
                {areas.map(area => {
                    return (
                        <Area
                            key={area.id}
                            area={area}
                            startDate={startDate}
                            endDate={endDate}
                            setMessage = {setMessage}
                            setAvailAreas = {setAvailAreas}
                        />
                )})}
            </ul>
        )
    }
    else return null
}

export default AreaList