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
        {id:1,nombre:"Instalación", visto:true},
        {id:2,nombre:"Vite", visto:true},
        {id:3,nombre:"Componente", visto:true},
        {id:4,nombre:"Variables", visto:true},
        {id:5,nombre:"Props", visto:true},
        {id:6,nombre:"Eventos", visto:true},
        {id:7,nombre:"useState", visto:true},
        {id:8,nombre:"Redux", visto:false},
        {id:9,nombre:"customHooks", visto:false},

    ]
    const [arreglo,SetArreglo] = useState(listadoSecciones)
   

    /*Manejo de eventos desde el padre, para no delegar al hijo la gestión de las variables */
    const onAgregarTarea=(val)=>{
        if(val<1) return
        const envio={
            id:arreglo.length+1,
            nombre:val,
            visto:false
        }
        SetArreglo([...arreglo,envio])
        }
            return (
        <>
        <h1>Listado de temas</h1>
        <ol>
            {arreglo.map(item=><Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}            
        </ol>
        
        <AgregarTarea agregarTarea={onAgregarTarea }></AgregarTarea>
        {/* <button onClick={()=>addTask()}>Agregar Tarea</button> */}
        </>
    )
}