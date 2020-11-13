import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Customer from './Customer'
import { getCustomersFunc } from '../../store/actions/customer.action'
const CustomerContainer = ({ getCustomersFunc, customers }) => {


    useEffect(()=>{
        getCustomersFunc()
    }, [])

    console.log("Customers", customers)

    return <Customer customers={customers}/>
}

const mapStateToProps = state => {
    return { 
        customers: state.customer.customers
    }
}

export default connect(mapStateToProps, { getCustomersFunc })(CustomerContainer)
