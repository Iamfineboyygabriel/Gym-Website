import Header from "../../components/Header"
import contactImage from '../../images/header_bg_2.jpg'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BsMessenger } from 'react-icons/bs'
import { FaSquareWhatsapp }from 'react-icons/fa6'

import "./contact.css"

const Contact = () => {
  return (
   <>
    <Header title="Get In Touch" image={contactImage}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   Voluptates ex eligendi praesentium debitis quidem, ad similique officia quis et facere.
    </Header>

    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wapper">
          <a href="mailto:tundegabriel999@gmail.com" target="blank" rel="noreferrer noopener"><HiOutlineMailOpen/></a>
          <a href="https://facebook.com" target='blank' rel='noreferrerr noopener'><BsMessenger  /></a>
          <a href="https://wa.me/+2348073632834" target='blank' rel='noreferrerr noopener'>< FaSquareWhatsapp  /></a> {/**CHNANGE TO YOUR WHATSAPP NUMBER */}
        </div>
      </div>
    </section>
   </>
  )
}

export default Contact
