import HeroImg from '../assets/img/8.jpg';
import './Home.scss';
import Button from './Button';

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="container">
                <h1 className="hero__heading">
                    <span>Hello, This is portfolio of</span>
                    <span className="hero__name">Thien Nguyen</span>
                </h1>
                <div className="hero__img">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="hero__info">
                    <p>
                        I am looking for an internship in the position of Front-end Developer.
                        I love to design and make new web experiences for the people.
                    </p>
                    <Button btnText="see my works" btnLink="/projects" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;