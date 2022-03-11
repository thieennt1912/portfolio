import styled from 'styled-components';
import ProjectImg from '../assets/img/11.jpg';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid #363636;
    
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: #1E1E1E;
    padding: 1rem;
    border-radius: 12px;

    a {
        text-decoration: none;
        color: #BCB4B4;
    }
  }
  .projectItem__title {
    font-size: 1.4rem;
    
  }
  .projectItem__desc {
    text-align: justify;
    font-size: 1.1rem;
    margin-top: 1rem;
    line-height: 1.7;
  }
  .projectItem__link {
    width: 50%;
    margin: 2rem auto;
    padding: 0.7rem;
    border-radius: 8px;
    background-color: #BCB4B4;
    text-align: center;
  }
  .projectItem__link:hover {
    cursor: pointer;
    background-color: #262626;
    border: 2px solid #BCB4B4;
    transition: 0.3s ease transform;
    a {
      text-decoration: none;
      color: #BCB4B4;
    }
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
    .projectItem__desc {
      font-size: 0.9rem;
    }

    .projectItem__link {
      width: 80%;
      margin: 2rem auto;
      a {
        font-size: 0.9rem;
      }
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link = ''
}) {
  return (
    <ProjectItemStyles>
      <a href={link} target="_blank" rel="noreferrer" className="projectItem__img">
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem__info">
          <h3 className="projectItem__title">{title}</h3>
        <p className="projectItem__desc">{desc}</p>
        <div className="projectItem__link">
          <a href={link} target="_blank" rel="noreferrer">Open Project</a>
        </div>
      </div>
    </ProjectItemStyles>
  );
}
