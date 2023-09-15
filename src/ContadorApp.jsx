// const Button=()=>{
//     return (
//         <button>Soy un botón</button>
//     )
// }
//<Button></Button> así lo invoco dentro de contadorapp

// function handleClick(event,arg)
// {console.log(event,arg)}


import { useState } from "react"
// const Button=()=>{
//     return(
//         <button onClick={(event)=>handleClick(event,'otro')}>Soy un  botón</button>
//     )
// }

export const ContadorApp=({value})=>{

    const [contador,setContador]=useState(value)

    const handleClick=()=>
    {setContador(contador+10)}
    // Se usa useState para que la variable value se redibuje
    return (
       <>
       <h1>Contador:</h1>
       <p>Valor:{contador}</p>
       {/* si es solo un argumento se invoca el nombre de la función
        <button onClick={handleClick}>Soy un botón</button>
        Pero si se reciben más argumentos
        <button onClick={(event)=>handleClick(event,'otro')}>Soy un botón</button>*/}
       <button onClick={handleClick}>Soy un botón</button>
       </>
    )
}