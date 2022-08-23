import React from 'react'
import FormValidation from './FormValidation'
import FormData from './FormData'

function index({fetchData,item}) {
  return (
    <div>
        <FormValidation  fetchData={fetchData}/>
        {/* <FormData item={item}/> */}
    </div>
  )
}

export default index