function Checkbox({

    label,

    ...props

}){

    return(

        <label className="flex items-center gap-2">

            <input
                type="checkbox"
                {...props}
            />

            {label}

        </label>

    );

}

export default Checkbox;