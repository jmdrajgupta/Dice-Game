import styled from "styled-components"
const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
    <h1>{score}</h1>
    <p>Total Score</p>

</ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer=styled.div`
max-width: 200px;
text-align: center;
color: white;
background:black;
border-radius:5px;
box-shadow: 8px 8px 10px grey;
h1{
    font-size:4em;
}
p{
    font-size: 2em;
    font-weight: 500;
}


`;
