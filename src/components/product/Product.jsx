import React from 'react'

export default function Product(props) {
  return (
    <>
        <div className="product col-md-4">
        <h1 className="fs-5">{props.title} </h1>
        <p>{props.price} </p>
        <p>{props.desc} </p>
       </div>
    </>
  )
}
