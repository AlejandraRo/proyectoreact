import React from 'react'
import { useFetchData } from './hooks/useFetchData'

export const UserList = ({endPoint}) => {
   

    const {data,isLoading}=useFetchData(endPoint)
  return (
   <>  
    <ul>
        {isLoading ? <p>Cargando...</p>
        :endPoint=='users'
        ?data.map(item => <li key={item.id}>Nombre:{item.name}<br/>Email:{item.email}</li>)
        :data.map(item => <li key={item.id}>Nombre comment:{item.name}<br/>Body comment:{item.body}</li>)}

    </ul>
   </>
  )
}
