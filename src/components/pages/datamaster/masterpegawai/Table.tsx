'use client'

import { ButtonGreen, ButtonRed } from "@/components/global/Button";

const Table = () => {
    return(
        <>
            <div className="overflow-auto m-2 rounded-t-xl border">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#99CEF5] text-white">
                            <th className="border-r border-b px-6 py-3 min-w-[50px]">No</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Nama</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">NIP</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Kode Perangkata Daerah</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Roles</th>
                            <th className="border-l border-b px-6 py-3 min-w-[200px]">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-r border-b px-6 py-4">1</td>
                            <td className="border-r border-b px-6 py-4">Ir Suwarno M.Si</td>
                            <td className="border-r border-b px-6 py-4">0174017240</td>
                            <td className="border-r border-b px-6 py-4">1.3242.325235.1.23.2</td>
                            <td className="border-r border-b px-6 py-4">Eselon 4</td>
                            <td className="border-r border-b px-6 py-4">
                                <div className="flex flex-col jutify-center items-center gap-2">
                                    <ButtonGreen className="w-full" halaman_url="/DataMaster/masterpegawai/1">Edit</ButtonGreen>
                                    <ButtonRed className="w-full">Hapus</ButtonRed>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;