// import './Button.scss';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button {
        text-decoration: none;
        font-size: 1rem;
        background-color: ${(props) =>
        props.outline ? 'transperant' : '#BCB4B4'};
        padding: 0.6em 1.2em;
        border: 2px solid #BCB4B4;
        border-radius: 8px;
        display: inline-block;
        color: ${(props) => (props.outline ? '#BCB4B4' : 'black')};
    }
    @media only screen and (max-width: 768px) {
        .button {
            font-size: 0.9rem;
        }
    }
`;

export default function Button({
    btnText = '',
    btnLink = '',
    outline = false,
}) {
    return (
        <ButtonStyle outline={outline} className="button-wrapper">
            <Link className="button" to={btnLink}>
                {btnText}
            </Link>
        </ButtonStyle>
    );
}
