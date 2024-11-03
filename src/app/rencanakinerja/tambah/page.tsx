import { FormRencanaKinerja } from "@/components/pages/rencanakinerja/FormRencanaKinerja";
import { FiHome } from "react-icons/fi";

const tambahRencanaKinerja = () => {
    return(
        <>
            <div className="flex items-center mb-3">
                <a href="/" className="mr-1"><FiHome /></a>
                <p className="mr-1">/ Perencanaan</p>
                <p className="mr-1">/ Rencana Kinerja</p>
                <p>/ Tambah Rencana Kinerja</p>
            </div>
            <FormRencanaKinerja />
        </>
    )
}

export default tambahRencanaKinerja;