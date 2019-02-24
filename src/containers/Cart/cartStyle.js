import styled from 'styled-components';

const CartDiv = styled.div`
margin-left: 15%;
width: 270px;
`;
const TotalPriceP = styled.p`
border-top: 2px solid green;
padding-top: 10px;
`;
const Btn = styled.button`
height: fit-content;
margin: auto 40px;
background-color: whitesmoke;
color: orangered;
font-weight: bold;
padding: 17px 24px;
padding-bottom: 30px;
`;
const Delete = styled.button`
margin-left: 35px;
background-color: whitesmoke;
color: orangered;
font-weight: bold;
`;
const Number = styled.span`
color: orangered;
font-weight: bold;
`;
const Empty = styled.p`
color: orangered;
font-weight: bold;
`;
const Ul = styled.ul`
margin-left: -24px;
`;
const PlusMinusBtn = styled.button`
background-color: whitesmoke;
color: orangered;
border-radius: 50%;
margin-right: 7px;
margin-left: 7px;
height: 23px;
width: 23px
`;
const Counter = styled.div`
display: inline-flex;
justify-content: flex-end;
width: 70px;
`;
export {CartDiv, TotalPriceP, Btn, Number, Empty, Ul, PlusMinusBtn, Counter, Delete};