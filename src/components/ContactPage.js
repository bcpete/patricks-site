import React from 'react';
import Footer from '../components/Footer';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { render } from 'react-dom';
import { mailgunApiKey, mailgunDomain } from '../../apikey/mailgunapi';
var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun(`${mailgunApiKey}`)

const ContactPage = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  dirty,
}) => (
    <div className="contact-container">
      <Form className="contact-form">
        <h1 className="contact-title">Contact Me!</h1>
        <div className="input-field">
          <Field className={ errors.email && touched.email ? 'input error' : 'input' } 
            type="email" 
            name="email" 
            placeholder="Enter Your Email"
            onChange={handleChange}
            onBlur={handleBlur} 
          />
          { errors.email && touched.email ? <p className="error">{ errors.email } </p> : '' }
        </div>
        <div className="input-field">
          <Field className={ errors.phone && touched.phone ? 'input error' : 'input' } 
            type="text" 
            name="phone" 
            placeholder="Enter Your Phone Number"
            onChange={handleChange}
            onBlur={handleBlur} 
          />
          { errors.phone && touched.phone ? <p className="error">{ errors.phone }</p> : '' }
        </div>
        <div className="input-field">
          <Field className={ touched.name && errors.name ? 'input error' : 'input' } 
            type="text" 
            name="name" 
            placeholder="Enter Your Full Name"
            onChange={handleChange}
            onBlur={handleBlur}  
          />
          { errors.name && touched.name ?  <p className="error">{ errors.name }</p> : '' }
        </div>
        <div className="input-field">
          <Field className={ errors.message && touched.message ? 'input error' : 'input' } 
            type="text" 
            name="message" 
            placeholder="Enter Your Message" 
            onChange={handleChange}
            onBlur={handleBlur} 
          />
          { errors.message && touched.message ? <p className="error">{ errors.message }</p> : '' }
        </div>
        <div className="input-field">
          <button className="big-button" 
            type="submit"
            disabled={ !dirty || Object.keys(errors).length > 0 }>Submit
          </button>
        </div>
      </Form>
        <div className="contact-info">
          <h1 className="contact-info_title">Patrick Beard</h1>
          <div className="contact-info_text-block">
            <h2> Email </h2>
            <hr />
            <p> <a href="mailto:beardpatrick80@gmail.com?Subject=Business%20Inquiry" target="_top">BeardPatrick80@gmail.com</a></p>
            <h2> Phone </h2>
            <hr />
            <p> <a href="#">(636) 375-1390</a></p>
          </div>
      </div>
    </div>
);

const ContactFormik = withFormik({
  mapPropsToValues({ email, phone, name, message }) {
    return {
      email:   email || '',
      phone:   phone || '',
      name:    name || '',
      message: message || '',
    }
  },
  handleSubmit(values, {setValues, setTouched, setErrors}, errors){
    console.log(values);
    mg.sendText('test@test.com', ['brady <bradycpeters@gmail.com>'],
    'This is the subject',
    'This is the text',
    'noreply@example.com', {},
    function(err) {
      if(err){
        console.log('Oh shit: ' + err);
      }else{
        console.log('success');
      }
    });
    // setValues(values = '');
    // setTouched(false);
    // setErrors(errors = '');
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid Email Address!').required('Email is Required!'),
    phone: Yup.number('Invalid Phone Number!').required('Phone Number is Required!'),
    name: Yup.string('Invalid Name!').required('Your Name is Required!'),
    message: Yup.string('Invalid Message!').required('Please Enter A Message!')
  }),
})(ContactPage);

export default ContactFormik;


