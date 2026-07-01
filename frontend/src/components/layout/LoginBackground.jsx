import background from "../../assets/images/fundo-login.png";

function LoginBackground() {

    return (

        <div className="absolute inset-0">

            <img
                src={background}
                alt="Background"
                className="w-full h-full object-cover"
            />

        </div>

    );

}

export default LoginBackground;