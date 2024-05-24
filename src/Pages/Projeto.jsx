import NavBar from "../Componentes/NavBar"
import Footer from "../Componentes/Footer"
import imgCirurgia from "../../src/assets/images/cirurgia_pe.jpg"
import imgMedicoCrianca from "../assets/images/medico_atendendo_crianca.png"
import imgFeedbackPaciente from "../assets/images/feedback_paciente.png"
import imgMedico from "../assets/images/feedback_medico.png"
function Projeto() {
    return (
        <>
            <NavBar />
            <div class="landing_projeto">
                <div class="landing_img"></div>
                <div class="intro-text">
                    <h1>Problemas Apresentados</h1>
                    <p></p>
                </div>
            </div>
            <div class="about">
                <div class="container">
                    <h2 class="special-heading">Problemas do ICR</h2>
                    <div class="about-content">
                        <div class="image">
                            <img src={imgCirurgia} alt="Descrição da imagem" />
                        </div>
                        <div class="text">
                            <p>
                            O objetivo central é aprimorar a experiência de crianças e adolescentes durante seus tratamentos e exames,
                                enquanto simultaneamente proporciona melhor suporte e compreensão aos seus acompanhantes. A complexidade do
                                desafio surge da natureza sensível e muitas vezes intimidante do ambiente hospitalar para crianças e
                                adolescentes. Desde a marcação de exames até a realização dos procedimentos, cada etapa desse processo
                                complexo demanda uma abordagem que vá além da simples eficiência clínica, englobando a humanização de todas
                                as interações.
                            </p>
                            <hr />
                            <p>
                            A falta de informações claras e compreensíveis para pacientes e seus acompanhantes é uma dor central
                                identificada. Esta lacuna pode resultar em demoras na realização dos exames, intensificar a ansiedade dos
                                pacientes e, em casos mais extremos, levar ao cancelamento dos procedimentos, com potenciais consequências
                                adversas para a saúde dos indivíduos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div class="about">
                <div class="container">
                    <h2 class="special-heading">Problema escolhido</h2>
                    <p>Comunicação</p>
                    <div class="about-content">
                        <div class="text">
                            <p>
                                Quanto aos acompanhantes, há dificuldade em compreender processos hospitalares. A falta de clareza sobre os
                                processos hospitalares, cria desafios para os acompanhantes em oferecer o suporte adequado. Por consequência
                                disso, geram falhas na comunicação entre acompanhantes e equipe médica que podem prejudicar o entendimento e
                                a adesão ao tratamento. Além disso, podem afetar negativamente o suporte adequado aos pacientes. A
                                complexidade dos procedimentos e a falta de familiaridade com o ambiente hospitalar por parte dos
                                acompanhantes, prejudica a continuidade do tratamento e a compreensão adequada dos cuidados necessários.
                            </p>
                            <hr />
                            <p>
                                Quanto aos profissionais de saúde, eles sofrem sobrecarga de trabalho. Isso atrapalha na comunicação e
                                compreensão inadequada dos cuidados necessários para a criança. Pode-se perceber que há dificuldades da
                                criação de uma relação de confiança e compreensão entre o profissional de saúde e o paciente.
                            </p>
                        </div>
                        <div class="image">
                            <img src={imgMedicoCrianca} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfoliosass" id="portfolio_projeto">
                <div className="containersass">
                    <h2 className="special-headingsass">Solução proposta</h2>
                    <p>Nosso feedback</p>
                    <div className="portfolio-contentsass">
                        <div className="cardsass">
                            <img src={imgFeedbackPaciente} alt="" />
                            <div className="infosass">
                                <h3>Versão Paciente:</h3>
                                <p className="texto-feedbacksass">1. Identificação e Acesso:</p>
                                <p className="texto-feedbacksass">- Utilização de um aplicativo ou site acessível a todos os cidadãos cadastrados no SUS.</p>
                                <p className="texto-feedbacksass">- O paciente realiza o login com seu número do SUS e senha.</p>

                                <p className="texto-feedbacksass">2. Menu de Opções:</p>
                                <p className="texto-feedbacksass">- Ao efetuar o login, o paciente terá acesso à funcionalidade de Feedback.</p>

                                <p className="texto-feedbacksass">3. Feedback Específico:</p>
                                <p className="texto-feedbacksass">- Uso de QR code para identificar médicos, data e exame.</p>
                                <p className="texto-feedbacksass">- O paciente pode avaliar diversos aspectos, incluindo recepção, triagem, atendimento médico, e pós-atendimento.</p>

                                <p className="texto-feedbacksass">4. Perguntas Estruturadas:</p>
                                <p className="texto-feedbacksass">- Após a identificação, o sistema apresentará cinco perguntas estruturadas:</p>
                                <p className="texto-feedbacksass"> - Avaliação geral do atendimento (obrigatória, escala de 0 a 5 estrelas).</p>
                                <p className="texto-feedbacksass"> - Pergunta relacionada ao pré-atendimento (obrigatória).</p>
                                <p className="texto-feedbacksass"> - Pergunta relacionada ao pós-atendimento (obrigatória).</p>
                                <p className="texto-feedbacksass"> - Pergunta específica sobre o médico (facultativa).</p>
                                <p className="texto-feedbacksass"> - Pergunta sobre a experiência no hospital (facultativa).</p>

                                <p className="texto-feedbacksass">5. Campo de Observação:</p>
                                <p className="texto-feedbacksass">- Espaço destinado a observações, elogios, críticas ou sugestões adicionais.</p>

                                <p className="texto-feedbacksass">6. Submissão e Agradecimento:</p>
                                <p className="texto-feedbacksass">- Após o preenchimento, o paciente pressiona o botão "Enviar", e a página é atualizada com uma mensagem de agradecimento pelo tempo dedicado ao feedback.</p>
                            </div>
                        </div>
                        <div className="cardsass">
                            <img src={imgMedico} alt="" />
                            <div className="infosass">
                                <h3>Versão Médico:</h3>
                                <p className="texto-feedbacksass">1. Identificação e Acesso:</p>
                                <p className="texto-feedbacksass">- Utilização do CRM como meio de identificação para acessar o portal específico para médicos.</p>
                                <p className="texto-feedbacksass">- O médico realiza o login com seu CRM e senha.</p>

                                <p className="texto-feedbacksass">2. Menu de Opções:</p>
                                <p className="texto-feedbacksass">- Ao acessar o portal, o médico terá um menu com diversas opções, destacando a funcionalidade de Feedback.</p>

                                <p className="texto-feedbacksass">3. Feedback Detalhado:</p>
                                <p className="texto-feedbacksass">- Abordagem específica para o médico, incluindo detalhes sobre o atendimento ao paciente, problemas identificados e condição da criança.</p>

                                <p className="texto-feedbacksass">4. Perguntas Estruturadas:</p>
                                <p className="texto-feedbacksass">- Cinco perguntas estruturadas, sendo três obrigatórias e duas facultativas.</p>
                                <p className="texto-feedbacksass">- Perguntas obrigatórias exploram a avaliação do atendimento, o problema abordado e a condição do paciente.</p>
                                <p className="texto-feedbacksass">- Perguntas facultativas permitem ao médico fornecer insights sobre sua experiência e percepção geral do hospital.</p>

                                <p className="texto-feedbacksass">5. Campo de Observação:</p>
                                <p className="texto-feedbacksass">- Semelhante à versão do paciente, há um espaço para observações, elogios, críticas ou sugestões adicionais.</p>

                                <p className="texto-feedbacksass">6. Submissão e Agradecimento:</p>
                                <p className="texto-feedbacksass">- Após o preenchimento, o médico pressiona o botão "Enviar", e a página é atualizada com uma mensagem de agradecimento pelo tempo dedicado ao feedback.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )

}
export default Projeto