import React from 'react'

const Button = ({title}) => {
  return (
    <button className='p-3 m-2 text-lg rounded-lg bg-gray-100 w-55 h-12 hover:bg-gray-200'>{title}</button>
  )
}

export default Button