import React, {Fragment, useState} from 'react';


const Formulario = () => {

    
    

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: ''
        
    })

    

    const [datosError, setDatosError] = useState("");
    

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })

        if(event.target.name === "nombre"){
            if(event.target.value.length < 1) {
                setDatosError("Nombre es Requerido!");
            } else if(event.target.value.length < 2) {
                setDatosError("Nombre debe tener al menos 2 caracteres!");
            } else {
                setDatosError('');
            }
}

        if(event.target.name === "apellido"){
            if(event.target.value.length < 1) {
                setDatosError("Apellido es Requerido!");
            } else if(event.target.value.length < 2) {
                setDatosError("Apellido debe tener al menos 2 caracteres!");
            } else {
                setDatosError('');
            }
}

        if(event.target.name === "email"){
            if(event.target.value.length < 1) {
                setDatosError("Email es requerido!");
            } else if(event.target.value.length < 5) {
                setDatosError("Email debe tener el menos 5 caracteres!");
            } else {
                setDatosError('');
            }
}

        if(event.target.name === "password"){
            if(event.target.value.length < 1) {
                setDatosError("Contraseña es requerido!");
            } else if(event.target.value.length < 8) {
                setDatosError("Contraseña debe tener el menos 8 caracteres!");
            } else {
                setDatosError('');
            }}

        if(event.target.name === "confirmPassword"){
            if(event.target.value.length < 1) {
                setDatosError("Contraseña es requerido!");
            } else if(event.target.value.length < 8) {
                setDatosError("Contraseña debe tener el menos 8 caracteres!");
            } else {
                setDatosError('');
            }


        }

        var p1 = document.getElementById("pass1").value;
        var p2 = document.getElementById("pass2").value;
        if(p1 !== p2){
            setDatosError("Contraseña no coinciden!");
        }

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
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre" />
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="col-md-3">
                    <input type="email" placeholder="email" className="form-control" onChange={handleInputChange} name="email"></input>
                </div>
                <div className="col-md-3">
                    <input  id='pass1' type="password" placeholder="Password" className="form-control" onChange={handleInputChange} name="password"></input>
                </div>
                <div className="col-md-3">
                    <input id='pass2' type="password" placeholder="Confirm Password" className="form-control" onChange={handleInputChange} name="confirmPassword"></input>

                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                {
                    datosError ?
                    <p style={{color:'red'}}>{ datosError }</p> :
                    ''
                }
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