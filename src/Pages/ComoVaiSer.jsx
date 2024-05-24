import React, { useState, useEffect } from 'react';
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import CriancaAtendida from "../assets/images/crianca_sendo_atendida.avif";

function ComoVaiSer() {
    const [phases, setPhases] = useState([]); // Estado para armazenar as fases
    const api = import.meta.env.VITE_REACT_API;
      

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                setPhases(data); // Armazenando os dados das fases no estado
            })
            .catch(error => console.error('Erro ao buscar fases do projeto:', error));
    }, []);
    

    return (
        <>
            <NavBar />
            <div className="landing_comvaiser">
                <div className="landing_img"></div>
                <div className="intro-text">
                    <h1>Como vai ser?</h1>
                    <p></p>
                </div>
            </div>
            <div className="services" id="services">
                <div className="container">
                    <h2 className="special-heading">Nosso feedback</h2>
                    <p>Conheça agora as fases do nosso projeto</p>
                    <div className="services-content">
                        {phases.map(phase => (
                            <div className="col" key={phase.id}>
                                <div className="srv">
                                    <i className={`${phase.icon} fa-2x`}></i>
                                    <div className="text">
                                        <h3>{phase.title}</h3>
                                        {phase.descriptions.map((description, index) => (
                                            <p key={index}>{description}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col">
                            <div className="image image-column">
                                <img src={CriancaAtendida} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ComoVaiSer;
