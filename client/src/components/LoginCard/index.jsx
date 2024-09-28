import styles from '../LoginCard/loginCard.module.css';

const LoginCard = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });

            const { token, role } = response.data;

            // Armazenar o token no localStorage ou sessionStorage
            localStorage.setItem('token', token);

            // Redirecionar o usuário dependendo do papel
            if (role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Erro ao fazer login', error);
        }
    };


    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className={`mt-10 text-center text-2xl font-bold leading-9 tracking-tight ${styles['txt-campo']}`}>Fazer login</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className={`block text-sm font-medium leading-6 ${styles['txt-campo']}`}>
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '.8rem' }} placeholder="name@company.com" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className={`block text-sm font-medium leading-6 ${styles['txt-campo']}`}>
                                Senha
                            </label>
                            <div className="mt-2">
                                <input 
                                id="password" 
                                name="password"
                                type="password" 
                                autoComplete="current-password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ paddingLeft: '.8rem' }} placeholder="••••••••" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className={` ${styles['btn-logar']} flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>Criar Conta</button>
                        </div>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Não possui um conta?
                        <a href="/register" className={`font-semibold leading-6 ${styles['txt-signin']}`}> Registrar-se</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default LoginCard;