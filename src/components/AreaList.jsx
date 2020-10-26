import Area from './Area'

const AreaList = ({ areas, startDate, endDate }) => {
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
                        />
                )})}
            </ul>
        )
    }
    else return null
}

export default AreaList