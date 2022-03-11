import styled from 'styled-components';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 2rem;
  .title {
    font-size: 1.5rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 12rem;
  }
  .item {
    background-color: #1E1E1E;
    padding: 0 1.2rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;
    .items {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    // gap: 1rem;
    .items {
      position: initial;
      display: flex;
      flex-wrap: wrap;
      // gap: 0.5rem;
    }
    .title {
      font-size: 1.3rem;
    }
  }
`;

export default function AboutInfoItem({
  title = '',
  items = [],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
