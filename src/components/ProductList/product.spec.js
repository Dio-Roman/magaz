import React from 'react';
import {shallow} from 'enzyme';
import ProductList from './productList';
import {data} from '../../data';

describe ('Product', () => {
    
    data.length = 3;

    describe ('prod list', () => {
        const prodList = shallow (<ProductList  data ={data}/>);
        it ('list', () => {
            // console.log(prodList.debug())
            // expect (prodList.find('main')).toHaveLength(data.length);
            expect(prodList.find('main').children()).toHaveLength(3)
        })
    })
})