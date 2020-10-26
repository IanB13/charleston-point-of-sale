const Area = ({area}) => {


    return(
        <li>
            <details>
                <summary> {area.name} </summary>
                <p>
                    Area id is {area.id} <br/>
                    Area status is {area.status}
                </p>
                <button>Book Area</button>
            </details>     
        </li>
    )
}

export default Area