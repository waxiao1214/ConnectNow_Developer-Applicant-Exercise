import React from 'react';
import type { IGameCard } from '../../interface/types';
import { GameItemWrapper } from './GameItem.Styled';

const GameItem = (props:IGameCard) => {
  return (
    <GameItemWrapper>
      <div className="item-img">
      </div>
      <div className="item-body">
        <p className="item-name">{props.name}</p>
        <p>{props.first_release_date.toString()}</p>
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