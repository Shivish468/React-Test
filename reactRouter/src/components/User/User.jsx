import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className=' bg-gray-600 text-white px-2 py-4 text-center text-lg'>User: {userid}</div>
  )
}

export default User