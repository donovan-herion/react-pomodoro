import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(25)

  function decrementCount() {
    setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }
  function incrementCount() {
    setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;