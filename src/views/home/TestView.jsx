import React, { useEffect, useState } from 'react'
import EmployeeEditModal from './EmployeeEditModal'

const TestView = ({ employees, deleteEmployeeFunc, updateEmployeeFunc, createEmployeeFunc }) => {
  const [selectdEmployee, setSelectedEmployee] = useState(null)

  console.log("SELECTD EMPLOYEE", selectdEmployee)
  return (
    <div class="container" style={{ paddingTop: '20px' }}>
      <div class="row">
        <div class="col">
          <div style={{ display: 'flex' }}>
            <h1 style={{ flex: 1 }}>Employees</h1>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '5px' }}>
              <button type="button" class="btn btn-secondary" >Add</button>
            </div>
          </div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">EPF Number</th>
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
                    <td>
                      <button 
                      type="button" 
                      style={{ margin: 5 }} 
                      className="btn btn-primary" 
                      data-toggle="modal" 
                      data-target="#staticBackdrop"
                      onClick={() => setSelectedEmployee(employee)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        style={{ margin: 5 }}
                        onClick={() => deleteEmployeeFunc(null, employee._id)}
                      >Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      {selectdEmployee && <EmployeeEditModal employee={selectdEmployee} updateEmployeeFunc={updateEmployeeFunc}/>}

    </div>
  )
}

export default TestView
