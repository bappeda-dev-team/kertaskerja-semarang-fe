import { FiHome } from "react-icons/fi"
import Table from "@/components/pages/datamaster/masterprogramkegiatan/subkegiatan/Table";

const subkegiatan = () => {
    return(
        <>
            <div className="flex flex-wrap items-center">
                <a href="/" className="mr-1"><FiHome /></a>
                <p className="mr-1">/ Data Master</p>
                <p className="mr-1">/ Master Program kegaitan</p>
                <p className="mr-1">/ Master Sub Kegiatan</p>
            </div>
            <div className="mt-3 rounded-xl shadow-lg border">
                <div className="flex flex-col border-b p-5">
                    <h1 className="font-bold uppercase">Master Sub kegiatan</h1>
                </div>
                <Table />
            </div>
        </>
    )
}

export default subkegiatan;