import React from 'react';
import Footer from '../components/Footer';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { render } from 'react-dom';

const ContactPage = ({
  values,
  errors,
  touched,
}) => (
  <div>
    <h1 className="contact-title">Contact Me!</h1>
    <div className="contact-container">
      <Form className="contact-form">
        <div>
          <Field className={errors.email && touched.email ? 'input error' : 'input' } type="email" name="email" placeholder="Email" />
          { errors.email && <p className="error">{ errors.email }</p>}
        </div>
        <div>
          <Field className={errors.phone && touched.phone ? 'input error' : 'input' } type="text" name="phone" placeholder="Phone Number" />
          { errors.phone && <p className="error">{ errors.phone }</p>}
        </div>
        <div>
          <Field className={errors.name && touched.name ? 'input error' : 'input' } type="text" name="name" placeholder="Name" />
          { errors.name && <p className="error">{ errors.name }</p>}
        </div>
        <div>
          <Field className={errors.message && touched.message ? 'input error' : 'input' } type="text" name="message" placeholder="Message" />
          { errors.message && <p className="error">{ errors.message }</p>}
        </div>
        <div>
          <button type="submit" disabled={ Object.keys(errors).length > 0 }>Submit</button>
        </div>
      </Form>
        <div className="contact-info">
          <h1>Patrick Beard</h1>
          <hr />
          <div className="contact-info_text-block">
            <h2> Email </h2>
            <hr />
            <p> blah@blah.blah </p>
            <h2> Phone </h2>
            <hr />
            <p> 555-555-5555 </p>
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
    email: Yup.string().email().required(),
    phone: Yup.number().min(10).required(),
    name: Yup.string().required(),
    message: Yup.string().required()
  }),
})(ContactPage);

export default ContactFormik;


