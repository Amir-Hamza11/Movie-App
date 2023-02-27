import React from 'react'
import NavigationBar from './NavigationBar'

const MainPageLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  )
}

export default MainPageLayout