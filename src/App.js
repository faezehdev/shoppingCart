import './App.css';
import Header from './Header/Header';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      products :[
        {id:0,name:'product1',price:'$8',src:'Ash-White-Plain-Sliced 1.png',counter:0},
        {id:1,name:'product2',price:'$10',src:'Beech-Euro-Steamed-Plain-Sliced 1.png',counter:0},
        {id:2,name:'product3',price:'$25',src:'Ebony-Macassar 2.png',counter:0},
        {id:3,name:'product4',price:'$87',src:'Ebony-Macassar 3.png',counter:0},
        {id:4,name:'product5',price:'$67',src:'Ash-White-Plain-Sliced 1.png',counter:0},
        {id:5,name:'product6',price:'$71',src:'Ash-White-Plain-Sliced 1.png',counter:0},
      ],
      cartPro :[],
      counterPro :0,
      newPro:[]
    }
    this.addProductToCart = this.addProductToCart.bind(this)
    this.removeProductHandler = this.removeProductHandler.bind(this)
    this.emptyShoppingCart = this.emptyShoppingCart.bind(this)


  }
 
  addProductToCart(proID,counter){
      let res = this.state.products.filter(pro =>{
        return pro.id == proID
      })
      let index = this.state.products.findIndex(pro =>{
        return pro.id == proID
      })
      res.map(p=>{
       p.counter = p.counter+1
      })
      let newObj = [...this.state.products]
      for(let i =0 ; i<this.state.products.length ; i++){
        newObj[index]= res[0]
        console.log(newObj[index]); 
      }
     console.log(newObj);
     this.setState((prev)=>{
      return{
        products : [...newObj]
      }
     })
     console.log(res[0].counter);
      if(res[0].counter == 1){
        this.setState((prev)=>{
          return{
            cartPro : [...prev.cartPro,res[0]]
          }
     
        })
      }
      else{
        console.log('bigger than 1');
      }



  }
  removeProductHandler(proID){
    let NewShoppingCart = this.state.cartPro.filter(pro=>{
      return pro.id != proID
    })
    this.setState({
      cartPro : NewShoppingCart
    })
    let res = this.state.products.filter(pro =>{
      return pro.id == proID
    })
    let index = this.state.products.findIndex(pro =>{
      return pro.id == proID
    })
    res.map(p=>{
     p.counter = 0
    })
    let newObj = [...this.state.products]
    for(let i =0 ; i<this.state.products.length ; i++){
      newObj[index]= res[0]
      console.log(newObj[index]); 
    }
   console.log(newObj);
   this.setState((prev)=>{
    return{
      products : [...newObj]
    }
   })
  }
  emptyShoppingCart(){
 this.setState({
  cartPro : []
 })
 let pros = [...this.state.products]
 pros.map(p=>{
   p.counter = 0
  })
 this.setState((prev)=>{
  return{
    products : [...pros]
  }
 })
  }
  render() {
    return (
      <div className="App">
     <Header></Header>
     <div className="prolist">
      {this.state.products.map(
       (product) =>(
          <Product {...product} onAddProduct = {this.addProductToCart} key={this.props.id}></Product>
      )
      )}
    
   
     </div>
     <div className="Cart-C">
      <div className="title">
        <h1>
          Carts
        </h1>
      </div>
      <div className="Carts">
       <div className="cart-titles">
        <span className="item">
        item
        </span>
        <span className="price">
        price
        </span>
        <span className="doing">
        doing
        <span className="Counter">
          count
        </span>
        </span>
       </div>
       <div className="carts-container">
        {this.state.cartPro.map((pro)=>(
                 <Cart {...pro} onRemovePro={this.removeProductHandler} />

        ))}
       
       </div>
       <button className='RemoveAll' onClick={this.emptyShoppingCart}>
        removeAll
       </button>
      </div>
    </div>
    </div>
    )
  }
}
