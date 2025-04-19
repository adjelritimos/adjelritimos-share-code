import React, { useState } from "react"

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div class="modal fade" id="doRegister" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog w-25">
                    <div class="modal-content">
                        <div class="modal-header mb-0">
                            <img src="/logo.png" alt="CodeShare Logo" width="80" height="auto" />
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="flex flex-col items-center justify-center h-screen bg-white">
                                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                                    <div className="mb-2">
                                        <label htmlFor="nome" className="">Nome</label>
                                        <input type="name" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="digite seu nome" className="form-control border-info" />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="email" className="">Email</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="digite seu email" className="form-control border-info" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="password" className="">Cria uma palavra-passe</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="form-control border-info" />
                                    </div>
                                    <button type="submit" className="w-100 rounded-pill btn btn-info text-white mt-3 fw-bold">Registar e entrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register