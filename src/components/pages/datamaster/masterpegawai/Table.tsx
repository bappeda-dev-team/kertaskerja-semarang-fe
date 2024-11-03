'use client'

import { ButtonGreen, ButtonSkyBorder } from "@/components/global/Button";

const Table = () => {
    return(
        <>
            <div className="overflow-auto m-2 rounded-t-xl border">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#99CEF5] text-white">
                            <th className="border-r border-b px-6 py-3 min-w-[50px]">No</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Nama/NIP</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Jabatan</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">OPD</th>
                            <th colSpan={2} className="border-r border-b px-6 py-3 min-w-[200px]">Roles</th>
                            <th className="border-l border-b px-6 py-3 min-w-[200px]">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-r border-b px-6 py-4">1</td>
                            <td className="border-r border-b px-6 py-4">
                                <div className="flex flex-col items-center">
                                    <p>Nama Lengkap</p>
                                    <p>10874013874</p>
                                </div>
                            </td>
                            <td className="border-r border-b px-6 py-4">Eselon 4</td>
                            <td className="border-r border-b px-6 py-4">Dinas Pendidikan</td>
                            <td className="border-r border-b px-6 py-4">Aktif</td>
                            <td className="border-r border-b px-6 py-4">
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <ButtonSkyBorder className="w-full">
                                        Aktifkan
                                    </ButtonSkyBorder>
                                    <ButtonSkyBorder className="w-full">
                                        Aktifkan
                                    </ButtonSkyBorder>
                                </div>
                            </td>
                            <td className="border-r border-b px-6 py-4">
                                <div className="flex flex-col jutify-center items-center">
                                    <ButtonGreen>Edit</ButtonGreen>
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