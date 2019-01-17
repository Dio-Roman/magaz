import {withHandlers, lifecycle, compose, withState } from 'recompose';

/*
export const withHoc = withHandlers ({
  onClick : props => e => {
    let item = e.target.value;
    let arrItem = item.split(',')
    let obj = {id:arrItem[0], name: arrItem[1] , quantity:+arrItem[2], price:+arrItem[3]};
    props.addToCart(obj);
    e.target.disabled = "true";
  }
})


const Product = ({ data }) => (
  <ul>{posts.map(p => <li>{p.title}</li>)}</ul>
)

const ProductListWithData = lifecycle({
  componentDidMount() {
    fetch('http://localhost:3000/testData.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(this)
        console.log('приехали данные ', data)
        this.setState({data : data})
      })
  }
})(Product);
*/

export const composeHocs = compose(
  withHandlers ({
  onClick : props => e => {
    let item = e.target.value;
    let arrItem = item.split(',')
    let obj = {id:arrItem[0], name: arrItem[1] , quantity:+arrItem[2], price:+arrItem[3]};
    props.addToCart(obj);
    e.target.disabled = "true";
  }
}),

withState('prod', 'listUpdater', []),

lifecycle ({
  componentDidMount() {
    fetch('http://localhost:3000/testData.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('приехали данные ', data)
        this.setState({prod : data})
      })
    }
  }),
)
