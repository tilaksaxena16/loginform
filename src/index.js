import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Heading } from './Heading/Heading';
import { Email } from './Email/Email';
import { Input } from './Input/Input';
import { Forgetpassword } from './Forgetpassword/Forgetpassword';
import { Signinbutton } from './Signinbutton/Signinbutton';
import { Footer } from './Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='page-container'>
      <Heading></Heading>
      <Email name="Email address"></Email>
      <Input></Input>
      <Email name="Password"></Email>
      <Input></Input>
      <div className='flex'>
        <Forgetpassword></Forgetpassword>
        <Signinbutton></Signinbutton>
      </div>
      <Footer></Footer>
    </div>
  </>
);
