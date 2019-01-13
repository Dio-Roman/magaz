import {withHandlers } from 'recompose';


export const withHoc = withHandlers ({
  onClick : props => e => {
    let item = e.target.value;
    let arrItem = item.split(',')
    let obj = {id:arrItem[0], name: arrItem[1] , quantity:+arrItem[2], price:+arrItem[3]};
    props.addToCart(obj);
    e.target.disabled = "true";
  }
})
