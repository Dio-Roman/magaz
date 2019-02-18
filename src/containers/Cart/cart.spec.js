import React from 'react';
import {shallow} from 'enzyme';
import Cart from './cart'

describe ('Cart', () => {
    const props = {
        products : []
    }
    
    // если корзина пуста, то рендерится компонент Empty
    
    describe ('cart is empty', () => {
        it ('empty', () => {
            const nextProps = {
                ...props,
                // products: []
            }
            
            const cart = shallow (<Cart {...nextProps}/>); 

            expect (cart.find('Empty'))
        })
    })
})