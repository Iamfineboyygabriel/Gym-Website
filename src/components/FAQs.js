import SectionHead from "./SectionHead"
import { BsQuestionLg } from "react-icons/bs"
import { faqs } from "../data"
import FAQ from "./FAQ"

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
      <SectionHead icon={<BsQuestionLg/>} title='FAQs'/>
      <div className="faqs__wrapper">
        {
          faqs.map(({id, question, answer}) =>{
            return <FAQ key={id} question={question} answer={answer}/>
          })
        }
      </div>
      </div>
 </section>
  )
}

export default FAQs