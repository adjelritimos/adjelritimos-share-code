import React from 'react'
import { Link } from 'react-router-dom'

const MainSection = () => {
    return (
        <section className="bg-color text-info py-5">
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="">
                        <h1 className="display-4 fw-bold">Colabore em tempo real</h1>
                        <p className="lead">
                            Escreva código junto com sua equipe e veja as alterações instantaneamente.
                        </p>
                        <Link to={'/adjelritimos-share-code/nocountsession'} className="btn btn-info text-white fw-bold rounded-pill btn-lg">
                            Partilha seu código agora
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSection