// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName}) {
  const [name, setName] = React.useState(initialName);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

// This is the same as
// function Greeting(props) {
//   const initialName = props.initialName; // const {initialName} = props;
//   const array = React.useState(initialName);
//   const name = array[0];
//   const setName = array[1];
// }

function App() {
  return <Greeting initialName="Finn"/>
}

export default App
