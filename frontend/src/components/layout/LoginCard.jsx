function LoginCard({ children }) {

    return (

        <div
            className="
            absolute
            right-16
            top-1/2
            -translate-y-1/2
            bg-white
            rounded-3xl
            shadow-2xl
            w-[430px]
            p-10
            z-10
        "
        >

            {children}

        </div>

    );

}

export default LoginCard;