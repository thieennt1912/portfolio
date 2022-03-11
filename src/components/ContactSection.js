import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { RiFacebookCircleFill, RiLinkedinBoxFill, RiInstagramLine } from "react-icons/ri";

import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding-bottom: 10rem;

  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 4rem;
    justify-content: space-between;
    position: relative;

    a {
      text-decoration: none;
      color: #BCB4B4;
      font-size: 1rem;
    }

    a:hover {
      color: #fff;
    }
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 74%;
    background-color: #BCB4B4;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
  }

  .left {
    width: 100%;
    max-width: 500px;
  }

  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;

    h2 {
      display: none;
    }
  }

  @media only screen and (max-width: 950px) {
    .contactSection__wrapper {
      display: flex;
      justify-content: space-between;
      gap: 0;
      width: 100%;
    }
    .contactSection__wrapper::after {
      position: absolute;
      content: '';
      width: 2px;
      height: 74%;
      background-color: #BCB4B4;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%);
    }
    .left {
      flex: 0 0 45%;
      max-width: 45%;
      padding-right: 1rem;
    }

    .right {
      padding-left: 1rem;
      flex: 0 0 45%;
      max-width: 45%;

      a {
        width: 90%
       overflow: hidden;
       display: -webkit-box;
       -webkit-box-orient: vertical;
       -webkit-line-clamp: 1;
       text-overflow: ellipsis;

       .info {
         width: 90%;
         overflow: hidden;
       }
    }
  }
  
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }

    .contactSection__wrapper::after {
      display: none;
    }

    .left {
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .right {
      padding-left: 0;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

       a {
         width: 90%
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;

        .info {
          width: 90%;
          overflow: hidden;
        }
       }

       h2 {
        display: block;
        fonts-size: 1.8rem;
        margin-top: 0;
      }
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">

          <div className="left">
            <a href="tel: 0925 382 104" >
              <ContactInfoItem icon={<MdLocalPhone />} text="0925 382 104" />
            </a>
            <a href="mailto:thieennt@gmail.com" >
              <ContactInfoItem icon={<MdEmail />} text="thieennt@gmail.com" />
            </a>
            <a href="https://www.google.com/maps/place/37A+%C4%90%C6%B0%E1%BB%9Dng+s%E1%BB%91+17,+Linh+Chi%E1%BB%83u,+Th%E1%BB%A7+%C4%90%E1%BB%A9c,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8556224,106.7581618,17z/data=!4m5!3m4!1s0x317527999b17d121:0x67226e6920ac278!8m2!3d10.8558015!4d106.7612973" >
              <ContactInfoItem text="Linh Chieu, Thu Duc, Ho Chi Minh City" />
            </a>
          </div>
          <div className="right">
            <h2>Social Links</h2>
            <a href="https://www.facebook.com/thanh.thien.12576049" >
              <ContactInfoItem icon={<RiFacebookCircleFill />} text="https://www.facebook.com/" />
            </a>
            <a href="https://www.instagram.com/thanhthien_19/" >
              <ContactInfoItem icon={<RiInstagramLine />} text="https://www.instagram.com/" />
            </a>
            <a href="https://www.linkedin.com/in/thien-nguyen-984252212/" >
              <ContactInfoItem icon={<RiLinkedinBoxFill />} text="https://www.linkedin.com/" />
            </a>
          </div>
        </div>
      </div>
    </ContactSectionStyle >
  );
}
