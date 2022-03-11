import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';

const ItemStyles = styled.div`
  padding: 1.3rem;
  background-color: #1E1E1E;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  
  .icon {
    color: #fff;
    background-color: #363636;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    // width: 1.2rem;
    font-size: 1.8rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>

      <div className="icon">{icon}</div>
      <div className="info">
        <p>{text}</p>
      </div>

    </ItemStyles>
  );
}