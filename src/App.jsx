import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import Routes from './layouts/routes'


function App() {


  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Quicksand:wght@300..700&display=swap" rel="stylesheet"></link>
      <RouterProvider router={Routes} />

    </>
  )
}

export default App
