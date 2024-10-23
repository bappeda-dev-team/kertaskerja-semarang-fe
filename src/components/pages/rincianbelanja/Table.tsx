'use client'

import { getOpdTahun } from "@/components/lib/Cookie";
import { useEffect, useState } from "react";
import { ButtonGreen, ButtonGreenBorder, ButtonSky, ButtonSkyBorder } from "@/components/global/Button";
import { TbBook, TbKeyFilled, TbPencil, TbPrinter, TbReceipt } from "react-icons/tb";

export const TableLaporan = () => {

    const [Tahun, setTahun] = useState<any>(null);

    useEffect(() => {
        const data = getOpdTahun();
        if(data){
            if(data.tahun){
                const tahun_value = {
                    value: data.tahun.value,
                    label: data.tahun.label,
                }
                setTahun(tahun_value);
            }
        }
    },[])

    return(
        <div className="overflow-auto m-3 rounded-t-xl border">
            <table className="w-full">
                <thead className="bg-[#99CEF5] text-white">
                    <tr>
                        <th rowSpan={2} className="border-r border-b px-6 py-3 min-w-[50px]">No</th>
                        <th rowSpan={2} className="border-r border-b px-6 py-3 min-w-[200px]">Pemilik Rencana</th>
                        <th rowSpan={2} className="border-r border-b px-6 py-3 min-w-[200px]">Rencana Kinerja</th>
                        <th rowSpan={2} className="border-r border-b px-6 py-3 min-w-[200px]">Tahun</th>
                        <th rowSpan={2} className="border-r border-b px-6 py-3 min-w-[200px]">Indikator Kinerja</th>
                        <th rowSpan={2} className="border-r border-b px-6 py-3 min-w-[200px]">Target</th>
                        <th rowSpan={2} className="border-r border-b px-6 py-3 min-w-[200px]">Satuan</th>
                        <th colSpan={3} className="border-r border-b px-6 py-3 min-w-[200px]">Anggaran</th>
                        <th rowSpan={2} className="border-l border-b px-6 py-3 min-w-[250px]">Aksi</th>
                    </tr>
                    <tr>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Rankir-1</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Rankir-2</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Penetapan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-r border-b px-6 py-4">1</td>
                        <td colSpan={3} className="border-r border-b px-6 py-4">Subkegiatan: penyusunan dokumen perencanaan perangkat daerah</td>
                        <td className="border-r border-b px-6 py-4">jumlah dokumen perencanaan, pengendalian, dan evaluasi perangkat daerah</td>
                        <td className="border-r border-b px-6 py-4">7</td>
                        <td className="border-r border-b px-6 py-4">Dokumen</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">Rp. 102.353.000</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <ButtonSky className="w-full">
                                    <TbBook className="mr-1"/>
                                    Tampilkan
                                </ButtonSky>
                                <ButtonGreenBorder className="w-full">
                                    <TbPrinter className="mr-1"/>
                                    Cetak rincian belanja
                                </ButtonGreenBorder>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-r border-b px-6 py-4">1.1</td>
                        <td className="border-r border-b px-6 py-4">Adi Sucipto</td>
                        <td className="border-r border-b px-6 py-4">tersusun dokumen rancangan aplikasi rencana kinerja terintegrasi</td>
                        <td className="border-r border-b px-6 py-4">2024</td>
                        <td className="border-r border-b px-6 py-4">dokumen rancangan aplikasi</td>
                        <td className="border-r border-b px-6 py-4">1</td>
                        <td className="border-r border-b px-6 py-4">dokumen</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <ButtonGreen className="w-full">
                                    <TbReceipt className="mr-1"/>
                                    Rincian
                                </ButtonGreen>
                                <ButtonSkyBorder className="w-full">
                                    <TbPencil className="mr-1"/>
                                    Edit
                                </ButtonSkyBorder>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={7} className="border-r border-b px-6 py-4">renaksi 1: rapat koordinasi</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">
                            
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={7} className="border-r border-b px-6 py-4">renaksi 2: penyusunan KAK pengadaan paket pengerjaan</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">
                            
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={7} className="border-r border-b px-6 py-4">renaksi 3: Penyusunan tim pengadaan</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">
                            
                        </td>
                    </tr>
                    <tr>
                        <td className="border-r border-b px-6 py-4">1</td>
                        <td colSpan={3} className="border-r border-b px-6 py-4">Subkegiatan: penyusunan dokumen perencanaan perangkat daerah</td>
                        <td className="border-r border-b px-6 py-4">jumlah dokumen perencanaan, pengendalian, dan evaluasi perangkat daerah</td>
                        <td className="border-r border-b px-6 py-4">7</td>
                        <td className="border-r border-b px-6 py-4">Dokumen</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">Rp. 102.353.000</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <ButtonSky className="w-full">
                                    <TbBook className="mr-1"/>
                                    Tampilkan
                                </ButtonSky>
                                <ButtonGreenBorder className="w-full">
                                    <TbPrinter className="mr-1"/>
                                    Cetak rincian belanja
                                </ButtonGreenBorder>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-r border-b px-6 py-4">1.1</td>
                        <td className="border-r border-b px-6 py-4">Adi Sucipto</td>
                        <td className="border-r border-b px-6 py-4">tersusun dokumen rancangan aplikasi rencana kinerja terintegrasi</td>
                        <td className="border-r border-b px-6 py-4">2024</td>
                        <td className="border-r border-b px-6 py-4">dokumen rancangan aplikasi</td>
                        <td className="border-r border-b px-6 py-4">1</td>
                        <td className="border-r border-b px-6 py-4">dokumen</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <ButtonGreen className="w-full">
                                    <TbReceipt className="mr-1"/>
                                    Rincian
                                </ButtonGreen>
                                <ButtonSkyBorder className="w-full">
                                    <TbPencil className="mr-1"/>
                                    Edit
                                </ButtonSkyBorder>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={7} className="border-r border-b px-6 py-4">renaksi 1: rapat koordinasi</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">
                            
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={7} className="border-r border-b px-6 py-4">renaksi 2: penyusunan KAK pengadaan paket pengerjaan</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">
                            
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={7} className="border-r border-b px-6 py-4">renaksi 3: Penyusunan tim pengadaan</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4">Rp. 0,0</td>
                        <td className="border-r border-b px-6 py-4">
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export const TablePerencanaan = () => {

    const [Tahun, setTahun] = useState<any>(null);

    useEffect(() => {
        const data = getOpdTahun();
        if(data){
            if(data.tahun){
                const tahun_value = {
                    value: data.tahun.value,
                    label: data.tahun.label,
                }
                setTahun(tahun_value);
            }
        }
    },[])

    return(
        <div className="mt-3 rounded-xl shadow-lg border">
            <div className="flex items-center justify-between border-b px-5 py-5">
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl uppercase">Rincian Belanja {Tahun?.label}</h1>
                </div>
                <div className="flex flex-col items-end">
                    <p>Nama Lengkap Pegawai</p>
                    <p>192730187240817204</p>
                    <p>Roles: Eselon 3</p>
                </div>
            </div>
            <div className="overflow-auto m-2 rounded-t-xl border">
            <table className="w-full">
                <thead className="bg-[#99CEF5] text-white">
                    <tr>
                        <th className="border-r border-b px-6 py-3 min-w-[50px]">No</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Pemilik Rencana</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Rencana Kinerja</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Tahun</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Indikator Kinerja</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Target</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Satuan</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Anggaran</th>
                        <th className="border-l border-b px-6 py-3 min-w-[250px]">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-r border-b px-6 py-4">1</td>
                        <td colSpan={6} className="border-r border-b px-6 py-4">Subkegiatan: penyusunan dokumen perencanaan perangkat daerah</td>
                        <td className="border-r border-b px-6 py-4">Rp. 102.353.000</td>
                        <td className="border-r border-b px-6 py-4">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <ButtonSky className="w-full">
                                    <TbBook className="mr-1"/>
                                    Tampilkan
                                </ButtonSky>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-r border-b px-6 py-4">1.1</td>
                        <td className="border-r border-b px-6 py-4">Adi Sucipto</td>
                        <td className="border-r border-b px-6 py-4">tersusun dokumen rancangan aplikasi rencana kinerja terintegrasi</td>
                        <td className="border-r border-b px-6 py-4">2024</td>
                        <td className="border-r border-b px-6 py-4">dokumen rancangan aplikasi</td>
                        <td className="border-r border-b px-6 py-4">1</td>
                        <td className="border-r border-b px-6 py-4">dokumen</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <ButtonGreenBorder className="w-full">
                                    <TbReceipt className="mr-1"/>
                                    Edit Gelondong
                                </ButtonGreenBorder>
                                <ButtonSkyBorder className="w-full">
                                    <TbPencil className="mr-1"/>
                                    Edit Rincian
                                </ButtonSkyBorder>
                                <ButtonGreenBorder className="w-full">
                                    <TbReceipt className="mr-1"/>
                                    Edit Penetapan
                                </ButtonGreenBorder>
                                <ButtonSkyBorder className="w-full">
                                    <TbKeyFilled className="mr-1"/>
                                    Kunci Anggaran
                                </ButtonSkyBorder>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={7} className="border-r border-b px-6 py-4">renaksi 1: rapat koordinasi</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4"></td>
                    </tr>
                    <tr>
                        <td colSpan={7} className="border-r border-b px-6 py-4">renaksi 2: penyusunan KAK pengadaan paket pengerjaan</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4"></td>
                    </tr>
                    <tr>
                        <td colSpan={7} className="border-r border-b px-6 py-4">renaksi 3: Penyusunan tim pengadaan</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4"></td>
                    </tr>
                    <tr>
                        <td className="border-r border-b px-6 py-4">1</td>
                        <td colSpan={6} className="border-r border-b px-6 py-4">Subkegiatan: penyusunan dokumen perencanaan perangkat daerah</td>
                        <td className="border-r border-b px-6 py-4">Rp. 102.353.000</td>
                        <td className="border-r border-b px-6 py-4">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <ButtonSky className="w-full">
                                    <TbBook className="mr-1"/>
                                    Tampilkan
                                </ButtonSky>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-r border-b px-6 py-4">1.1</td>
                        <td className="border-r border-b px-6 py-4">Adi Sucipto</td>
                        <td className="border-r border-b px-6 py-4">tersusun dokumen rancangan aplikasi rencana kinerja terintegrasi</td>
                        <td className="border-r border-b px-6 py-4">2024</td>
                        <td className="border-r border-b px-6 py-4">dokumen rancangan aplikasi</td>
                        <td className="border-r border-b px-6 py-4">1</td>
                        <td className="border-r border-b px-6 py-4">dokumen</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <ButtonGreenBorder className="w-full">
                                    <TbReceipt className="mr-1"/>
                                    Edit Gelondong
                                </ButtonGreenBorder>
                                <ButtonSkyBorder className="w-full">
                                    <TbPencil className="mr-1"/>
                                    Edit Rincian
                                </ButtonSkyBorder>
                                <ButtonGreenBorder className="w-full">
                                    <TbReceipt className="mr-1"/>
                                    Edit Penetapan
                                </ButtonGreenBorder>
                                <ButtonSkyBorder className="w-full">
                                    <TbKeyFilled className="mr-1"/>
                                    Kunci Anggaran
                                </ButtonSkyBorder>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={7} className="border-r border-b px-6 py-4">renaksi 1: rapat koordinasi</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4"></td>
                    </tr>
                    <tr>
                        <td colSpan={7} className="border-r border-b px-6 py-4">renaksi 2: penyusunan KAK pengadaan paket pengerjaan</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4"></td>
                    </tr>
                    <tr>
                        <td colSpan={7} className="border-r border-b px-6 py-4">renaksi 3: Penyusunan tim pengadaan</td>
                        <td className="border-r border-b px-6 py-4">Rp. 120.235.234</td>
                        <td className="border-r border-b px-6 py-4"></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}