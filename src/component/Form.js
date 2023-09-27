import React from 'react';

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <h1>Contact Form</h1>
      <section>
        <form action='https://formspree.io/f/mzbqqowg' method='POST'>
          <fieldset>
            <legend>
              <strong>Fill out the form below to contact me</strong>
            </legend>

            <label htmlFor='firstName'>
              <strong>Your first name</strong>
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              className='form-input'
            />

            <label htmlFor='lastName'>
              <strong>Your last name</strong>
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='(optional)'
              className='form-input'
            />

            <label htmlFor='email'>
              <strong>Email address</strong>
            </label>
            <input type='text' id='email' name='email' className='form-input' />

            <label htmlFor='reason'>
              <strong>Reason for contacting me:</strong>
            </label>
            <select id='reason' name='reason' className='form-input'>
              <option selected>Select one...</option>
              <option value='job'>Job offer</option>
              <option value='collab'>Collaboration on a project</option>
              <option value='fly'>
                I want to fly with you to see cool cities
              </option>
              <option value='other'>Other</option>
            </select>

            <label htmlFor='comments'>
              <strong>Tell me more about it:</strong>
            </label>
            <textarea
              id='comments'
              maxLength='250'
              name='comments'
              className='form-textarea'
            ></textarea>
            <p></p>

            <input
              id='send_to'
              type='hidden'
              name='send_to'
              value='xkellinx@gmail.com'
            />
            <button disabled className='subButton' type='submit' value='Send'>
              <strong>Submit</strong>
            </button>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
