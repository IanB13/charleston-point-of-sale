const Area = ({area}) => {
    

    return(
        <li>
            <details>
                <summary> {area.name} </summary>
                <button>Book Area</button>
            </details>     
        </li>
    )
}

export default Area