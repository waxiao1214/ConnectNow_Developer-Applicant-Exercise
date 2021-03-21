import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin-bottom: 30px;
  margin-left: 20px;
  padding-top: 20px;
  display: block;
  a {
    text-decoration: none;
    color: white;
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
  }
  .link {
    padding: 10px;
  }
  a:hover {
    opacity: 0.8;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    .link {
      padding: 20px;
    }
  }
`

export { HeaderWrapper }