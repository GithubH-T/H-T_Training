import './App.css';
import { useState, createContext, useContext } from 'react';
import ExampleForm from './Uncontrolled';
import ContactUsForm from './FormComponent';

function App() {
  return (
    <>
      <ExampleForm></ExampleForm>
      <ContactUsForm></ContactUsForm>
    </>
  )
}
export default App;
