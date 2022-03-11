import styled from 'styled-components';
import AboutImg from '../assets/img/1.JPG';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import ProjectSection from '../components/ProjectSection';

const AboutPageStyles = styled.div` 
  padding-top: 5rem;
  text-align: left;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    span {
      background-color: #1E1E1E;
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    text-align: justify;
    .para {
      max-width: 100%;
    }
    p{
      line-height: 1.8;
    }
  }
  .right {
    .img {
      border: 2px solid #BCB4B4;
      width: 350px;
      border-radius: 15px;
    }
  }
  .about__info__items {
    margin-top: 10rem;
  }
  .about__info__item {
    margin-bottom: 8rem;
  }
  .about__info__heading {
    font-size: 1.8rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 950px) {
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-top: 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.4rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 1.6rem;
    }
    .right {
      .img {
        width: 100%;
      }
    }
  }
`;

export default function About() {
  return (
    <div className="main">
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Thien Nguyen</span>
              </p>
              {/* <h2 className="about__heading">A freelance Web developer</h2> */}
              <div className="about__info">
                <p>
                  I am currently a final year student at Banking University of Ho Chi Minh City, majoring in Electronic commerce in Management Information Systems.
                  <br /> <br />
                  With the knowledge I have learned, I am looking for an internship position in Front-end Developer to gain more experience and opportunities in the future.
                  <br />
                  <br />
                  Short-term goal:<br />
                  With the knowledge I have learned and a sense of responsibility at work, I hope to be able to contribute a small part to the development of the company's products.
                  <br />
                  <br />
                  Long-term goals:<br />
                  Applying programming skills and understanding of Front-end Website, in the future may study more about Back-end Website to become a professional Web Developer.
                </p>
              </div>
              {/* <Button btnText="Download CV" btnLink="#" /> */}
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" className="img" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="University"
                items={['2018 - Now', 'HoChiMinh University of Banking']}
              />
              <AboutInfoItem
                title="Faculty"
                items={['Management Information Systems']}
              />
              <AboutInfoItem
                title="Majors"
                items={['Electronic Commerce']}
              />
              <AboutInfoItem
                title="GPA"
                items={['8.13/10']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Bootstrap']}
              />
              <AboutInfoItem
                title="Others"
                items={['Wordpress', 'Photoshop']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Foreign Language</h1>

              <AboutInfoItem
                title="English"
                items={['Listen and read basic English documents', 'Basic communication', 'TOEIC Certificate 650 (April 2021)']}
              />
            </div>
            <ProjectSection />
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </div>
  );
}

