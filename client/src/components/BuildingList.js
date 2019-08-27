import React from 'react'
import BuildingElement from "./BuildingElement"

export default function BuildingList(props) {
    return (
            <table class="table">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Country</th> 
                        <th>All Buildings</th>
                        <th>100m+</th>
                        <th>150m+</th>
                        <th>200m+</th>
                        <th>300m+</th>
                        <th>Telecom Towers</th>
                        <th>All Structures</th>
                    </tr>
                </thead>
                <tbody>
                        {props.data.map((building, index) => {
                        return  <BuildingElement key={index} building={building}/>
                        })}
                </tbody>
            </table>
    )
}