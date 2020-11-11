import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Customer from './Customer'

const CustomerContainer = ( ) => {
    return <Customer />
}

const mapStateToProps = state => {
    return { 
        
    }
}

export default connect(mapStateToProps, { })(CustomerContainer)
