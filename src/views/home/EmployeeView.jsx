import React, { useEffect, useState } from 'react'
import EmployeeEditModal from './EmployeeEditModal'

const EmployeeView = ({ employees, deleteEmployeeFunc, updateEmployeeFunc, createEmployeeFunc }) => {
  const [selectdEmployee, setSelectedEmployee] = useState(null)
  const [selectdEmployeeIndex, setSelectedEmployeeIndex] = useState(null)
  const [isUnknownUser, setIsUnknownUser] = useState(false);

  useEffect(() => {
      if(window.location.href.includes("react-firebase-setup")){
          setIsUnknownUser(true)
      }
  },[])

  console.log("SELECTD EMPLOYEE", selectdEmployee)
  return (
    <div class="container" style={{ paddingTop: '20px' }}>
      <div class="row">
        <div class="col">
          <div style={{ display: 'flex' }}>
            <h1 style={{ flex: 1 }}>Employees</h1>
            <div style={{ 
                flex: 1, 
                display: 'flex', 
                justifyContent: 'flex-end', 
                marginTop: '5px', 
                marginBottom: '5px', 
                marginRight: '18px',
                height: '40px',
                width: '70px'
              }}>
              <button type="button" class="btn btn-secondary" disabled={isUnknownUser? true: false}>Add</button>
            </div>
          </div>
          {employees.length > 0 ?
          <table className="table text-right">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">EPF Number</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{employee.preferredFullName}</td>
                    <td>{employee.epfNumber}</td>
                    <td>{employee.phoneNumber}</td>
                    <td>
                      <button 
                      type="button" 
                      style={{ margin: 5 }} 
                      className="btn btn-primary" 
                      data-toggle="modal" 
                      data-target="#staticBackdrop"
                      onClick={() => {
                        setSelectedEmployee(employee)
                        setSelectedEmployeeIndex(index)
                      }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        style={{ margin: 5 }}
                        onClick={() => deleteEmployeeFunc(null, index)}
                        disabled={isUnknownUser? true: false}
                      >Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          :<div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>}
          {isUnknownUser && <h1>If you see this you won't be able to use some operations in this site.</h1>}
          <h3>Real Time Database is used in Employees</h3>
        </div>
      </div>
      {selectdEmployee && <EmployeeEditModal employee={selectdEmployee} selectdEmployeeIndex={selectdEmployeeIndex} updateEmployeeFunc={updateEmployeeFunc}/>}

    </div>
  )
}

export default EmployeeView
