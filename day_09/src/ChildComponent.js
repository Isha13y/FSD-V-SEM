import React from 'react'


const ChildComponent = ({user}) => {
    const {name,email,section}= user;

  return (
    <div>
       <h1>User Data</h1>
       <h2>{name}</h2>
       <h3>{email}</h3>
       <h4>{section}</h4>
    </div>
  )
}

export default ChildComponent