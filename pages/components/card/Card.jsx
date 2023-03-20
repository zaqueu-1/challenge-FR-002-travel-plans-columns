import React from 'react'

function Card({title, desc, buy, color, price}) {
  return (
    <div style={{backgroundColor: color}} className='card'>
        <h2>{title}</h2>
        <h3>{desc}</h3>
        <h4>{price}</h4>
        <button className='buy-btn' onClick={buy}>Comprar agora!</button>
    </div>
  )
}

export default Card
