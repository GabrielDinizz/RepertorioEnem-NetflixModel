import styles from '../RegisterCard/register.module.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterCard = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Estado para controle de carregamento
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(''); // Limpa mensagens de erro antes de nova tentativa
        setLoading(true); // Inicia carregamento

        try {
            await axios.post('http://localhost:5000/api/auth/register', {
                username,
                email,
                password,
            });
            setUsername(''); // Limpa o campo username
            setEmail(''); // Limpa o campo email
            setPassword(''); // Limpa o campo password
            navigate('/login'); // Redirecionar para a página de login após o cadastro
        } catch (error) {
            setError(error.response?.data?.error || 'Erro ao cadastrar');
        } finally {
            setLoading(false); // Finaliza carregamento
        }
    };

    return (
        <>
            <section className={styles['bg-gray-50']}>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <h1 className={`text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white ${styles['txt-title']}`}>
                        Criar Conta
                    </h1>
                    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                                <div>
                                    <label htmlFor="username" className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${styles['txt-white']}`}>Nome de Usuario</label>
                                    <input
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${styles['txt-white']}`}>Seu Email</label>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${styles['txt-white']}`}>Senha</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>

                                {/* Exibir mensagem de erro */}
                                {error && (
                                    <p className="text-red-500 mt-2">{error}</p>
                                )}

                                <button
                                    type="submit"
                                    className={`w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${styles['btn-create']}`}
                                    disabled={loading} // Desabilita o botão enquanto está carregando
                                >
                                    {loading ? 'Carregando...' : 'Criar Conta'}
                                </button>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400" style={{ textAlign: 'center' }}>
                                    Já possui uma conta? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Fazer Login</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RegisterCard;
