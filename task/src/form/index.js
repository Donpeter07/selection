import React from 'react'
import FormValidation from './FormValidation'
import FormData from './FormData'
import Test from './Test'

function index({fetchData,item}) {
  return (
    <div>
        {/* <FormValidation  fetchData={fetchData}/> */}
        {/* <FormData item={item}/> */}
        <Test/>
    </div>
  )
}

export default index