import styled from 'styled-components';

const Card = styled.div`
display: flex;
border: 2px solid green;
max-width: 850px;
justify-content: space-between;
`;
const Btn = styled.button`
height: fit-content;
margin: auto 40px;
background-color: whitesmoke;
color: orangered;
font-weight: bold;
padding: 17px 24px;
@media (max-width: 649px) {
  position: absolute;
  margin-left: 9px;
  margin-top: 140px;
  
  
  
}
:disabled {
  color: lightgrey;
}
`;
const PriceP = styled.p`
margin: auto 15px;
font-size: larger;
@media (max-width: 649px) {
  position: absolute;
  margin-top: 76px;
}
`;
const NameH2 = styled.h2`
margin-left: 13px;
`;

export {Card, Btn, PriceP, NameH2};