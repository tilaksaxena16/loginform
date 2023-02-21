import React from 'react';
import './Loginform.css';
import { Heading } from './Signin component/Heading';
import { Email } from './Signin component/Email';
import { Input } from './Signin component/Input';
import { Forgetpassword } from './Signin component/Forgetpassword';
import { Signinbutton } from './Signin component/Signinbutton';
import { Footer } from './Signin component/Footer';

const Loginform = () => {
  

  return (
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
  )
}

export {Loginform}

