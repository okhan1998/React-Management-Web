import React from 'react'

function CustomerDelete(props) {

    function deletedCustomer(id) {
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        }).then()
        props.stateRefresh();

    }

    return (
            <button onClick={(e) => {deletedCustomer(props.id)}}>삭제</button>
    )
}

export default CustomerDelete
