/* eslint-disable react-hooks/rules-of-hooks */
// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

// function Greeting({initialName = ''}) {
//   // 🐨 initialize the state to the value from localStorage
//   // 💰 window.localStorage.getItem('name') ?? initialName
//   // const [name, setName] = React.useState(window.localStorage.getItem('name') ?? initialName)

//   // 1. 💯 lazy state initialization
//   // 2. 💯 effect dependencies

//   // console.log('Rendering children')
//   // function getInitialNameValue() {
//   //   console.log('Get initial value')
//   //   return window.localStorage.getItem('name')
//   // }
//   // const [name, setName] = React.useState(getInitialNameValue)
//   const [name, setName] = React.useState(
//     () => window.localStorage.getItem('name') ?? initialName,
//   )

//   // 🐨 Here's where you'll use `React.useEffect`.
//   // The callback should set the `name` in localStorage.
//   // 💰 window.localStorage.setItem('name', name)
//   React.useEffect(() => {
//     // console.log('Call useEffect')
//     window.localStorage.setItem('name', name)
//   }, [name])
//   //   window.localStorage.setItem('name', name)
//   // }, [name], {actual: 'Object'}) // Do not use this, it will call useEffect everytime re-render.

//   function handleChange(event) {
//     setName(event.target.value)
//   }

//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// 3. 💯 custom hook

function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) ?? defaultValue,
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState('name', initialName)

  function handleChange(event) {
    setName(event.target.value)
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

function App() {
  // 2. 💯 effect dependencies

  // console.log('Rendering parent')
  // const [count, setCount] = React.useState(0)
  // return (
  //   <>
  //     <button onClick={() => setCount(previousCount => previousCount + 1)}>
  //       {count}
  //     </button>
  //     <Greeting />
  //   </>
  // )
  return <Greeting />
}

export default App
