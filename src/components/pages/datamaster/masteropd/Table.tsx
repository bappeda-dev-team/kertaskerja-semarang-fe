'use client'

import { ButtonGreen } from "@/components/global/Button";

const Table = () => {
    return(
        <>
            <div className="overflow-auto m-2 rounded-t-xl border">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#99CEF5] text-white">
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">K/L</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">OPD</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Kode OPD</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Urusan</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Bidang Urusan</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Nama Kepala OPD</th>
                            <th className="border-r border-b px-6 py-3 min-w-[300px]">NIP Kepala OPD</th>
                            <th className="border-r border-b px-6 py-3 min-w-[300px]">Pangkat Kepala OPD</th>
                            <th className="border-l border-b px-6 py-3 min-w-[200px]">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-r border-b px-6 py-4">Kabupaten Madiun</td>
                            <td className="border-r border-b px-6 py-4">Dinas Pendidikan</td>
                            <td className="border-r border-b px-6 py-4">101.9324.565375.3</td>
                            <td className="border-r border-b px-6 py-4">Urusan pemerintah wajib yang berkaitan dengan pelayanan dasar</td>
                            <td className="border-r border-b px-6 py-4">Urusan pemerintah bidang pendidikan</td>
                            <td className="border-r border-b px-6 py-4">Nama ASN</td>
                            <td className="border-r border-b px-6 py-4">1290810941</td>
                            <td className="border-r border-b px-6 py-4">Eselon 4</td>
                            <td className="border-r border-b px-6 py-4">
                                <div className="flex flex-col jutify-center items-center">
                                    <ButtonGreen className="w-full" halaman_url={`/DataMaster/masteropd/1`}>Edit</ButtonGreen>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="border-r border-b px-6 py-4">Kabupaten Madiun</td>
                            <td className="border-r border-b px-6 py-4">Dinas Pendidikan</td>
                            <td className="border-r border-b px-6 py-4">101.9324.565375.3</td>
                            <td className="border-r border-b px-6 py-4">Urusan pemerintah wajib yang berkaitan dengan pelayanan dasar</td>
                            <td className="border-r border-b px-6 py-4">Urusan pemerintah bidang pendidikan</td>
                            <td className="border-r border-b px-6 py-4">Nama ASN</td>
                            <td className="border-r border-b px-6 py-4">1290810941</td>
                            <td className="border-r border-b px-6 py-4">Eselon 4</td>
                            <td className="border-r border-b px-6 py-4">
                                <div className="flex flex-col jutify-center items-center">
                                    <ButtonGreen className="w-full">Edit</ButtonGreen>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="border-r border-b px-6 py-4">Kabupaten Madiun</td>
                            <td className="border-r border-b px-6 py-4">Dinas Pendidikan</td>
                            <td className="border-r border-b px-6 py-4">101.9324.565375.3</td>
                            <td className="border-r border-b px-6 py-4">Urusan pemerintah wajib yang berkaitan dengan pelayanan dasar</td>
                            <td className="border-r border-b px-6 py-4">Urusan pemerintah bidang pendidikan</td>
                            <td className="border-r border-b px-6 py-4">Nama ASN</td>
                            <td className="border-r border-b px-6 py-4">1290810941</td>
                            <td className="border-r border-b px-6 py-4">Eselon 4</td>
                            <td className="border-r border-b px-6 py-4">
                                <div className="flex flex-col jutify-center items-center">
                                    <ButtonGreen className="w-full">Edit</ButtonGreen>
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