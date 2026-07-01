import LoginBackground from "../../components/layout/LoginBackground";
import LoginCard from "../../components/layout/LoginCard";
import Logo from "../../components/layout/Logo";

function Login() {

    return (

        <div className="relative w-screen h-screen overflow-hidden bg-gray-100">

            <LoginBackground />

            <LoginCard>

                <Logo />

                <h1 className="text-4xl text-center font-bold text-[#850013]">
                    Bem-vindo(a)!
                </h1>

                <p className="text-center text-gray-500 mt-2">
                    Faça login para acessar o sistema
                </p>

            </LoginCard>

        </div>

    );

}

export default Login;