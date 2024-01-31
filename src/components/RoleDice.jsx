
import styled from "styled-components"


const RoleDice = ({roleDice,currentDice}) => {



  return (
    <DiceContainer>
      <div className='dice'
      onClick={roleDice}>
        <img src={`/images/${currentDice}.png`} alt='Dice 1'/>
      </div>
      <p>Click On Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer=styled.div`

display: flex;
flex-direction: column;
align-items: center;
img{
  height: 50px;
  width: 50px;
}
p{
  font-size: 1em;
}
.dice{
  cursor: pointer;
}

`;
