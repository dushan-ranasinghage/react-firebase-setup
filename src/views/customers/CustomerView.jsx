import React, { useEffect, useState } from 'react'

const EmployeeView = () => {
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
                </div>
            </div>
        </div>
    )
}

export default EmployeeView
