import React from 'react';
import Footer from '../components/Footer';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { render } from 'react-dom';

const ContactPage = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  dirty
}) => (
  <div>
    <div className="contact-container">
      <Form className="contact-form">
        <h1 className="contact-title">Contact Me!</h1>
        <div className="input-field">
          <Field className={errors.email && touched.email ? 'input error' : 'input' } 
            type="email" 
            name="email" 
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur} 
          />
          { errors.email && <p className="error">{ errors.email }</p>}
        </div>
        <div className="input-field">
          <Field className={errors.phone && touched.phone ? 'input error' : 'input' } 
            type="text" 
            name="phone" 
            placeholder="Phone Number"
            onChange={handleChange}
            onBlur={handleBlur} 
          />
          { errors.phone && <p className="error">{ errors.phone }</p>}
        </div>
        <div className="input-field">
          <Field className={errors.name && touched.name ? 'input error' : 'input' } 
            type="text" 
            name="name" 
            placeholder="Name"
            onChange={handleChange}
            onBlur={handleBlur}  
          />
          { errors.name && <p className="error">{ errors.name }</p>}
        </div>
        <div className="input-field">
          <Field className={errors.message && touched.message ? 'input error' : 'input' } 
            type="text" 
            name="message" 
            placeholder="Message" 
            onChange={handleChange}
            onBlur={handleBlur} 
          />
          { errors.message && <p className="error">{ errors.message }</p>}
        </div>
        <div className="input-field">
          <button className="big-button" type="submit" disabled={ !dirty || Object.keys(errors).length > 0 }>Submit</button>
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
    <Footer />
  </div>
);

const ContactFormik = withFormik({
  mapPropsToValues({ email, phone, name, message }) {
    return {
      email: email || '',
      phone: phone || '',
      name: name || '',
      message: message || '',
    }
  },
  handleSubmit(values) {
    console.log(values);
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid Email Address!').required('Email is Required!'),
    phone: Yup.number('Invalid Phone Number!').min(10).required('Phone Number is Required!'),
    name: Yup.string('Invalid Name!').required('Your Name is Required!'),
    message: Yup.string('Invalid Message!').required('Please Enter A Message!')
  }),
})(ContactPage);

export default ContactFormik;


