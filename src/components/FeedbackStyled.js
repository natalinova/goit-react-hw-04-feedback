import styled from 'styled-components';

export const Block = styled.div`
background-color: lightslategray;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 35%;
height: 600px;
margin-left:auto;
margin-right: auto;
margin-top: 100px;
 box-shadow: -1px 0px 21px -1px rgba(0, 0, 0, 0.75);
 border-radius: 5px;
`
export const Button = styled.button`
font-weight: bold;
border-radius:10px;
background-color: darkorange;
color: green;
margin: 12px;
width: 25%;
padding: 20px;
&:hover{
    background-color: #4a6500;
    color:  #efbe61;
}
`
export const Options = styled.div`
width: 90%;
color: darkgreen;
text-align: center;
`

export const Statistic = styled.div`
display: flex;
width: 90%;
margin: 30px auto;
padding: 10px;
`
export const Title = styled.h2`
color:#4a6500 ;
font-size: 35px;
`