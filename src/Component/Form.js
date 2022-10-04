import React, {Fragment, useState} from 'react';

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: ''
        
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="col-md-3">
                    <input type="email" placeholder="email" className="form-control" onChange={handleInputChange} name="email"></input>
                </div>
                <div className="col-md-3">
                    <input type="password" placeholder="Password" className="form-control" onChange={handleInputChange} name="password"></input>
                </div>
                <div className="col-md-3">
                    <input type="password" placeholder="Confirm Password" className="form-control" onChange={handleInputChange} name="confirmPassword"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
                <li>{datos.email}</li>
                <li>{datos.password}</li>
                <li>{datos.confirmPassword}</li>
            </ul>
        </Fragment>
    );
}
 
export default Formulario;