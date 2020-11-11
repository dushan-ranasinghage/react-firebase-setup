import React from 'react'

import EmployeeView from './EmployeeView'

const Home = ({ employees, deleteEmployeeFunc, updateEmployeeFunc, createEmployeeFunc }) => {
    return (
        <>
            <EmployeeView employees={employees} deleteEmployeeFunc={deleteEmployeeFunc} updateEmployeeFunc={updateEmployeeFunc} createEmployeeFunc={createEmployeeFunc}/>
        </>
    )
}

export default Home

