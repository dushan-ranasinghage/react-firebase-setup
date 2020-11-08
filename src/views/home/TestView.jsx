import React, { useEffect, useState } from 'react'

const LotTable = ({ employees, deleteEmployeeFunc }) => {
  return (
    <div class="container" style={{ paddingTop: '20px' }}>
      <div class="row">
        <div class="col">
          <div style={{display:'flex'}}>
              <h1 style={{flex:1}}>Employees</h1>
              <div style={{flex:1, display:'flex',justifyContent:'center', marginTop:'5px', marginBottom:'5px'}}>
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
                      <button type="button" class="btn btn-primary" style={{margin:5}}>Edit</button>
                      <button 
                        type="button" 
                        class="btn btn-danger" 
                        style={{margin:5}} 
                        onClick={() => deleteEmployeeFunc(null, employee.userId)}
                        >Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default LotTable
