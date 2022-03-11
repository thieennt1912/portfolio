import styled from 'styled-components';
import FooterCol from './FooterCol';

const FooterStyle = styled.div`
  background-color: #1E1E1E;
  padding: 5rem 5%;
  .container {
    display: flex;
    gap: 3rem;
    text-align: left;
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
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  .footer__col1__text {
    font-size: 1.1rem;
    line-height: 1.8;
    text-align: justify;
    padding-top: 12px;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 2rem;
      }
    }

    .footer__col1__title {
      text-align: center;
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
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Thien Nguyen</h1>
          <p className="footer__col1__text">
            I am looking for an internship in the position of Front-end Developer.
            I love to design and make new web experiences for the people.
          </p>
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
                title: '0925 382 104',
                path: 'tel:0925 382 104',
              },
              {
                title: 'thieennt@gmail.com',
                path: 'mailto:thieennt@gmail.com',
              },
              {
                title: 'Linh Chieu, Thu Duc, Ho Chi Minh City',
                path: 'https://www.google.com/maps/place/37A+%C4%90%C6%B0%E1%BB%9Dng+s%E1%BB%91+17,+Linh+Chi%E1%BB%83u,+Th%E1%BB%A7+%C4%90%E1%BB%A9c,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8556224,106.7581618,17z/data=!4m5!3m4!1s0x317527999b17d121:0x67226e6920ac278!8m2!3d10.8558015!4d106.7612973',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/thanh.thien.12576049',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/thien-nguyen-984252212',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/thanhthien_19',
              },
            ]}
          />
        </div>
      </div>
    </FooterStyle>
  );
}