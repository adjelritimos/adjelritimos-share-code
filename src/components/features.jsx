import React from 'react'

const Features = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="d-flex gap-2">
                    <div className="col-md-4 p-4 text-center btn btn-outline-info">
                        <i className="fas fa-code display-4"></i>
                        <h3>Edição ao vivo</h3>
                        <p>Edite o código em tempo real com a sua equipa.</p>
                    </div>
                    <div className="col-md-4 p-4 text-center btn btn-outline-info">
                        <i className="fas fa-users fs-3 display-4"></i>
                        <h3>Colaboração em Equipa</h3>
                        <p>Convide os membros da sua equipa para participarem na sua sessão.</p>
                    </div>
                    <div className="col-md-4 p-4 text-center btn btn-outline-info">
                        <i className="fas fa-save display-4"></i>
                        <h3>Save Sessions</h3>
                        <p>Save your sessions for later use.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features