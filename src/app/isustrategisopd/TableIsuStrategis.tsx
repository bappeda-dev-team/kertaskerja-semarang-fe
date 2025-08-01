import { ButtonSkyBorder, ButtonRedBorder } from "@/components/global/Button";
import { TbPencil, TbTrash } from "react-icons/tb";
import { AlertQuestion } from "@/components/global/Alert";
import React from "react";

interface table {
    id_periode: number;
    tahun_awal: string;
    tahun_akhir: string;
    jenis: string;
    tahun_list: string[];
}

const TableIsuStrategis: React.FC<table> = ({ id_periode, tahun_awal, tahun_akhir, jenis, tahun_list }) => {
    return (
        <div className="overflow-auto m-2 rounded-t-xl border">
            <table className="w-full">
                <thead>
                    <tr className="bg-emerald-500 text-white">
                        <th rowSpan={2} className="border-r border-b px-3 py-3 w-[50px]">No</th>
                        <th rowSpan={2} className="border-r border-b px-6 py-3">Bidang Urusan</th>
                        <th rowSpan={2} colSpan={2} className="border-r border-b px-6 py-3">Isu Strategis</th>
                        <th rowSpan={2} className="border-r border-b px-6 py-3">Permasalahan</th>
                        <th rowSpan={2} className="border-r border-b px-6 py-3">Nama Data Dukung</th>
                        <th rowSpan={2} className="border-r border-b px-6 py-3">Narasi Data Dukung</th>
                        {tahun_list.map((item: any) => (
                            <th key={item} colSpan={2} className="border-r border-b px-6 py-3">{item}</th>
                        ))}
                        <th rowSpan={2} className="border-r border-b px-6 py-3">Aksi</th>
                    </tr>
                    <tr className={`bg-emerald-600 text-white`}>
                        {tahun_list.map((item: any) => (
                            <React.Fragment key={item}>
                                <th className="border-r border-b px-6 py-1 min-w-[50px]">Jumlah</th>
                                <th className="border-r border-b px-6 py-1 min-w-[50px]">Satuan</th>
                            </React.Fragment>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-x border-b border-emerald-500 py-4 px-3 text-center">1</td>
                        <td className="border-r border-b border-emerald-500 px-6 py-4">(5.01) Penelitian dan Pengembangan</td>
                        <td className="border-r border-b border-emerald-500 px-6 py-4">Peningkatan Kualitas Perencanaan Inovasi Daerah</td>
                        <td className="border-r border-b border-emerald-500 px-6 py-4">
                            <div className="flex flex-col jutify-center items-center gap-2">
                                <ButtonSkyBorder
                                    className="flex items-center gap-1 w-full"
                                >

                                    <TbPencil />
                                    Edit
                                </ButtonSkyBorder>
                                <ButtonRedBorder
                                    className="flex items-center gap-1 w-full"
                                    onClick={() => {
                                        AlertQuestion("Hapus?", "Data Isu Strategis akan di hapus?", "question", "Hapus", "Batal").then((result) => {
                                            if (result.isConfirmed) {

                                            }
                                        });
                                    }}
                                >
                                    <TbTrash />
                                    Hapus
                                </ButtonRedBorder>
                            </div>
                        </td>
                        <td className="border-r border-b border-emerald-500 px-6 py-4">Belum optimalnya antusiasme dan partisipasi Perangkat Daerah/masyarakat dalam melakukan inovasi</td>
                        <td className="border-r border-b border-emerald-500 px-6 py-4">Rekapitulasi Penyusunan Proposal Inovasi</td>
                        <td className="border-r border-b border-emerald-500 px-6 py-4">Narasi Data Dukung</td>
                        {tahun_list.map((item: any) => (
                            <React.Fragment key={item}>
                                <td className="border-r border-b border-emerald-500 px-6 py-4 text-center">50</td>
                                <td className="border-r border-b border-emerald-500 px-6 py-4 text-center">%</td>
                            </React.Fragment>
                        ))}
                        <td className="border-r border-b border-emerald-500 px-6 py-4">
                            <div className="flex flex-col jutify-center items-center gap-2">
                                <ButtonSkyBorder
                                    className="flex items-center gap-1 w-full"
                                >

                                    <TbPencil />
                                    Edit
                                </ButtonSkyBorder>
                                <ButtonRedBorder
                                    className="flex items-center gap-1 w-full"
                                    onClick={() => {
                                        AlertQuestion("Hapus?", "Data Permasalahan akan di hapus?", "question", "Hapus", "Batal").then((result) => {
                                            if (result.isConfirmed) {

                                            }
                                        });
                                    }}
                                >
                                    <TbTrash />
                                    Hapus
                                </ButtonRedBorder>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableIsuStrategis;