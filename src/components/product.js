import React, { Component, Fragment } from 'react';

export default class Product extends Component {
  constructor(props) {
    super(props);
    
    
    // this.firstRef = React.createRef();
// this.handleClickAdd = this.handleClickAdd.bind(this);
  //   this.state = {
  //     disableButton: []
  //   }
  }

  // distest =  (el, props) =>{
    
  //       this.props.products.forEach(element => {
  //         if (el.id !== element.id) {
  //           return 'false';
  //       } return 'true'
  //       });
  // }

  handleClickAdd = (e) => {
    let item = e.target.value;
    let arrItem = item.split(',')
    let obj = {id:arrItem[0], name: arrItem[1] , quantity:+arrItem[2], price:+arrItem[3], button: e.target};
    this.props.addToCart(obj);
    e.target.disabled = "true";
    // this.firstRef.disabled = 'true'
    // this.setState ({
    //   disableButton: this.state.disableButton.concat([e.target])
    // })
    // console.log(React.Children.only(this.props.children))disabled={this.props.products[el.id]? 'false': 'true'}
  }

  testClick = (node) => {
    this.firstRef  = node;
    console.log(this.firstRef)
    return     this.firstRef
  }
  
  render() {
    return (
      <main style={{display: "inline-grid",}}>
        {this.props.data.map(el=>(
          <div key={el.id}style={{display: "flex", border:"2px solid black"}}>
            <h2>{el.name}</h2>
            <img height="200" width="200" src={el.src} alt={el.name}/>
            <p>Price: {el.price} rub.</p>
            <button   value={[el.id, el.name, el.quantity, el.price]} onClick={this.handleClickAdd}>Add to Cart</button>
          </div>
        ))}
        <button   >TEST IT 1</button>
      </main>
    );
  }
}
