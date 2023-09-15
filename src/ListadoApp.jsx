import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"
const Items=({nombre,visto})=>{
    return (
        <li>{nombre}
        {/*sirve para if/else {visto ? '❤': '🤷‍♂️'} */}
         {/*sirve solo para el if, si la condición no se cumple sale del flujo {visto && '❤'} */}
         {visto && '❤'}
        </li>
    )
}


export const ListadoApp=()=>{
    const addTask=()=>{
        SetArreglo([...arreglo,{nombre:'nuevo',visto:false}])
    }
    let listadoSecciones=[
        {nombre:"Instalación", visto:true},
        {nombre:"Vite", visto:true},
        {nombre:"Componente", visto:true},
        {nombre:"Variables", visto:true},
        {nombre:"Props", visto:true},
        {nombre:"Eventos", visto:true},
        {nombre:"useState", visto:true},
        {nombre:"Redux", visto:false},
        {nombre:"customHooks", visto:false},

    ]
    const [arreglo,SetArreglo] = useState(listadoSecciones)
   
    return (
        <>
        <h1>Listado de temas</h1>
        <ol>
            {arreglo.map(item=><Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}            
        </ol>
        
        <AgregarTarea agregarTarea={SetArreglo}></AgregarTarea>
        {/* <button onClick={()=>addTask()}>Agregar Tarea</button> */}
        </>
    )
}