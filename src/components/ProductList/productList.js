import React from 'react';
import PropTypes from 'prop-types';
// import {data} from '../../data'; добавляю через ComponentDidMount
import {mainStyle} from './style';
import {composeHocs} from './withHoc';
import {Product} from '../Product/product';

const ProductList = composeHocs (({onClick,prod}) => 
  <main style={mainStyle}>
    {prod.map(el=>(
      <Product
        key = {el.id}
        id = {el.id}
        name = {el.name}
        src = {el.src}
        price = {el.price}
        quantity = {el.quantity}
        onClick = {onClick}
      />      
    ))}
  </main>
)

/*если без recompose

export default class Product extends Component {
  handleClickAdd = (e) => {
    let item = e.target.value;
    let arrItem = item.split(',')
    let obj = {id:arrItem[0], name: arrItem[1] , quantity:+arrItem[2], price:+arrItem[3]};
    this.props.addToCart(obj);
    e.target.disabled = "true";
  }
  
  render() {
    return (
      <main style={mainStyle}>
        {data.map(el=>(
          <Card key={el.id}>
            <NameH2>{el.name}</NameH2>
            <img height="200" width="200" src={el.src} alt={el.name}/>
            <PriceP>Price: {el.price} rub.</PriceP>
            <Btn   value={[el.id, el.name, el.quantity, el.price]} onClick={this.handleClickAdd}>Add to Cart</Btn>
          </Card>
        ))}
      </main>
    );
  }
}
*/

ProductList.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
  
}
export {ProductList};