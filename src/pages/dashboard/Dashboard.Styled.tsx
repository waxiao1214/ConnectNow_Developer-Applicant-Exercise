import styled from 'styled-components';

const DashboardWrapper = styled.div`
  width: 100%;
  display: flex;
  /* Tablet */
  @media screen and (min-width: 640px) {

  }
  /* desktop */
  @media screen and (max-width: 1280px) {
    display: block;
  }
`;

const FilterWrapper = styled.div`
    /* mobile */
    display: block;
    margin-right: 10px;
    margin-left: 10px;
    /* Tablet */
    @media screen and (min-width: 640px) {

    }
    /* desktop */
    @media screen and (min-width: 1280px) {
      min-width: 300px;
      margin-right: 30px;
    }
`;

const ContentWrapper = styled.div`
  /* mobile */
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  .loading {
    width: 30px;
    height: 30px;
    margin: auto;
  }
  .loading-wrap {
    text-align: center;
  }
  /* desktop */
  @media screen and (min-width: 1280px) {
    width: 100%;
    margin-top: 0px;
  }

`

export { DashboardWrapper, FilterWrapper, ContentWrapper} ;