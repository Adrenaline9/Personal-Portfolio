import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  margin-top: 10rem;
  padding-top: 10rem;
  background-color: var(--black);
  color: var(--lavender);
  width: 100%;

  .containers {    display: flex;
}
  
  .container_wrapper {
    display: flex;
    gap: 3rem;    
    width: 90%;    
    margin: auto;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    color: var(--black);
    background-color: var(--lavender);
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {    
      width: 80%;
      margin: auto;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="containers">
        <div className="container_wrapper">
          <div className="footer__col1">
            <h1 className="footer__col1__title">Ayan Khan</h1>
            <PText>
              A freelance web designer and developer from Chittagong,
              Bangladesh. I always make websites that have unique designs and
              also has a good performance rate.
            </PText>
          </div>
          <div className="footer__col2">
            <FooterCol
              heading="Important Links"
              links={[
                {
                  title: 'Home',
                  path: '/',
                  type: 'Link',
                },
                {
                  type: 'Link',
                  title: 'About',
                  path: '/about',
                },
                {
                  type: 'Link',
                  title: 'Projects',
                  path: '/projects',
                },
                {
                  type: 'Link',
                  title: 'Contact',
                  path: '/contact',
                },
              ]}
            />
          </div>
          <div className="footer__col3">
            <FooterCol
              heading="Contact Info"
              links={[
                {
                  title: '+88012312',
                  path: 'tel:+88012312',
                },
                {
                  title: 'webcifar@gmail.com',
                  path: 'mailto:webcifar@gmail.com',
                },
                {
                  title: 'GEC Circle, Chittagong, Bangladesh',
                  path: 'http://google.com/maps',
                },
              ]}
            />
          </div>
          <div className="footer__col4">
            <FooterCol
              heading="social Links"
              links={[
                {
                  title: 'Facebook',
                  path: 'http://facebook.com',
                },
                {
                  title: 'Twitter',
                  path: 'http://twitter.com',
                },
                {
                  title: 'Instagram',
                  path: 'http://instagram.com',
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="containers">
          <PText>
            © 2021 - Ayan Khan | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="http://webcifar.com">
              web cifar
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
