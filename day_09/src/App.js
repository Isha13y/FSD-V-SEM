import React from 'react'
import ChildComponent from './ChildComponent'

const App = () => {
  const user={
    name:"isha",
    email:"yadav05isha@gmail.com",
    section:"cse-18"
  }
  return (
    <div>
      <ChildComponent user={user}/>
      </div>
  )
}

export default App
