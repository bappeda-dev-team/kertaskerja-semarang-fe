'use client'

import { FiHome } from "react-icons/fi";
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled, TbSquareRoundedNumber4Filled } from "react-icons/tb";
import { useState } from "react";
import { Table } from "./comp/Table";
import { useBrandingContext } from "@/context/BrandingContext";
import { OpdTahunNull } from "@/components/global/OpdTahunNull";

const PerjanjianKinerja = () => {

    const { branding } = useBrandingContext();
    const [Level, setLevel] = useState<number>(6);

    const handleLevel = (level: number) => {
        if (Level != level) {
            setLevel(level);
        }
    }

    if (
        branding?.tahun?.value === undefined ||
        branding?.tahun?.value === null ||
        branding?.opd?.value === undefined ||
        branding?.opd?.value === null
    ) {
        return (
            <OpdTahunNull />
        )
    } else {
        return (
            <>
                <div className="flex items-center">
                    <a href="/" className="mr-1"><FiHome /></a>
                    <p className="mr-1">/ Laporan</p>
                    <p>/ Perjanjian Kinerja</p>
                </div>
                <div className="mt-3 rounded-xl shadow-lg border">
                    <div className="flex flex-wrap items-center justify-between border-b px-5 py-5">
                        <h1 className="font-bold text-lg uppercase">Perjanjian Kinerja {branding?.tahun?.label}</h1>
                    </div>
                    <div className="flex m-2">
                        <div className="flex items-center gap-2 overflow-x-auto pb-2">
                            <button
                                className={`flex items-center gap-1 py-1 px-3 min-w-[200px] justify-center border rounded-lg cursor-pointer ${Level === 4 ? "bg-red-600 border-red-500 text-white" : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"}`}
                                onClick={() => handleLevel(4)}
                            >
                                <TbSquareRoundedNumber1Filled />
                                Level 1
                            </button>
                            <button
                                className={`flex items-center gap-1 py-1 px-3 min-w-[200px] justify-center border rounded-lg cursor-pointer ${Level === 5 ? "bg-blue-600 border-blue-500 text-white" : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"}`}
                                onClick={() => handleLevel(5)}
                            >
                                <TbSquareRoundedNumber2Filled />
                                Level 2
                            </button>
                            <button
                                className={`flex items-center gap-1 py-1 px-3 min-w-[200px] justify-center border rounded-lg cursor-pointer ${Level === 6 ? "bg-green-600 border-green-500 text-white" : "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"}`}
                                onClick={() => handleLevel(6)}
                            >
                                <TbSquareRoundedNumber3Filled />
                                Level 3
                            </button>
                            <button
                                className={`flex items-center gap-1 py-1 px-3 min-w-[200px] justify-center border rounded-lg cursor-pointer ${Level === 7 ? "bg-emerald-600 border-emerald-500 text-white" : "border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"}`}
                                onClick={() => handleLevel(7)}
                            >
                                <TbSquareRoundedNumber4Filled />
                                Level 4
                            </button>
                        </div>
                    </div>
                    <Table tahun={String(branding?.tahun.value)} kode_opd={branding?.opd?.value} level={Level} />
                </div>
            </>
        )
    }

}

export default PerjanjianKinerja;