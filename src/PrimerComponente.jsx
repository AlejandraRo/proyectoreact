import PropTypes from 'prop-types'
/* Estas variables son privadas y se declaran fuera del componente funcional
const string='Esto es un texto'
const number=123456
const array=['Curso de React','Youtube',4,1000000]
const boolean=true
const funcion=()=>'String'
const objeto={nombre:'Curso Js',duracion:4}
const fecha=new Date() */ 

// export const PrimerComponente = ()=> {
//      //  (<h1>{ JSON.stringify(objeto) }</h1>)/*Sirve para renderizar un objeto en react, de lo contrario no se pueden ver las propiedades */
//     return (
//     /*es un fragmento, y no se requiere importar fragment de react 
//     <> 
//     <h1>Variables en JSX</h1>
//     <h4>Variable tipo String:</h4><p>{string}</p>
//     </>*/
//     )
// }


//========================================propiedades
export const PrimerComponente=({titulo,subtitulo})=>{
   
    return(<>
    <h1>{titulo}</h1>
    <h2>{subtitulo+1}</h2>
    </>)
}

PrimerComponente.PropTypes={
    titulo:PropTypes.string.isRequired,
    subtitulo:PropTypes.number.isRequired

}
PrimerComponente.defaultProps={
    titulo:'Curso de React',
    subtitulo:453
}