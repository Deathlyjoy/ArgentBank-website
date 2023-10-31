//---------- COMPONENTS ----------
import Features from "../../components/Features/Features";

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
            <Features
               img={iconChat}
               title="You are our #1 priority"
               desc="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <Features
               img={iconMoney}
               title="More savings means higher rates"
               desc="The more you save with us, the higher your interest rate will be!"
            />
            <Features
               img={iconSecurity}
               title="Security you can trust"
               desc="We use top of the line encryption to make sure your data and money is always safe."
            />
         </section>
      </main>
   )
 }
 
export default Home