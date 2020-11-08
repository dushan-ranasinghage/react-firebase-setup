import React from 'react'
import firebaseDb from '../../config/fbConfig'

const LotTable = ({ posts }) => {

  // Employees string is the document that you need under your db
  firebaseDb.child('Employees').on('value', snapshot => {
    snapshot.val()
    console.log(snapshot.val())
  })

  return (
    <div class="container" style={{paddingTop:'20px'}}>
      <div class="row">
        <div class="col">
          Home
          {process.env.REACT_APP_NOT_SECRET_CODE}
        </div>
      </div>
    </div>
  )
}

export default LotTable
