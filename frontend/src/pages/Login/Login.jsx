import { FaEnvelope, FaLock, FaEye, FaGoogle } from "react-icons/fa";
import { useState } from "react";

import background from "../../assets/images/fundo-login.png";

function Login() {

    const [showPassword, setShowPassword] = useState(false);

    return (

        <div className="relative w-screen h-screen overflow-hidden">

            {/* Background */}

            <img
                src={background}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/20"></div>

            {/* Card */}

            <div className="absolute right-24 top-1/2 -translate-y-1/2">

                <div className="w-[430px] bg-white rounded-3xl shadow-2xl p-10">

                    {/* Logo */}

                    <div className="flex justify-center mb-8">

                        <div className="w-20 h-20 rounded-2xl bg-[#8B0015] flex items-center justify-center">

                            <FaLock
                                className="text-white text-3xl"
                            />

                        </div>

                    </div>

                    {/* Título */}

                    <h1 className="text-3xl font-bold text-center text-[#8B0015]">

                        Bem-vindo(a)!

                    </h1>

                    <p className="text-center text-gray-500 mt-2 mb-8">

                        Faça login para acessar o sistema

                    </p>

                    {/* Email */}

                    <label className="font-semibold">

                        E-mail

                    </label>

                    <div className="mt-2 mb-5 flex items-center border rounded-xl h-12 px-4">

                        <FaEnvelope
                            className="text-gray-400"
                        />

                        <input

                            type="email"

                            placeholder="Digite seu e-mail"

                            className="ml-3 w-full outline-none"

                        />

                    </div>

                    {/* Senha */}

                    <label className="font-semibold">

                        Senha

                    </label>

                    <div className="mt-2 mb-5 flex items-center border rounded-xl h-12 px-4">

                        <FaLock
                            className="text-gray-400"
                        />

                        <input

                            type={showPassword ? "text" : "password"}

                            placeholder="Digite sua senha"

                            className="ml-3 w-full outline-none"

                        />

                        <FaEye

                            onClick={() =>
                                setShowPassword(!showPassword)
                            }

                            className="cursor-pointer text-gray-400"

                        />

                    </div>

                    {/* Opções */}

                    <div className="flex justify-between items-center mb-8">

                        <label className="flex items-center gap-2 text-sm">

                            <input type="checkbox" />

                            Lembrar acesso

                        </label>

                        <a
                            href="/forgot-password"
                            className="text-[#8B0015] text-sm hover:underline"
                        >

                            Esqueci minha senha

                        </a>

                    </div>

                    {/* Botão */}

                    <button
                        className="w-full h-12 rounded-xl bg-[#8B0015] hover:bg-[#700011] text-white font-semibold transition"
                    >

                        Entrar no Sistema

                    </button>

                    {/* Divider */}

                    <div className="flex items-center my-6">

                        <div className="flex-1 border"></div>

                        <span className="mx-3 text-gray-400">

                            ou

                        </span>

                        <div className="flex-1 border"></div>

                    </div>

                    {/* Google */}

                    <button
                        className="w-full h-12 border rounded-xl flex justify-center items-center gap-3 hover:bg-gray-100 transition"
                    >

                        <FaGoogle
                            className="text-red-500"
                        />

                        Entrar com Google

                    </button>

                    {/* Primeiro acesso */}

                    <p className="text-center mt-8 text-sm">

                        Primeiro acesso?

                        <a
                            href="/first-access"
                            className="ml-2 text-[#8B0015] font-semibold hover:underline"
                        >

                            Clique aqui

                        </a>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Login;