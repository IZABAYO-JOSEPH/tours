import React, { useState } from 'react'

const SingleTour = ({id,removeTour,info,name,image,price}) => {
    const [readMore, setReadMore] = useState(false)
    return (
    <article className='single-tour'>
<img src={image} alt={name} className="img" />
<span className='tour-price'>${price}</span>
<div className='tour-info'>
    <h2>{name}</h2>
    <p>{readMore? info: `${info.substring(0,200)}....`}
    <button type="button" 
    className="info-btn"
    onClick={()=>setReadMore(!readMore)}>
    {readMore?"Show Less":"Read More"}
    </button>
    
    </p>
    <button type="button"className="btn btn-block delete-btn" onClick={()=>removeTour(id)}>Not Interested</button>
</div>
    </article>
  )
}

export default SingleTour