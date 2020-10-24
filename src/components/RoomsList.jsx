import Room from './Room'

const RoomsList = ({rooms}) =>{
    console.log(rooms)
    if(rooms){
    return(
        <>
        {rooms.map(room => <Room key = {room.id} room= {room} />)}
        </>
    )
    }
    else return null
}

export default RoomsList