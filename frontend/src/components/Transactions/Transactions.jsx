import './transactions.scss'


function Transactions() {

   return (
      <>
         <section className="account">
         <div className="account-content-wrapper">
            <h2 className="account-title">Argent Bank Checking (x8349)</h2>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
         </div>

         <div className="account-button-wrapper">
            <button className="transaction-button">View transactions</button>
         </div>
         </section>

         <section className="account">
         <div className="account-content-wrapper">
            <h2 className="account-title">Argent Bank Savings (x6712)</h2>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
         </div>

         <div className="account-button-wrapper">
            <button className="transaction-button">View transactions</button>
         </div>
         </section>

         <section className="account">
         <div className="account-content-wrapper">
            <h2 className="account-title">Argent Bank Credit Card (x8349)</h2>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
         </div>

         <div className="account-button-wrapper">
            <button className="transaction-button">View transactions</button>
         </div>
         </section>
      </>
   )
 }
 
export default Transactions