import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'

const Home = () => {

    const {count} = useContext(AppContext)

  return (
    <div>
      I am home page
    </div>
  )
}

export default Home
