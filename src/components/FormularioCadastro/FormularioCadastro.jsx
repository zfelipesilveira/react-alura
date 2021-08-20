import React, { Component } from 'react';
import "./estilo.css";

class FormularioCadastro extends Component{
    
    render(){
        return(
        <form className="form-cadastro ">
            <input rows={15} type="text" placeholder="Título" className="form-cadastro_input"></input>
            <textarea placeholder="Escreva sua nota" ></textarea>
            <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
        </form>
        )
    }
    
}

export default FormularioCadastro;



