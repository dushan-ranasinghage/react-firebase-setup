import React, { useEffect, useState } from 'react'

const EmployeeView = ({ customers }) => {
    const [isUnknownUser, setIsUnknownUser] = useState(false);

    useEffect(() => {
        if(window.location.href.includes("react-firebase-setup")){
            setIsUnknownUser(true)
        }
    },[])

    return (
        <div class="container" style={{ paddingTop: '20px' }}>
            <div class="row">
                <div class="col">
                    <div style={{ display: 'flex' }}>
                        <h1 style={{ flex: 1 }}>Customers</h1>
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
                            <button type="button" class="btn btn-secondary" disabled={isUnknownUser ? true : false}>Add</button>
                        </div>
                    </div>
                    <table className="table text-right">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer, index) => {
                            return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{customer.Username}</td>
                                <td>{customer.Address}</td>
                                <td>{customer.PhoneNumber}</td>
                                <td>
                                <button 
                                type="button" 
                                style={{ margin: 5 }} 
                                className="btn btn-primary" 
                                data-toggle="modal" 
                                data-target="#staticBackdrop"
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    style={{ margin: 5 }}
                                    disabled={isUnknownUser? true: false}
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

export default EmployeeView
