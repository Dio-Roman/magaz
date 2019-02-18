import styled from 'styled-components';

const Card = styled.div`
display: flex;
border: 2px solid green;
width: 850px;
justify-content: space-between;
`;
const Btn = styled.button`
height: fit-content;
margin: auto 40px;
background-color: whitesmoke;
color: orangered;
font-weight: bold;
padding: 17px 24px;
:disabled {
  color: lightgrey;
}
`;
const PriceP = styled.p`
margin: auto 15px;
font-size: larger;
`;
const NameH2 = styled.h2`
margin-left: 13px;
`;

export {Card, Btn, PriceP, NameH2};