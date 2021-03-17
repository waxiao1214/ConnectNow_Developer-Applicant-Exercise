import styled from 'styled-components';

const GameItemWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #0e1a2b;
  margin-bottom: 20px;
  height: 150px;

  .item-img {
    overflow: hidden;
    height: 100%;
    width: 200px;
    background: black;
  }
  .item-name {
    font-size: 24px;
    font-weight: bold;
  }
  .item-body {
    width: 100%;
    margin-left: 20px;
    height: 120px;
    overflow: hidden;
  }
  .item-summary {
    margin-top: 10px;
  }
  .item-rating {
    width: 150px;
    text-align: center;
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
`

export { GameItemWrapper }