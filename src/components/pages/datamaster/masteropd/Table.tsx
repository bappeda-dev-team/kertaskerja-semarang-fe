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
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Kode Perangkat Daerah</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Nama Perangkat Daerah</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Nama Kepala Perangkat Daerah</th>
                            <th className="border-r border-b px-6 py-3 min-w-[300px]">NIP Kepala Perangkat Daerah</th>
                            <th className="border-r border-b px-6 py-3 min-w-[300px]">Pangkat Kepala Perangkat Daerah</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Kode Lembaga</th>
                            <th className="border-l border-b px-6 py-3 min-w-[200px]">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-r border-b px-6 py-4">1</td>
                            <td className="border-r border-b px-6 py-4">5.01.5.05.0.00.02.0000</td>
                            <td className="border-r border-b px-6 py-4">Badan Perencanaan, Penelitian dan Pengembangan Daerah Kabupaten Madiun</td>
                            <td className="border-r border-b px-6 py-4">Ir. SUWARNO, M.Si</td>
                            <td className="border-r border-b px-6 py-4">1208741824</td>
                            <td className="border-r border-b px-6 py-4">Pembina Utama Muda</td>
                            <td className="border-r border-b px-6 py-4">88.324</td>
                            <td className="border-r border-b px-6 py-4">
                                <div className="flex flex-col jutify-center items-center gap-2">
                                    <ButtonGreen className="w-full" halaman_url={`/DataMaster/masteropd/1`}>Edit</ButtonGreen>
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