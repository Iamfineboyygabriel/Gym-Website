import React from "react";
import Header from "../../components/Header";
import HeavyImage from '../../images/header_bg_1.jpg';
import storyImage from '../../images/about1.jpg'
import visionImage from '../../images/about2.jpg'
import missionImage from '../../images/about3.jpg'
import "./about.css";

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeavyImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem iusto laborum perferendis eos praesentium.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
      <div className="about__section-image">
            <img src={storyImage} alt="Our Vision p" />
          </div>
       
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ad veritatis neque fugiat incidunt, cupiditate recusandae
            laboriosam sapiente, officiis totam placeat tempora magni ab aut accusantium!
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor molestias 
            possimus perferendis dignissimos deleniti, sed ut iusto ipsa alias?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa nemo beatae in deleniti eligendi.
            </p>
        </div>
      </div>
    </section>



      <section className="about__Vision">
        <div className="container about__Vision-container">
         <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ad veritatis neque fugiat incidunt, cupiditate recusandae
              laboriosam sapiente, officiis totam placeat tempora magni ab aut accusantium!
            </p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor molestias 
              possimus perferendis dignissimos deleniti, sed ut iusto ipsa alias?
              </p>
            </div>
            <div className="about__section-image">
            <img src={visionImage} alt="Our Story p" />
          </div>
        </div>
      </section>


      
    <section className="about__mission">
      <div className="container about__Vision-container">
        <div className="about__section-image">
          <img src={missionImage} alt="Our Mision p" />
        </div>

        <div className="about__section-content">
          <h1>Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ad veritatis neque fugiat incidunt, cupiditate recusandae
            laboriosam sapiente, officiis totam placeat tempora magni ab aut accusantium!
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor molestias 
            possimus perferendis dignissimos deleniti, sed ut iusto ipsa alias?
            </p>
          </div>
    </div>
    </section>
    </>
  );
};

export default About;
