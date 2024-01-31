import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
  return (
    
 <Container> 
 <div>
  <img src='/images/dice-gif.gif' />
  </div>
 <div className="content">
  <h1>Dice Game</h1>
  <Button onClick={toggle}>Play Now</Button>

 </div>
 </Container>
    
  )
}

export default StartGame;

const Container =styled.div`
max-width:1100px;
height: 100vh;
display: flex;
margin: 0 auto;
align-items: center;
gap:10rem;
.content{

  h1{
    font-size: 5em;
    //white-space: nowrap;

  }
}
`;

