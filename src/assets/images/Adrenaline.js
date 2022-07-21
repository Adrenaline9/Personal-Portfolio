import React from 'react';
import styled from 'styled-components';

const AdrenalineStyles = styled.div`
  .img_text {
    font-size: 4rem;
    font-family: cursive;
  }
`;

export default function Adrenaline() {
  return (
    <AdrenalineStyles>
     <div className="img_text">
       <p>Adrenaline</p>       
       <p>Nine</p>

     </div>
    </AdrenalineStyles>
  )
}