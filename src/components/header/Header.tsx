import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './Header.styled';

const GameItem = () => {
  return (
    <HeaderWrapper>
      <div className="link">
        <Link to="/contact">CONTACT</Link>
      </div>
      <div className="link">
        <Link to="/">VIDEO GAMES</Link>
      </div>
    </HeaderWrapper>
  )
}


export default GameItem;