import React from 'react';
import { ContactWrapper } from './Contact.Styled';
import { contactDescription } from '../../static/constant';
import Input from '../../components/Elements/Input';
import TextArea from '../../components/Elements/TextArea';
const Contact = () => {
  return (
    <ContactWrapper>
      <div>
        <p className="title">GET IN TOUCH</p>
        <p className="description">{contactDescription}</p>
      </div>
      <div className="contact-form">
        <div className="form-control">
          <p className="">Contact Form</p>
        </div>
        <div className="form-group">
          <div className="form-control">
            <Input label="Name"/>
          </div>
          <div className="form-control">
            <Input label="Email Address"/>
          </div>
        </div>
        <div className="form-group">
          <div className="form-control">
            <TextArea label="Message"/>
          </div>
        </div>
        <div className="form-group">
          <div className="form-control send-button">
            <button>Send</button>
          </div>
        </div>
      </div>
    </ContactWrapper>
  )
}

export default Contact