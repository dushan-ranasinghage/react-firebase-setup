// import React, { useState, useEffect } from 'react'

// const EmployeeAddModal = ({updateEmployeeFunc}) => {
//     const [userId, setFullName] = useState(null)
//     const [jobTitleName, setFullName] = useState(null)
//     const [epfNumber, setPhoneNumber] = useState(null)
//     const [firstName, setPhoneNumber] = useState(null)
//     const [lastName, setPhoneNumber] = useState(null)
//     const [preferredFullName, setPhoneNumber] = useState(null)
//     const [employeeCode, setPhoneNumber] = useState(null)
//     const [region, setPhoneNumber] = useState(null)
//     const [phoneNumber, setPhoneNumber] = useState(null)
//     const [emailAddress, setPhoneNumber] = useState(null)
            
//     return (
//         <div className="modal fade" id="staticBackdropAdd" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
//                         <button id="modalCloseAdd" type="button" className="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">×</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         <form>
//                             <div className="form-row">
//                                 <div className="form-group col-md-6">
//                                     <label htmlFor="inputEmail4">Full Name</label>
//                                     <input type="text" className="form-control" id="inputEmail4" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
//                                 </div>
//                                 <div className="form-group col-md-6">
//                                     <label htmlFor="inputPassword4">Phone Number</label>
//                                     <input type="text" className="form-control" id="inputPassword4" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
//                                 </div>
//                             </div>
//                             <div className="form-row">
//                                 <div className="form-group col-md-6">
//                                     <label htmlFor="inputEmail4">Full Name</label>
//                                     <input type="text" className="form-control" id="inputEmail4" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
//                                 </div>
//                                 <div className="form-group col-md-6">
//                                     <label htmlFor="inputPassword4">Phone Number</label>
//                                     <input type="text" className="form-control" id="inputPassword4" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
//                                 </div>
//                             </div>
//                             <div className="form-row">
//                                 <div className="form-group col-md-6">
//                                     <label htmlFor="inputEmail4">Full Name</label>
//                                     <input type="text" className="form-control" id="inputEmail4" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
//                                 </div>
//                                 <div className="form-group col-md-6">
//                                     <label htmlFor="inputPassword4">Phone Number</label>
//                                     <input type="text" className="form-control" id="inputPassword4" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
//                                 </div>
//                             </div>
//                             <div className="form-row">
//                                 <div className="form-group col-md-6">
//                                     <label htmlFor="inputEmail4">Full Name</label>
//                                     <input type="text" className="form-control" id="inputEmail4" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
//                                 </div>
//                                 <div className="form-group col-md-6">
//                                     <label htmlFor="inputPassword4">Phone Number</label>
//                                     <input type="text" className="form-control" id="inputPassword4" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
//                                 </div>
//                             </div>
//                             <div className="form-row">
//                                 <div className="form-group col-md-6">
//                                     <label htmlFor="inputEmail4">Full Name</label>
//                                     <input type="text" className="form-control" id="inputEmail4" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
//                                 </div>
//                                 <div className="form-group col-md-6">
//                                     <label htmlFor="inputPassword4">Phone Number</label>
//                                     <input type="text" className="form-control" id="inputPassword4" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-secondary" data-dismiss="modal" data-toggle="modal" 
//                       data-target="#staticBackdropAdd">Close</button>
//                         <button type="button" className="btn btn-primary" onClick={() => {
//                             EmployeeFunc({...employee, preferredFullName:fullName, phoneNumber: phoneNumber}, employee.userId)
//                             document.getElementById("modalCloseAdd").click()
//                             }}>Save</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default EmployeeAddModal

