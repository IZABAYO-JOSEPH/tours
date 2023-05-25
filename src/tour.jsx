import React from 'react'

const SingleTour = ({id,removeTour,info,name,image,price}) => {
  return (
    <article className='single-tour'>
<img src={image} alt={name} className="img" />
<span className='tour-price'>${price}</span>
<div className='tour-info'>
    <h2>{name}</h2>
    <p>{info}</p>
    <button type="button"className="btn btn-block delete-btn" onClick={()=>removeTour(id)}>Not Interested</button>
</div>
    </article>
  )
}

export default SingleTour