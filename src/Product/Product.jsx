import React from 'react'
import './product.css'
export default function Product(props) {

    const addHandler = (e,id,counter)=>{
        props.onAddProduct(id,counter)
    };
  return (

  <div className="product">
    <div className="IMG">
        <img src={require(`../images/${props.src}`)} alt="" />
    </div>
    <div className="det">
        <span className="price">
           {props.price}
        </span>
        <button className="addToCart" onClick={(event)=>addHandler(event,props.id,props.counter)}>
            AddToCart
        </button>
    </div>
  </div>
  )
}
