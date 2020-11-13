import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Customer from './Customer'
import firebase from '../../config/fbConfig'

const firestore = firebase.firestore()

const CustomerContainer = ( ) => {
    const [customers, setCustomers] = useState([]);
    const ref = firestore.collection('employees');

    useEffect(()=>{
        ref.onSnapshot(querSnapshot => {
            const items = []
            querSnapshot.forEach(doc => {
              items.push(doc.data())
            })
            setCustomers(items)
          })
    }, [])

    console.log("Customers", customers)

    return <Customer customers={customers}/>
}

const mapStateToProps = state => {
    return { 
        
    }
}

export default connect(mapStateToProps, { })(CustomerContainer)
