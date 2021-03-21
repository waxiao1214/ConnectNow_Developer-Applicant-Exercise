import styled from 'styled-components';

const FilterContent = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  .title {
    padding-top: 10px;
    font-size: 20px
  }
  .form-control {
    margin-top: 30px;
  }
  .button {
    margin-top: 80px;
    text-align: right;
  }
  button {
    width: 100%;
  }
  /* tablet */
  @media screen and (min-width: 640px) {
    .form-group {
      display: flex;
      justify-content: space-between;
    }
    .form-control {
      width: 100%;
      margin-right: 20px;
    }
    button, .button {
      width: 100px;
      margin-right: 0px;
      margin-top: 27px;
    }
  }
  /* desktop */
  @media screen and (min-width: 1280px) {
    .form-group {
      display: block;
    }
    .button {
      display: flex;
      margin-top: 60px;
      width: 100%;
    }
    button {
      margin-left: auto;
    }
  }

`

export { FilterContent }