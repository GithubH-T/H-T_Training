import React from 'react';
import {useState} from 'react';

const [userValues, setUserValues] = useState({
    amount: '',
    interest: '',
    years: '',
  });

<input
  type='text'
  name='amount'
  placeholder='Loan amount'
  value={userValues.amount}
  onChange={handleInputChange}
/>

const handleInputChange = (event) =>
   setUserValues({ ...userValues, [event.target.name]: event.target.value });


<input type='submit'/>

<form onSubmit={handleSubmitValues}></form>

const handleSubmitValues = (e) => {
   e.preventDefault();
   calculateResults(userValues);
 };

 const [results, setResults] = useState({
   monthlyPayment: '',
   totalPayment: '',
   totalInterest: '',
   isResult: false,
 });

 const calculateResults = ({ amount, interest, years }) => {
   const userAmount = Number(amount);
   const calculatedInterest = Number(interest) / 100 / 12;
   const calculatedPayments = Number(years) * 12;
   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
   const monthly = (userAmount * x * calculatedInterest) / (x - 1);

   if (isFinite(monthly)) {
     const monthlyPaymentCalculated = monthly.toFixed(2);
     const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
     const totalInterestCalculated = (monthly * calculatedPayments - userAmount).toFixed(2);

     // Set up results to the state to be displayed to the user
     setResults({
       monthlyPayment: monthlyPaymentCalculated,
       totalPayment: totalPaymentCalculated,
       totalInterest: totalInterestCalculated,
       isResult: true,
     });
   }
   return;
 };

 
const Calculator = () => {
   return (
       <div>
          <h1>Loan Calculator</h1>
       </div>
   )
}

export default Calculator;