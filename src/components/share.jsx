const Share = () => {

    const path = window.location.pathname

    return (
        <div>
            <div className="modal fade" id="shareCodeModal" tabindex="-1" aria-labelledby="shareCodeModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header border-white">
                            <h5 className="modal-title" id="shareCodeModalLabel">Partilhar código da sessão</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body mt-0 pt-0">
                            <p className="mb-2">Qualquer pessoa com acesso a este URL verá o seu código em tempo real.</p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control border-info" value={`https://adjelritimos-share-code.onrender.com${path}`} readonly />
                                <button className="input-group-text text-white bg-info"><i className="fas fa-copy"></i></button>
                            </div>
                        </div>
                        <div className="modal-footer mt-0 pt-0 border-white">
                            <button type="button" className="btn btn-danger rounded-pill fw-bold" data-bs-dismiss="modal">fechar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Share