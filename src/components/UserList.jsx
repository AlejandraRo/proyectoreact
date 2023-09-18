import React, { useEffect,useState } from 'react'

export const UserList = ({endPoint}) => {
    const [data,setData]=useState([])
    /*FETCH  y useEffect*/
    const fetchData=async()=>{
        try {
            const response=await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data=await response.json()
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[endPoint])
  return (
   <>
    <ul>
        {endPoint =='users' ? data.map(user => <li key={user.id}>Nombre:{user.name}<br/>Email:{user.email}</li>)
                            :data.map(user => <li key={user.id}>Nombre comment:{user.name}<br/>Body comment:{user.body}</li>)}

    </ul>
   </>
  )
}
