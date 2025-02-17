'use client'

import { FiHome } from "react-icons/fi";
import Table from "@/components/pages/tujuanopd/Table";

const TujuanOpd = () => {

    return(
        <>
            <div className="flex items-center">
                <a href="/" className="mr-1"><FiHome /></a>
                <p className="mr-1">/ Perencanaan OPD</p>
                <p className="mr-1">/ Tujuan OPD</p>
            </div>
            <Table />
        </>
    )
}

export default TujuanOpd;