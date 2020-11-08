import React from 'react'

import Test from './TestView'

const Home = ({ employees, deleteEmployeeFunc }) => {
    return (
        <>
            <Test employees={employees} deleteEmployeeFunc={deleteEmployeeFunc}/>
        </>
    )
}

export default Home

