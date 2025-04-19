import React from 'react'
import Login from './guest/login'
import Register from './guest/register'

const Header = () => {
    return (
        <header className="">
            <div className="w-100 p-2 d-flex justify-content-between bg-white">
                <img src="./logo.png" alt="CodeShare Logo" width="80" height="auto" />
                <div className="d-grid gap-2 d-flex justify-content-md-end">
                    <button data-bs-toggle="modal" data-bs-target="#doRegister" className="btn btn-outline-info btn-reg-log fw-bold p-1 rounded-pill" type="button">registar</button>
                    <button data-bs-toggle="modal" data-bs-target="#doLogin" className="btn btn-info text-white btn-reg-log p-1 fw-bold rounded-pill" type="button">entar</button>
                </div>
            </div>
            <Login/>
            <Register/>
        </header>
    )
}

export default Header