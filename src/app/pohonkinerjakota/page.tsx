import Pohoncascading from "@/components/pages/Pohon/pohoncascading";
import { FiHome } from "react-icons/fi";

const pohonkinerjakota = () => {
    return(
        <>
            <div className="flex flex-wrap items-center">
                <a href="/" className="mr-1"><FiHome /></a>
                <p className="mr-1">/ Perencanaan Kota</p>
                <p className="mr-1">/ Pohon Kinerja Kota</p>
            </div>
            <Pohoncascading />
        </>
    )
}

export default pohonkinerjakota;