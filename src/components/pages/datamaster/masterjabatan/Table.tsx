'use client'

import { ButtonRed, ButtonGreen } from "@/components/global/Button";

const Table = () => {
    return(
        <>
            <div className="overflow-auto m-2 rounded-t-xl border">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#99CEF5] text-white">
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Nama Jenis</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Nilai</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Keterangan</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Tahun</th>
                            <th className="border-l border-b px-6 py-3 min-w-[200px]">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-r border-b px-6 py-4">Jabatan Pimpinan Tinggi</td>
                            <td className="border-r border-b px-6 py-4">1</td>
                            <td className="border-r border-b px-6 py-4">Kepala</td>
                            <td className="border-r border-b px-6 py-4">2024</td>
                            <td className="border-r border-b px-6 py-4">
                                <div className="flex flex-col jutify-center items-center gap-2">
                                    <ButtonGreen className="w-full" halaman_url={`/DataMaster/masterjabatan/1`}>Edit</ButtonGreen>
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