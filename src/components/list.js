import React from "react"


function List(props){
    return(
        <div>
            <tbody>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.phone}</td>
                    <td>{props.department}</td>

                </tr>
            </tbody>
        </div>
    )
}

export default List