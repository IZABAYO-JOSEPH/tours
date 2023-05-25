import React from 'react'
import SingleTour from './tour'
const Tours = ({tours}) => {
  return (
    <section>
        <div className="title">
            <h2>Our tours</h2>
            <div className="title-underline"></div>
        </div>
        <div className="tours">
            {tours.map((tour)=>{
                return <SingleTour key={tour.id} {...tour} />
            })}
        </div>
    </section>
  )
}

export default Tours