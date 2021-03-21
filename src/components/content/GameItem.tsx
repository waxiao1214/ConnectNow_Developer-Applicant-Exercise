import React from 'react';
import type { IGameCard } from '../../interface/types';
import { GameItemWrapper } from './GameItem.Styled';

const GameItem = (props:IGameCard) => {
  const releaseDate = new Date(props.first_release_date);
  let date = releaseDate.getDate() > 9 ? releaseDate.getDate() : '0' + releaseDate.getDate();
  let month = releaseDate.getMonth() > 8 ? releaseDate.getMonth() : '0' + releaseDate.getMonth();  
  return (
    <GameItemWrapper>
      <div className="item-img">
      </div>
      <div className="item-body">
        <p className="item-name">{props.name}</p>
        <p>Release Date: {`${date}/${month}/${releaseDate.getFullYear()}`}</p>
        <p className="item-summary">{props.summary}</p>
      </div>
      <div className="item-rating">
        <div>
          {Math.floor(props.rating)}
        </div>
      </div>
    </GameItemWrapper>
  )
}


export default GameItem;