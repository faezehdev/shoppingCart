import React from 'react'

export default function Cart(props) {
    let removeHandler = (event,id) =>{
        props.onRemovePro(id)
    }
  return (
    <div className="cart">
            <span className="nameImg">
            <img src={require(`../images/${props.src}`)} alt="" />
            <h2>{props.name}</h2>
            </span>
            <span className="price">
            {props.price}
            </span>
            <span className="doing">
            <button className="remove" onClick={(event)=>removeHandler(event,props.id)}>
            remove
            </button>
            <span className="Count">
                {props.counter}
            </span>
            </span>
        </div>
  )
}
