import React from 'react'
import {Spin} from 'antd'
const Spinner = () => {
  return (
    <div className="spinner">
     <span>loading</span> <Spin size="large" /> <span></span>
    </div>
  )
}

export default Spinner
