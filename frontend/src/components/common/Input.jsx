function Input({

    icon,

    label,

    ...props

}){

    return(

        <div className="mb-5">

            <label className="block mb-2 font-medium">

                {label}

            </label>

            <div
                className="
                    flex
                    items-center
                    border
                    rounded-xl
                    px-4
                    h-12
                "
            >

                {icon}

                <input

                    className="
                        w-full
                        outline-none
                        ml-3
                    "

                    {...props}

                />

            </div>

        </div>

    );

}

export default Input;