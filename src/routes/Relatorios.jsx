import React from 'react'
import Header from '../componentes/Header'
import { Lirelatorios } from '../listagem/Lirelatorios'


export const Relatorios = () => {
    return (
        <div>
            <div className="container-sm">
                <div className="relatorios">
                    <div className="container-sm">
                        <Header conteudo="RELATÓRIOS" />
                        <select className="largeS form-select" aria-label="Large select example">
                            <option selected>estado</option>
                            <option value="1">RN</option>
                        </select>
                        <select className="largeS form-select" aria-label="Large select example">
                            <option selected>loja</option>
                            <option value="1">serhs</option>
                        </select>
                        <select className="largeS form-select" aria-label="Large select example">
                            <option selected>funcionário</option>
                            <option value="1">sales</option>
                        </select>
                        <select className="largeS form-select" aria-label="Large select example">
                            <option selected>CÂMERA</option>
                            <option value="1">1</option>
                        </select>
                        <select className="largeS form-select" aria-label="Large select example">
                            <option selected>BATERIA</option>
                            <option value="1">1</option>
                        </select>
                        <select className="largeS form-select" aria-label="Large select example">
                            <option selected>CARTÃO</option>
                            <option value="1">1</option>
                        </select>
                        <input className="largeS form-control" type="date" />

                        <button className="btn btn-primary largeb">Buscar</button>

                        <Lirelatorios />

                        <Lirelatorios />

                        <Lirelatorios />

                        <Lirelatorios />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Relatorios