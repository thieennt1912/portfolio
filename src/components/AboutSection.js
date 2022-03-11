
import styled from 'styled-components';
import Button from './Button';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/img/3.jpg';

const AboutSectionStyles = styled.div`
  padding-top: 10rem;
  .about-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .aboutSection__left {
    width: 500px;
    p{
        text-align: left;
        line-height: 2;
        text-align: justify;
        font-size: 1.1rem;
    }
  }
  .aboutSection__right {
    // flex: 1;
    width: 400px;
    
    .aboutImg {
      width: 400px;
      height: auto;
      border: 2px solid #363636;
      border-radius: 10px;
    }
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .about-container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left {
      width: 100%;
    }
    .aboutSection__right {
      width: 70%;
      padding-top: 3rem;
      .aboutImg {
        width: 100%;
        margin-top: 3rem;
      }
    }
    .section-title {
      text-align: center;
      p {
        text-align: center;
      }
    }
    .aboutSection__buttons {
      display: flex;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 768px) {
    .about-container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left {
      width: 100%;
      p {
        font-size: 0.9rem;
      }
    }
    .aboutSection__right {
      width: 100%;
      .aboutImg {
        width: 100%;
        margin-top: 3rem;
      }
    }
    .section-title {
      text-align: center;
      p {
        text-align: center;
        font-size: 0.9rem;
      }
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
        width: 90%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="about-container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <p>
            I am currently a final year student, majoring in E-commerce in the
            Faculty of Management Information Systems. I love website design and
            always try to show unique perspectives through my designs. I am
            looking for an internship in a Front-end position to gain more
            experience for the future.
          </p>
          <div className="aboutSection__buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
