import styled from 'styled-components';
import Button from './Button';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: #1E1E1E;
    border-radius: 12px;
    padding: 2rem 0rem;
    text-align: center;
    font-size: 1.2rem;
  }
  .contactBanner__heading {
    font-size: 1.6rem;
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__wrapper {
      p {
        font-size: 0.9rem;
        padding: 0 1rem;
      }
      .contactBanner__heading {
        font-size: 1.6rem;
      }
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <p>If you are looking for candidates for this position</p>
          <h4 className="contactBanner__heading">Let me help you</h4>
          <Button btnText="Contact Me" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
