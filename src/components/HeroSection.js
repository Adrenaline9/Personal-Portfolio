import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import './style.css';

const HeroStyles = styled.div`
width: 80%;
margin: auto;
height: 100vh;

  .hero {
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 30px;
      display: inline-block;
      margin-bottom: 20px;
    }
  }
  .hero__img {
    width: 100%;
    height: 30vh;
    border: 1px solid var(--black);
    font-size: 13vw;
    display: inline-block;
    margin: auto;
    font-family: BlinkMacSystemFont;

    .img_text {
    margin: 7vh auto;
    }
    .adr {

    }
    .nine {

    }
  }
  }
`;

const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Hi, Good Morning!"
} else if (time < 16) {
  greeting = "Hi, Good Afternoon!"
} else if (time < 21) {
  greeting = "Hello, Good Evening!"
} else {
  greeting = "Hello, Good Night!"
}

const Greet = () => greeting;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1>
            <span className="hero__name">
              <Greet /> </span>
          </h1>
          <div className="hero__img">
            <div className="img_text">
            <p className="adr">Adrenaline</p>
            <p className="nine">Nine</p>
            </div>
          </div>
          <div className="hero__info">
            <PText>
              I am working as a freelance web designer and developer for 4
              years. I love to design and make new web experiences for the
              people.
            </PText>
            <Button btnText="see my works" btnLink="/projects" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
