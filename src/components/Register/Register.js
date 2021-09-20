import "./Register.css"
import {Fragment} from "react";

function Register() {
    return (
        <Fragment>
            <h2 className="mt-3 mb-4">Registro</h2>
            <form action="" className="form-register">
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Nombre completo</label>
                    <input type="name" className="form-control" name="fullName" id="fullName"
                           required
                           placeholder="Ingrese nombre completo, por ejemplo: Sofía Mendoza Uribe"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" name="email" id="email"
                           required
                           placeholder="Ingrese correo electrónico, por ejemplo: sofia@gmail.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" name="password" id="password"
                           required pattern="[0-9]+" minLength="4"
                           placeholder="Ingrese una contraseña"/>
                    <p className="text-secondary mt-2">La contraseña debe contener al menos 4 dígitos</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
                    <input type="password" className="form-control" name="confirmPassword" id="confirmPassword"
                           required pattern="[0-9]+" minLength="4"
                           placeholder="Confirme su contraseña"/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-secondary" type="submit">Enviar</button>
                </div>
            </form>
        </Fragment>
    );
}

export default Register;
