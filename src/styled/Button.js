import styled from "styled-components";




export  const Button=styled.button`
color:white;
background: black;
padding:10px 20px;
min-width: 220px;
border-radius:5px;
border:none;
font-size: 1.5em;
cursor: pointer;
box-shadow: 2px 8px 8px grey;


&:hover{
  background:white;
  color: black;
  border: 2px solid black;
  box-shadow: 10px 10px 5px grey;
  transition: 0.2s background ease-in;
}



`;





export  const OutlineButton=styled(Button)`

background-color: white;
border: 1px solid black;
color: black;

&:hover{
  background:black;
  color: white;
  border: 2px solid transparent;
  box-shadow: 10px 10px 5px grey;
 
}




`;