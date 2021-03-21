import styled from 'styled-components';

const ContactWrapper = styled.div`
    /* mobile */
    padding: 0 20px;
    margin: auto;
    max-width: 100%;
    .title {
      font-size: 24px;
      font-weight: 600;
    }
    .description {
      margin-top: 20px;
    }
    .form-group {
      display: block;
    }
    .form-control {
      margin-top: 25px;
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
    }
    .contact-form {
      margin-top: 30px;
      background-color: #0e1a2b;
      font-weight: bold;
      padding: 20px 0;
      padding-left: 10px;
      padding-right: 30px;
    }
    .send-button {
      margin-left: auto;
      width: fit-content;
    }
    /* Tablet */
    @media screen and (min-width: 640px) {
      max-width: 640px;
      .form-group {
        display: flex;
      }
      .contact-form {
        padding: 20px;
      }
    }
    /* desktop */
    @media screen and (min-width: 1280px) {

    }
`;

export { ContactWrapper } ;