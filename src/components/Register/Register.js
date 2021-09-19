import "./Register.css"
import {Fragment} from "react";

function Register() {
    return (
        <Fragment>
            <h2 className="mt-3 mb-4">Registro</h2>
            <form action="">
                <div className="mb-3">
                    <input type="name" className="form-control"
                           placeholder="Nombre"/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control"
                           placeholder="Correo electrónico"/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control"
                           placeholder="Contraseña"/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control"
                           placeholder="Confirmar contraseña"/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-secondary">Enviar</button>
                </div>
            </form>
        </Fragment>
    );
}

export default Register;
