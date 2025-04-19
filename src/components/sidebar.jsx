const Sidebar = () => {

    return (
        <div className='bg-light p-2 wigh-sidebar'>

            <button className='btn btn-info fw-bold text-white rounded-pill'><i className='fas fa-plus mt-auto mb-auto me-2'></i>Nova sessão</button>

            <div class="accordion accordion-flush p-0 rounded rounded-pill mt-2" id="accordionFlushExample">
                <div className="accordion-item rounded p-1">
                    <h2 className="accordion-header rounded">
                        <button className="accordion-button collapsed p-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Todas as sessões
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse p-1" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body p-1">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sidebar