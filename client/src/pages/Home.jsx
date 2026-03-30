import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'

const Home = () => {

    const {count} = useContext(AppContext)

  return (
    <div>
      {count}
    </div>
  )
}

export default Home
