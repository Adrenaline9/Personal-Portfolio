import React from 'react';
import styled from 'styled-components';
import '../style.css';

const SectionTitleStyle = styled.div`
  text-align: center;
  background-color: var(--white);
  color: var(--black);
  border: 1px solid var(--crimson);
  border-radius: 10px;
  padding: 9px 0 9px 0;
  p {
    font-family: 'Courier';
    font-size: 2rem;
  }
  h2 {
    font-family: 'Times';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.1rem;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
