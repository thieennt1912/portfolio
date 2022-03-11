import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-size: 1.3rem;
    
  }
  h2 {
    font-size: 3rem;
    margin: 0;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 0.9rem;
    }
    h2 {
      font-size: 1.8rem;
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
