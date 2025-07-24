import React from 'react'

export const Lirelatorios = () => {
    return (
        <div className="relatorio">
            <button className="btn btn-secondary largeS" type="button" data-bs-toggle="modal" data-bs-target="#Modal2">21/07/2025 RN SERHS SALES</button>
            <div className="modal fade" id="Modal2" tabindex="-1" aria-hidden="true" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                RELATORIO 21/07/2025 RN SERHS SALES
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            Loja: Hotel Serhs <br />
                            Estado: RN <br />
                            Responsável pela conferência: Sales <br />
                            Câmeras registradas: Camera Serhs Cannon 1 <br />
                            Cartões registrados: Cartão SD 1 <br />
                            Baterias registradas: Bateria 1 <br />
                            Adversidades: Nenhuma <br />
                            Data e Hora: 01/01/2025 - 19:55
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Voltar
                            </button>
                            <button type="button" className="btn btn-primary">
                                Imprimir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
