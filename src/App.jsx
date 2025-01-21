import { useState } from 'react'
import { requestName } from './utils/parseURL'

function App() {

  return (
    <>
    {requestName()}
    </>
  )
}

export default App
