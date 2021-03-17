import React, { useEffect, useState } from 'react'
import { 
  DashboardWrapper,
  FilterWrapper,
  ContentWrapper
 } from './Dashboard.Styled';
import Filter from '../../components/filter';
import type { IGameCard } from '../../interface/types';
import GameItem from '../../components/content/GameItem';
import Axios from 'axios';

let Store = []

const Dashbaord = () => {
  const [items, setItems] = useState<IGameCard[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    Axios.get('https://public.connectnow.org.uk/applicant-test')
      .then((res:any):void => {
        setLoading(false)
        Store = res.data
        setItems(res.data)
      })
      .catch((err:any) => {
        console.log(err)
      })
  }, [])
  return (
      <DashboardWrapper>
        <FilterWrapper>
          <Filter/>
        </FilterWrapper>
        <ContentWrapper>
          {!loading && 
            items.map((item:IGameCard, index:number) => 
              <GameItem
                key={index}
                name={item.name} 
                first_release_date={new Date(item.first_release_date)} 
                id={item.id} 
                summary={item.summary} 
                rating={item.rating}
              /> 
            )
          }
        </ContentWrapper>
      </DashboardWrapper>
  )
}

export default Dashbaord