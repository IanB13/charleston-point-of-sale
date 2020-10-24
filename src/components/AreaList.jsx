import Area from './Area'

const AreaList = ({ areas }) => {
    console.log(areas)
    if (areas) {
        return (
            <ul>
                {areas.map(area => <Area key={area.id} area={area} />)}
            </ul>
        )
    }
    else return null
}

export default AreaList