import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';

// const {useState,useEffect} = React;

function Parent() {
  const [message,setMessage] = useState("");
  const handleRequest = (request) => {
      if (request.includes("car")) {
          setMessage("No");
      }
  };

  return (
      <div data-testid="parent">
          <h1>Parent</h1>
          <p data-testid="message">{message}</p>
          <Child onRequest={handleRequest} />
      </div>
  );
}


function Child(props) {
  const handleClick = () => {
      props.onRequest("Can I have the car?");
  };
  return (
      <div data-testid='child'>
          <h1>Child</h1>
          <button data-testid="childBtn" onClick={handleClick}>Ask for the Car</button>
      </div>
  );
}
export default Parent;