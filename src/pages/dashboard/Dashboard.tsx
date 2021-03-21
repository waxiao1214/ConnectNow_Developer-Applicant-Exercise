import React, { useEffect, useState } from 'react'
import { objSort } from '../../utils/function';
import { 
  DashboardWrapper,
  FilterWrapper,
  ContentWrapper
 } from './Dashboard.Styled';
import Filter from '../../components/filter';
import type { IFilter, IGameCard } from '../../interface/types';
import GameItem from '../../components/content/GameItem';
import Axios from 'axios';

let Store:any = []
let initFilter = { name: '', score: 0, sort: 'Release Date' }

const Dashbaord = () => {
  const [items, setItems] = useState<IGameCard[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [filterObj, setFilterObj] = useState<IFilter>()

  useEffect(() => {
    Axios.get('https://public.connectnow.org.uk/applicant-test')
      .then((res:any):void => {
        setLoading(false)
        Store = res.data
        setItems(res.data)
        setFilterObj(initFilter)
      })
      .catch((err:any) => {
      })
  }, [])

  useEffect(() => {
    if(filterObj) {
      let filteredItems = []
      filteredItems = Store.filter((item:any) => {
        let pass = true
        if(item.name.toUpperCase().indexOf(filterObj.name.toUpperCase()) < 0)
          pass = false
        if(parseInt(item.rating) < Number(filterObj.score))
          pass = false
        return pass
      })

      switch(filterObj.sort) {
        case "Release Date":
          setItems(objSort(filteredItems, "first_release_date", true))
          break;
        case "Name":
          setItems(objSort(filteredItems, "name", false))
          break;
        case "Score":
          setItems(objSort(filteredItems, "rating", true))
          break;
        default:
          setItems(objSort(filteredItems, "first_release_date", true))
          break;
      }
      setItems(filteredItems)
    }
  }, [filterObj])
  
  return (
      <DashboardWrapper>
        <FilterWrapper>
          <Filter getFilterObj={(Obj:IFilter) => setFilterObj(Obj)}/>
        </FilterWrapper>
        <ContentWrapper>
          {!loading ?
            items.map((item:IGameCard, index:number) => 
              <GameItem
                key={index}
                name={item.name} 
                first_release_date={new Date(item.first_release_date)} 
                id={item.id} 
                summary={item.summary} 
                rating={item.rating}
              /> 
            ) :
            <p>Loading...</p>
          }
        </ContentWrapper>
      </DashboardWrapper>
  )
}

export default Dashbaord