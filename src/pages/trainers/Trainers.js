import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_5.jpg';
import { trainers } from '../../data';
import { BsInstagram } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import Trainer from '../../components/Trainer';
import "./trainers.css";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem id enim sint porro dicta nobis alias sed 
        illum eveniet! Optio.
      </Header>

      <section className='trainers'>
        <div className='container trainers__container'>
          {trainers.map(({ id, image, name, job, socials }) => (
            <Trainer key={id} image={image} name={name} job={job} socials={socials.map((link, index) => (
              { icon: index === 0 ? <BsInstagram /> : index === 1 ? <BsFacebook /> : index === 2 ? <RxCross2 /> : <AiFillLinkedin />, link }
            ))} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Trainers;
