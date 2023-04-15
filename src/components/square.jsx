import React from 'react'
import '../CSS/Sqaure.css'
const Square = ({value,onClick,elem}) => {
  return (
    <div onClick={()=>onClick(value)} className='square'>
      {elem}
    </div>
  )
}

export default Square

