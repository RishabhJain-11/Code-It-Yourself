import React from 'react'
import rishabh from '../images/rishabhj.jpeg'

const Card = () => {
  return (
    <div className='card'>
      <img src={rishabh} alt="" width="100%" />
      <div className="contan">
        <h4><b>Imagen</b></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, beatae.</p>
      </div>
    </div>
  )
}

export default Card