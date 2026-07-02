function Button({
    children,
    type = "button",
    variant = "primary",
    ...props
}) {

    const variants = {

        primary:
            "bg-[#8B0015] hover:bg-[#700011] text-white",

        secondary:
            "bg-white border border-gray-300 hover:bg-gray-100 text-gray-700"

    };

    return (

        <button
            type={type}
            className={`
                w-full
                h-12
                rounded-xl
                font-semibold
                transition
                duration-300
                ${variants[variant]}
            `}
            {...props}
        >

            {children}

        </button>

    );

}

export default Button;