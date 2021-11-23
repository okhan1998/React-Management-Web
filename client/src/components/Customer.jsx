import React from 'react'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell';
import CustomerDelete from './CustomerDelete';


export const Customer = (props) => {
    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt="profile" style={{width:64, height: 64}}/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
            <TableCell><CustomerDelete id={props.id} stateRefresh={props.stateRefresh}></CustomerDelete></TableCell>
        </TableRow>
    )
}
