// Importe de icons.
import { FaUser,FaLock } from "react-icons/fa";

// Manipulação dos dados (States).
import { useState } from "react";

// Importe dos estilos.
import './Login.css';

const Login = () => {

    // Criação das variaveis para maniplulação dos dados.
    const [username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    // Implementação do sistema de validação dos dados.

    const [error, setError] = useState('');

    // Função de envio do formulario.
    const handleSubmit = (event) => {
        event.preventDefault() // Evitar da pagina dar recall.

        // Logica da validação de senha e email.

        if (!username || !password) {
            setError('Por favor, preencha todos os campos.');
            return; // Parar a função se falhar a verificaçao.
        }
    
        setError('');

        alert(`Enviando os dados Cadastrados  | Usúario: ${username}  | Senha: ${password}`);
        console.log('Dados Coletados...');
        console.log(username, password)
    };

  return (
    <div className="conteiner">
       

        <form onSubmit={handleSubmit}>
            <h1>Hey,
                <p>Bem-Vindo</p>
                <p>De Volta</p>
            </h1>
            
            <div>
                {error && <p className="error-message">{error}</p>}
            </div>
           
            <div className="input-field">
                <input type="email" 
                placeholder='E-mail'
                value={username}
                onChange={(e)=> setUsername(e.target.value)} />
                <FaUser className='icon'/>
            </div>

            <div className="input-field">
                <input type="password" 
                placeholder='Senha'
                value={password}
                onChange={(e)=> setPassword(e.target.value)} />
                <FaLock className='icon'/>
            </div>

            <div className="recall">
                <a href="#">Forgot password?</a> 
            </div>

            <button type="submit">Login</button>

            <div className="singup">
                <p>
                    Não tem uma conta? <a href="#">Criar Agora!</a>
                </p>
            </div>
            
        </form>
    </div>
  );
}

export default Login