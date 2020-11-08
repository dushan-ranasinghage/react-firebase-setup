import React from 'react'

import Test from './TestView'

const Home = ({ employees, deleteEmployeeFunc, updateEmployeeFunc, createEmployeeFunc }) => {
    return (
        <>
            <Test employees={employees} deleteEmployeeFunc={deleteEmployeeFunc} updateEmployeeFunc={updateEmployeeFunc} createEmployeeFunc={createEmployeeFunc}/>
        </>
    )
}

export default Home

