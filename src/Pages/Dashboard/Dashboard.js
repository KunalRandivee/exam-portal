import React from 'react'
import welStyle from './Dashboard.module.css'


const Dashboard = () => {

  const currentdate = new Date().getTime();
  return (
    <div className={welStyle.mainCenter}>
      <h1>Welcome</h1>
      
    </div>
  )
}

export default Dashboard
