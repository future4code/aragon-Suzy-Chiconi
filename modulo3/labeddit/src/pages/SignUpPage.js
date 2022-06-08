import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import useUnprotectedPage from "../hooks/useUnprotectedPage";
import useForm from '../hooks/useForm';
import { requestSignUp } from '../services/requests';
import { goToLoginPage } from "../routes/coordinator";

// Função que renderiza página de cadastro de novo usuário.
function SignUpPage() {
    // Custom Hook que verifica se esta tela é protegida. Caso não seja, força exibição de FeedPage.
    useUnprotectedPage();

    // variável navigate -> Armazena a chamada do Hook useNavigate do react-router-dom
    const navigate = useNavigate();

    /* Início de comentário multi-linha

        Ponto de acesso ao Custom Hook useForm sob a forma de desestruturação do
        retorno desta função.

        Observação: useForm é acessado através de suas propriedades diretas: a variável
        form e as funções onChange e clear.
        Exemplo de acesso:
        const {form, onChange, clear} = useForm(...)

        Observação2: Na desestruturação de objetos, não importa a posição de cada
        variável atribuída, mas sim os nomes exatos delas.
    
    Fim de comentário multi-linha */
    const { form, onChange, clear } = useForm({ name: "", email: "", password: "" });

    // Função que inicia o SignUp.
    const signup = (event) => {
        event.preventDefault();

        /* Início de comentário multi-linha

            Função que faz a requisição efetiva de SignUp. Recebe como parâmetros a 
            variável form, além das funções clear e navigate.
       
        Fim de comentário multi-linha */
        requestSignUp(form, clear, navigate);
    };

    return (
        <main>
            {/* Início de comentário multi-linha
            
                Renderiza componente Header.js, passando a props isProtected, que 
                identifica se a página é protegida (true) ou não (false). 
                
            Fim de comentário multi-linha */}
            <Header
                isProtected={false}
            />
            <hr />
            <section>
                <h2>Cadastro de Novo Usuário</h2>
                <form onSubmit={signup}>
                    <label htmlFor={"name"}> Nome: </label>
                    <input
                        id={"name"}
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        pattern={"^.{3,}$"}
                        title={"O nome deve ter no mínimo 3 caracteres"}
                        required
                    />
                    <br />
                    <label htmlFor={"email"}> E-mail: </label>
                    <input
                        id={"email"}
                        type={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        required
                    />
                    <br />
                    <label htmlFor={"password"}> Senha: </label>
                    <input
                        id={"password"}
                        type={"password"}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        pattern={"^.{8,30}$"}
                        title={"O nome deve ter no mínimo 8 e no máximo 30 caracteres"}
                        required
                    />
                    <br />
                    <button type={"submit"}>Cadastrar usuário</button>
                </form>
                {/* Botão de retorno a LoginPage. */}
                <button onClick={() => goToLoginPage(navigate)}>Voltar</button>
            </section>
        </main>
    );
};

export default SignUpPage;