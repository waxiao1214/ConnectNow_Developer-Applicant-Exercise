import styled from 'styled-components';

const GameItemWrapper = styled.div`
  display: block;
  position: relative;
  align-items: center;
  background: #0e1a2b;
  margin-bottom: 20px;
  height: 350px;
  
  .item-img {
    overflow: hidden;
    height: 150px;
    width: 100%;
    background: black;
  }
  .item-name {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
  }
  .item-body {
    padding: 20px;
    padding-top: 0px;
    height: 165px;
    overflow: hidden;
  }
  .item-summary {
    margin-top: 15px;
  }
  .item-rating {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .item-rating > div {
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #568de5;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: 640px) {
    display: flex;
    height: 150px;
    .item-img {
      min-width: 150px;
      max-width: 150px;
    }
    .item-rating {
      position: relative;
      margin-left: 20px;
    }
    .item-name {
      margin-top: 0px
    }
    .item-body {
      height: 108px;
      width: 100%;
    }
  }
`

export { GameItemWrapper }