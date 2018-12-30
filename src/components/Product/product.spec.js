import React from 'react';
import {shallow} from 'enzyme';
import Product from './product';
import {data} from '../../data';

describe ('Product', () => {
    // const data = [1,2,3];
    // newData.length = 0;

    //     products : []
    // }
    
    
    describe ('prod list', () => {
        const nextProps = {
                // ...props,
                // products: []
                //  newData : [1,2]
            }
        const prodList = shallow (<Product  data ={data}/>);
        it ('list', () => {
            // console.log(prodList.debug())
            expect (prodList.find('Main')).toHaveLength(data.length)
        })
    })
})