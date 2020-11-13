import React from 'react'

import CustomerView from './CustomerView'

const Customer = ({ customers }) => {
    return (
        <>
            <CustomerView customers={customers}/>
        </>
    )
}

export default Customer

