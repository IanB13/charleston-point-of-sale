import Area from './Area'

const AreaList = ({ areas, startDate, endDate, setMessage }) => {
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
                        />
                )})}
            </ul>
        )
    }
    else return null
}

export default AreaList