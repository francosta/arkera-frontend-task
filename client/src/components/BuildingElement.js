import React from 'react'

export default function BuildingElement(props) {
    return (
            <tr>
                <td>{props.building["City"]}</td>
                <td>{props.building["Country"]}</td>
                <td>{props.building["All Buildings"]}</td>
                <td>{props.building["100m+"]}</td>
                <td>{props.building["150m+"]}</td>
                <td>{props.building["200m+"]}</td>
                <td>{props.building["300m+"]}</td>
                <td>{props.building["Telecom Towers"]}</td>
                <td>{props.building["All Structures"]}</td>
            </tr>
    )
}
