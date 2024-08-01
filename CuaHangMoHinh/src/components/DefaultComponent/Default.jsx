import React from 'react'
import HeaderComponent from '../HeaderComponent/Header'

const Default = ({children}) => {
  return (
    <div>
      <HeaderComponent/>
      {children}
    </div>
  )
}

export default Default
