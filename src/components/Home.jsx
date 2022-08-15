import React from 'react';

function Home(props) {
    return (
        <div className='main'>
            <h1>Home Page</h1>

            <p>Esta página dedica-se a uma breve explicação sobre como este website funciona.</p>

            <div>
                <h2>Barra lateral</h2>
                <p>Contem links que direcionam o utilizador às suas respetivas páginas ao serem clicados.</p>
                <img className='sidebar-img' src="./images/sidebar.png" alt="Sidebar" />
            </div>


            <div>
                <h2>Início</h2>
                <p>Esta própria página.</p>
            </div>

            <div>
                <h2>Utilizador</h2>
                <p>Conforme o utilizador clica no símbolo "-" (indicado com uma flecha na imagem abaixo), o campo referente  àquela sessão é escondido.</p>
                <img className='campo-utilizador' src="./images/campo-utilizador.png" alt="campo-utilizador" />

                <p>Mais de uma opção pode ser marcada no campo "Tipo de Utilizador"</p>
                <img className='tipo-utilizador' src="./images/tipo-utilizador.png" alt="tipo-utilizador" />

            </div>

            <div>
                <h2>Dados</h2>
                <p>Armazena os dados dos utilizadores registados.</p>

                <p>Ao mover o rato por cima de cada utilizador registado, um botão de excluir utilizador é mostrado no canto inferior direito do campo.</p>

                <img className='tipo-utilizador' src="./images/dados-utilizador.png" alt="tipo-utilizador" />
            </div>

        </div>
    );
}

export default Home;