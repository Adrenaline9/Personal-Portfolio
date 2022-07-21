import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Times';
  }
  .par {
    font-family: 'monospace';
    margin-top: 2rem;  
    font-size: 1.8rem;
     @media only screen and (max-width: 768px) {
  font-size: 1.4rem;
      }
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <p className='par'>{desc}</p>
    </ItemStyles>
  );
}
