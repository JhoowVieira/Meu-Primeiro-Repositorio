import { FaUser } from "react-icons/fa";

function Logo() {

    return (

        <div
            className="
            w-20
            h-20
            rounded-2xl
            bg-[#850013]
            mx-auto
            flex
            items-center
            justify-center
            text-white
            text-3xl
            mb-6
        "
        >

            <FaUser />

        </div>

    );

}

export default Logo;