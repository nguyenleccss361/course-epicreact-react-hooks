// useState: counter
// 💯 accept an initialName
// http://localhost:3000/isolated/final/01.extra-1.js
// http://localhost:3000/isolated/final/01.extra-1.js

import React from 'react'

function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(initialName)
  const handleChange = event => setName(event.target.value)
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
