import React, { useState } from 'react';
import {Alert} from 'react-bootstrap';
import emailjs from 'emailjs-com';

const onSuccessfulSend = () => {
  return (
    <Alert variant='info' dismissible>
      <p>Thanks for reaching out! I'll be in touch!</p>
    </Alert>
  )
}

export const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
    // param1: service id from emailjs.com, 
    // param2: email template from emailjs.com, 
    // param4: user id from api keys from emailjs.com
    emailjs.sendForm('service_qly5043', 'template_xrnbmx3', e.target, 'user_TFyAyiYcRGwmYzXnSvsNZ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    onSuccessfulSend();
  }

  return (
    <div class='col text-center'>
      <p>Interested in collaborating? Email me!</p>
      <div className='container'>
        <form onSubmit={sendEmail}>
          <div className='row pt-6 mx-auto'>
            <div className='col-8 form-group mx-auto'>
              <input type='text' className='form-control' placeholder="Name" name='name' />
            </div>
            <div className='col-8 form-group mx-auto'>
              <input type='text' className='form-control' placeholder="Subject" name='subject' />
            </div>
            <div className='col-8 form-group mx-auto'>
              <textarea className='form-control' id='' cols='30' rows='8' placeholder='Your message' name='message'></textarea>
            </div><br></br>
          </div>
        <div className='col-8 pt-3 mx-auto'>
          <input type='submit' className='btn btn-info' value='Send Message'></input>
        </div>
        </form>
      </div>
    </div>
  )
}