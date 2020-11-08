import React from 'react'

import Test from './TestView'

const Home = ({ employees, deleteEmployeeFunc, updateEmployeeFunc }) => {
    return (
        <>
            <Test employees={employees} deleteEmployeeFunc={deleteEmployeeFunc} updateEmployeeFunc={updateEmployeeFunc}/>
        </>
    )
}

export default Home

