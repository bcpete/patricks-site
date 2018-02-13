import React from 'react';
import Footer from '../components/Footer';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { render } from 'react-dom';

const ContactPage = ({
  values,
}) => (
  <div>
    <Form>
      <Field type="email" name="email" placeholder="Email" />
      <Field type="text" name="phone" placeholder="Phone Number" />
      <Field type="text" name="name" placeholder="Name" />
      <Field type="text" name="message" placeholder="Message" />
      <button type="submit">Submit</button>
    </Form>
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
  }
})(ContactPage);

export default ContactFormik;


  // <div>
  //   <div className="contact-container">
  //     <div className="contact-info">
  //       <h1>Patrick Beard</h1>
  //       <hr />
  //       <div className="contact-info_text-block">
  //         <h2> Email </h2>
  //         <hr />
  //         <p> blah@blah.blah </p>
  //         <h2> Phone </h2>
  //         <hr />
  //         <p> 555-555-5555 </p>
  //       </div>
  //     </div>
  //   </div>
  //   <Footer />
  // </div>