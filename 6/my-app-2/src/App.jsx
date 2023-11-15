/* eslint-disable react/prop-types */
import './App.css'

function App({locale}) {

  return (
    <>
     <h1>
      <span className="text">Hello {new Date().toLocaleTimeString(locale)} </span>
     </h1>
    </>
  )
}

export default App
