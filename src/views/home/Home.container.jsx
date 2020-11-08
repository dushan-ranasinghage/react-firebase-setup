import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Home from './Home'
import { getPostsFunc } from '../../store/actions/post.action'
import { getEmployeesFunc, deleteEmployeeFunc } from '../../store/actions/employee.action'

const HomeContainer = ({ employees, getEmployeesFunc, deleteEmployeeFunc }) => {

    useEffect(() => {
        if(employees.length === 0){
            getPostsFunc()
            getEmployeesFunc()
        }
    },[employees])
 
    console.log("Employees", employees)

    return <Home employees={employees} deleteEmployeeFunc={deleteEmployeeFunc}/>
}

const mapStateToProps = state => {
    return { 
        employees: state.employee.employees
    }
}

export default connect(mapStateToProps, { getEmployeesFunc, deleteEmployeeFunc })(HomeContainer)
