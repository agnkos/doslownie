import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  gap: .5em;
  margin-bottom: .5em;

div:nth-child(2) {
    animation-delay: 0.2s;
  }
  
div:nth-child(3) {
    animation-delay: 0.4s;
  }
  
 div:nth-child(4) {
    animation-delay: 0.6s;
  }
  
 div:nth-child(5) {
    animation-delay: 0.8s;
  }


`

export default StyledRow;