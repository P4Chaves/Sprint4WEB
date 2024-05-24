import NavBar from "../Componentes/NavBar"
import Footer from "../Componentes/Footer"
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <NavBar />
            <div class="landing">
                <div class="landing_img"></div>
                <div class="intro-text">
                    <h1>Sob Solution</h1>
                    <p>"Tudo sob controle, tudo Sob Solution"</p>
                </div>
            </div>
            <div class="custom-features">
                <div class="custom-container">
                    <div class="custom-feat">
                        <i class="fas fa-magic fa-3x"></i>
                        <h3>Bem-vindo(a) a Sob Solution!</h3>
                        <p>Olá, nós somos a Sob Solution, uma equipe de 4 integrantes motivados a melhorar o mundo com a tecnologia ao nosso redor. Trabalhando para ser a solução para a sua empresa!</p>
                    </div>
                    <div class="custom-feat">
                        <i class="far fa-gem fa-3x"></i>
                        <h3>Para saber mais sobre esse projeto para o HC!</h3>
                        <Link to="/projeto">Clique aqui!</Link>
                    </div>
                    <div class="custom-feat">
                        <i class="fas fa-globe-asia fa-3x"></i>
                        <h3>QUEM NÓS SOMOS?</h3>
                        <Link to="/sobre_nos">Clique aqui para saber mais!</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home