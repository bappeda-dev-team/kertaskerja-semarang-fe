'use client'

import React, { useEffect, useState } from "react";
import { LoadingClip } from "@/components/global/Loading";
import { getOpdTahun } from "@/components/lib/Cookie";
import { TahunNull } from "@/components/global/OpdTahunNull";
import { getToken } from "@/components/lib/Cookie";
import { TbCircleX, TbCircleCheck, TbMistOff, TbMist } from "react-icons/tb";
import { ButtonBlackBorder } from "@/components/global/Button";
import { AlertQuestion } from "@/components/global/Alert";

interface IKU {
    indikator_id: string;
    sumber: string;
    asal_iku: string;
    rumus_perhitungan: string;
    sumber_data: string;
    is_active: boolean;
    indikator: string;
    created_at: string;
    target: Target[];
}

interface Target {
    target: string;
    satuan: string;
}

interface table {
    tahun_awal: string;
    kode_opd: string;
    tahun_akhir: string;
    jenis: string;
    tahun_list: string[];
}

const TableOpd: React.FC<table> = ({ kode_opd, tahun_awal, tahun_akhir, jenis, tahun_list }) => {

    const [IKU, setIKU] = useState<IKU[]>([]);

    const [TableAktif, setTableAktif] = useState<boolean>(true);
    const [TableNonAktif, setTableNonAktif] = useState<boolean>(false);

    const [Error, setError] = useState<boolean | null>(null);
    const [DataNull, setDataNull] = useState<boolean | null>(null);

    const [Loading, setLoading] = useState<boolean | null>(null);
    const [Tahun, setTahun] = useState<any>(null);
    const token = getToken();

    useEffect(() => {
        const data = getOpdTahun();
        if (data.tahun) {
            const tahun = {
                value: data.tahun.value,
                label: data.tahun.label,
            }
            setTahun(tahun);
        }
    }, []);

    useEffect(() => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const fetchIkuOpd = async () => {
            setLoading(true);
            setError(false);
            setDataNull(false);
            try {
                const response = await fetch(`${API_URL}/indikator_utama/opd/${kode_opd}/${tahun_awal}/${tahun_akhir}/${jenis}`, {
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const result = await response.json();
                const isActiveFilter = TableAktif;
                const filteredData = result.data?.filter((n: any) => n.is_active === isActiveFilter) || [];

                if (result.code === 200 || result.code === 201) {
                    if (filteredData.length === 0) {
                        setDataNull(true);
                    }
                    setIKU(filteredData);
                } else {
                    console.error(result.data);
                    setError(true);
                    setIKU([]); // Kosongkan data jika ada error dari API
                }
            } catch (err) {
                setError(true);
                console.error(err)
            } finally {
                setLoading(false);
            }
        }
        if (Tahun?.value != undefined) {
            fetchIkuOpd();
        }
    }, [token, Tahun, tahun_awal, tahun_akhir, jenis, kode_opd, TableAktif, TableNonAktif]);

    if (Loading) {
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <LoadingClip className="mx-5 py-5" />
            </div>
        );
    } else if (Error) {
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="text-red-500 font-bold mx-5 py-5">Error, Periksa koneksi internet atau database server, jika error berlanjut silakan hubungi tim developer</h1>
            </div>
        )
    } else if (Tahun?.value == undefined) {
        return <TahunNull />
    }

    return (
        <>
            <div className="flex px-3 py-2 justify-center items-center gap-1">
                <button
                    className={`flex items-center justify-center gap-1 px-4 py-2 rounded-lg w-full cursor-pointer 
                                    ${TableAktif ? "bg-emerald-500 text-white" : "border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"}
                                `}
                    onClick={() => {
                        setTableAktif(true);
                        setTableNonAktif(false);
                    }}
                >
                    <TbCircleCheck />
                    IKU yang aktif
                </button>
                <button
                    className={`flex items-center justify-center gap-1 px-4 py-2 rounded-lg w-full cursor-pointer 
                                    ${TableNonAktif ? "bg-orange-500 text-white" : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"}
                                `}
                    onClick={() => {
                        setTableAktif(false);
                        setTableNonAktif(true);
                    }}
                >
                    <TbCircleX />
                    IKU yang tidak aktif
                </button>
            </div>
            <div className="overflow-auto m-2 rounded-t-xl border">
                <table className="w-full">
                    <thead>
                        <tr className="bg-emerald-500 text-white">
                            <th rowSpan={2} className="border-r border-b px-6 py-3 text-center">No</th>
                            <th rowSpan={2} className="border-r border-b px-6 py-3 min-w-[300px]">Indikator Utama</th>
                            <th rowSpan={2} className="border-r border-b px-6 py-3 min-w-[200px]">Rumus Perhitungan</th>
                            <th rowSpan={2} className="border-r border-b px-6 py-3 min-w-[200px]">Sumber Data</th>
                            {tahun_list.map((item: any) => (
                                <th key={item} colSpan={2} className="border-l border-b px-6 py-3 min-w-[100px]">{item}</th>
                            ))}
                        </tr>
                        <tr className="bg-emerald-500 text-white">
                            {tahun_list.map((item: any) => (
                                <React.Fragment key={item}>
                                    <th className="border-l border-b px-6 py-3 min-w-[50px]">Target</th>
                                    <th className="border-l border-b px-6 py-3 min-w-[50px]">Satuan</th>
                                </React.Fragment>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {DataNull ? (
                            <tr>
                                <td className="px-6 py-3" colSpan={30}>
                                    Data Kosong / Belum Ditambahkan
                                </td>
                            </tr>
                        ) : (
                            IKU.map((item, index) => (
                                <tr key={item.indikator_id || index}>
                                    <td className={`border-x border-b ${TableAktif ? "border-emerald-500" : "border-orange-500"} py-4 px-3 text-center`}>
                                        {index + 1}
                                    </td>
                                    <td className={`border-b ${TableAktif ? "border-emerald-500" : "border-orange-500"} px-6 py-4`}>
                                        <p>{item.indikator || "-"}</p>
                                        <p className={`text-gray-500 text-xs`}>({item.asal_iku || "-"})</p>
                                        <p className={`text-red-500 text-xs`}>{item.is_active === false ? "(Tematik tidak aktif)" : ""}</p>
                                    </td>
                                    <td className={`border-r border-b ${TableAktif ? "border-emerald-500" : "border-orange-500"} pr-6`}>
                                        <div className={`flex flex-col justify-center items-center gap-2`}>
                                            <ButtonBlackBorder
                                                className={`flex items-center gap-1 w-full text-sm`}
                                                onClick={() => {
                                                    if (TableAktif) {
                                                        AlertQuestion("Non Aktifkan IKU?", "", "question", "NonAktifkan", "Batal").then((result) => {
                                                            if (result.isConfirmed) {

                                                            }
                                                        });
                                                    } else {
                                                        AlertQuestion("Aktifkan IKU?", "", "question", "Aktifkan", "Batal").then((result) => {
                                                            if (result.isConfirmed) {

                                                            }
                                                        });
                                                    }
                                                }}
                                            >
                                                {TableAktif ?
                                                    <>
                                                        <TbMistOff />
                                                        NonAktifkan
                                                    </>
                                                    :
                                                    <>
                                                        <TbMist />
                                                        Aktifkan
                                                    </>
                                                }
                                            </ButtonBlackBorder>
                                        </div>
                                    </td>
                                    <td className={`border-r border-b ${TableAktif ? "border-emerald-500" : "border-orange-500"} px-6 py-4`}>
                                        {item.rumus_perhitungan || "-"}
                                    </td>
                                    <td className={`border-r border-b ${TableAktif ? "border-emerald-500" : "border-orange-500"} px-6 py-4`}>
                                        {item.sumber_data || "-"}
                                    </td>
                                    {item.target.map((t: Target, index: number) => (
                                        <React.Fragment key={index}>
                                            <td className={`border-r border-b ${TableAktif ? "border-emerald-500" : "border-orange-500"} px-6 py-4 text-center`}>
                                                {t.target || "-"}
                                            </td>
                                            <td className={`border-r border-b ${TableAktif ? "border-emerald-500" : "border-orange-500"} px-6 py-4 text-center`}>
                                                {t.satuan || "-"}
                                            </td>
                                        </React.Fragment>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableOpd;
