//---------- CSS ----------
import "./home.scss";

//---------- ASSETS ----------
import iconChat from '../../assets/img/icon-chat.png'
import iconMoney from '../../assets/img/icon-money.png'
import iconSecurity from '../../assets/img/icon-security.png'


function Home() {
   return (
      <main>
         {/* Banner */}
         <section className="hero"> 
            <article className="hero__content">
               <h2 className="hero__content-subtitle">
                  No fees. <br />
                  No minimum deposit. <br />
                  High interest rates.
               </h2>
               <p className="hero__content-text">Open a savings account with Argent Bank today!</p>
            </article>
         </section>
         {/* Features */}
         <section className="features">
            <div className="features__item">
               <img src={iconChat} alt="Chat Icon" className="features__icon" />
               <h2 className="features__item-title">You are our #1 priority</h2>
               <p className="features__item-text">Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
            </div>
            <div className="features__item">
               <img src={iconMoney} alt="Money Icon" className="features__icon"/>
               <h2 className="features__item-title">More savings means higher rates</h2>
               <p className="features__item-text">The more you save with us, the higher your interest rate will be!</p>
            </div>
            <div className="features__item">
               <img src={iconSecurity} alt="Security Icon" className="features__icon"/>
               <h2 className="features__item-title">Security you can trust</h2>
               <p className="features__item-text">We use top of the line encryption to make sure your data and money is always safe.
               </p>
            </div>
         </section>
      </main>
   )
 }
 
export default Home