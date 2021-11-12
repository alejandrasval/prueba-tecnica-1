import React, { useState } from "react";
import '../styles/Form.css';
import axios from "axios";
import {url} from '../url/url';

export const Form = () => {

    const [product, setProduct] = useState({
        nombre: '',
        tipo: '',
        codigo: '',
    })

    const { nombre, codigo, tipo } = product;

    const postData = () => {
        axios.post( url, product)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

    const handleChange = ({target}) => {
        setProduct({
            ...product, 
            [target.name]: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registro de Productos</h2>
           <hr/>
               <div>
                   <label>Nombre</label>
                   <input id="inputNombre" name="nombre" value={nombre} onChange={handleChange}/>
               </div>
               <div>
                   <label>Tipo de Producto</label>
                   <select id="selectTipo" name="tipo" value={tipo} onChange={handleChange}>
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="Lacteos" value="Lacteos">Lácteos</option>
                       <option name="FrutasVerduras" value="FrutasVerduras">Frutas y verduras</option>
                       <option name="Despensa" value="Despensa">Despensas</option>
                   </select>
               </div>
               <div>
                   <label>Código</label>
                   <input id="inputCodigo" type="number" name="codigo" value={codigo} onChange={handleChange}/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" onChange={handleChange}/>
               </div>
               <div>
                   <button id="btnRegistro" onClick={() => postData()} >Enviar</button> 
               </div>
           </form>
        </div>
    )
}

export default Form;