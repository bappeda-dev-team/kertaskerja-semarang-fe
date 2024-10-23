'use client'

import { ButtonGreenBorder, ButtonRedBorder, ButtonSky, ButtonSkyBorder } from "@/components/global/Button";
import { useState, useEffect } from "react";
import { getOpdTahun } from "@/components/lib/Cookie";
import { TbCirclePlus, TbPencil, TbPencilDown, TbTrash } from "react-icons/tb";

interface type_rekin {
    id : string,
    rencana_kinerja : string,
    tahun : string,
    status_rencana_kinerja : string,
    catatan : string,
    pegawai_id : string,
    indikators : indikators[],
}

interface indikators {
    id : string,
    sasaran_id : string,
    indikator : string,
    target : number,
    satuan : string,
}

export const TablePerencanaan = () => {

    const [Tahun, setTahun] = useState<any>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [rekin, setRekin] = useState<type_rekin[]>([]);

    // useEffect(() => {
    //     const fetchRekin = async() => {
    //         setLoading(true)
    //         try{
    //             const response = await fetch("localhost:3000/data");
    //             const data = await response.json();
    //             setRekin(data);
    //         } catch(err){
    //             alert("gagal lur")
    //             console.error(err)
    //         } finally{
    //             setLoading(false);
    //         }
    //     }
    //     fetchRekin();
    // }, [])

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

    if(loading){
        return <h1>Loading</h1>
    }

    return(
        <div className="overflow-auto m-2 rounded-t-xl border">
            <table className="w-full">
                <thead>
                    <tr className="bg-[#99CEF5] text-white">
                        <th className="border-r border-b px-6 py-3 min-w-[50px]">No</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Pohon Kinerja</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Rencana Kinerja</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Tahun</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Indikator Rencana Kinerja</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Target</th>
                        <th className="border-r border-b px-6 py-3 min-w-[200px]">Satuan</th>
                        <th className="border-r border-b px-6 py-3 min-w-[300px]">Status</th>
                        <th className="border-l border-b px-6 py-3 min-w-[200px]">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-r border-b px-6 py-4">1</td>
                        <td className="border-r border-b px-6 py-4">Penyusunan dokumen perencanaan sesuai SOP</td>
                        <td className="border-r border-b px-6 py-4">Tersusunya dokumen rancangan aplikasi rencana kinerja terintegrasi</td>
                        <td className="border-r border-b px-6 py-4">2024</td>
                        <td className="border-r border-b px-6 py-4">Dokumen rancangan aplikasi</td>
                        <td className="border-r border-b px-6 py-4 text-center">1</td>
                        <td className="border-r border-b px-6 py-4">dokumen</td>
                        <td className="border-r border-b px-6 py-4">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <button className="w-full rounded-lg bg-green-600 py-1 font-semibold">SIAP DITARIK SKP</button>
                                <button className="w-full rounded-lg bg-green-600 py-1 font-semibold">MANRISK SIAP DIVERIFIKASI</button>
                            </div>
                        </td>
                        <td className="border-r border-b px-6 py-4">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <ButtonGreenBorder 
                                    className="w-full"
                                    halaman_url={`/rencanakinerja/1`}
                                >
                                    <TbPencilDown className="mr-1"/>
                                    Input Rincian
                                </ButtonGreenBorder>
                                <ButtonSkyBorder className="w-full">
                                    <TbPencil className="mr-1"/>
                                    Edit Rekin
                                </ButtonSkyBorder>
                                <ButtonRedBorder className="w-full">
                                    <TbTrash className="mr-1"/>
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

export const TableLaporan = () => {

    const [Tahun, setTahun] = useState<any>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [rekin, setRekin] = useState<type_rekin[]>([]);

    // useEffect(() => {
    //     const fetchRekin = async() => {
    //         setLoading(true)
    //         try{
    //             const response = await fetch("localhost:3000/data");
    //             const data = await response.json();
    //             setRekin(data);
    //         } catch(err){
    //             alert("gagal lur")
    //             console.error(err)
    //         } finally{
    //             setLoading(false);
    //         }
    //     }
    //     fetchRekin();
    // }, [])

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

    if(loading){
        return <h1>Loading</h1>
    }

    return(
        <div className="mt-3 rounded-xl shadow-lg border">
            <div className="flex items-center justify-between border-b px-5 py-5">
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl uppercase">rencana kinerja {Tahun?.label}</h1>
                    <ButtonSky className="flex items-center justify-center">
                        <TbCirclePlus className="mr-1"/>
                        Rencana kinerja baru
                    </ButtonSky>
                </div>
                <div className="flex flex-col items-end">
                    <p>Nama Lengkap Pegawai</p>
                    <p>192730187240817204</p>
                    <p>Roles: Eselon 3</p>
                </div>
            </div>
            <div className="overflow-auto m-2 rounded-t-xl border">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#99CEF5] text-white">
                            <th className="border-r border-b px-6 py-3 min-w-[50px]">No</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Pohon Kinerja</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Rencana Kinerja</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Tahun</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Indikator Rencana Kinerja</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Target</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Satuan</th>
                            <th className="border-r border-b px-6 py-3 min-w-[300px]">Status</th>
                            <th className="border-l border-b px-6 py-3 min-w-[200px]">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-r border-b px-6 py-4">1</td>
                            <td className="border-r border-b px-6 py-4">Penyusunan dokumen perencanaan sesuai SOP</td>
                            <td className="border-r border-b px-6 py-4">Tersusunya dokumen rancangan aplikasi rencana kinerja terintegrasi</td>
                            <td className="border-r border-b px-6 py-4">2024</td>
                            <td className="border-r border-b px-6 py-4">Dokumen rancangan aplikasi</td>
                            <td className="border-r border-b px-6 py-4 text-center">1</td>
                            <td className="border-r border-b px-6 py-4">dokumen</td>
                            <td className="border-r border-b px-6 py-4">
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <button className="w-full rounded-lg bg-green-600 py-1 font-semibold">SIAP DITARIK SKP</button>
                                    <button className="w-full rounded-lg bg-green-600 py-1 font-semibold">MANRISK SIAP DIVERIFIKASI</button>
                                </div>
                            </td>
                            <td className="border-r border-b px-6 py-4">
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <ButtonGreenBorder className="w-full">
                                        <TbPencilDown className="mr-1"/>
                                        Input Rincian
                                    </ButtonGreenBorder>
                                    <ButtonSkyBorder className="w-full">
                                        <TbPencil className="mr-1"/>
                                        Edit Rekin
                                    </ButtonSkyBorder>
                                    <ButtonRedBorder className="w-full">
                                        <TbTrash className="mr-1"/>
                                        Hapus
                                    </ButtonRedBorder>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}