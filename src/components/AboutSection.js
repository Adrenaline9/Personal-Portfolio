import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import Adrenaline from '../assets/images/Adrenaline';
import SectionTitle from './SectionTitle';
import '../style.css';

const AboutSectionStyles = styled.div`
  margin: auto;
  width: 100%;
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  }
  .para {        
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutimg_text {
    font-size: 4.5rem;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
            <SectionTitle
              subheading="Let me introduce myself"
              heading="About Me"
            />
          <PText>
            I am a freelance website designer and developer. I create
            professional websites and always try to show unique views to the
            audience through my design...
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <div className="aboutimg_text">
            <Adrenaline />
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}
