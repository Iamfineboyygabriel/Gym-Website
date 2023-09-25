import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import { plans } from '../../data'
import "./plans.css"

const Plans = () => {
  return (
    <>
    <Header title="Membership plans" image={HeaderImage}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Reiciendis deleniti, ab nihil et unde ipsam!
    </Header>

    <section className='plans'>
    <div className='container plans__container'>
      {
        plans.map(({id, name, desc, price, features}) => {
          return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1><h2>/mo</h2>
              <h4>Features</h4>
              {
                features.map(({feature, available, index}) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>
                    Feature
                    </p>
                })
              }

              <button className='btn-lg'>Choose plan</button>  {/**IF YOU WANT TO MAKE THIS BUTTON GO SOMEWHERE . IMPORT LINK AND USE THE LINK TAG */}
          </Card>
        })
      }
    </div>
    </section>
    </>
  )
}

export default Plans