'use client'

import { ButtonRed, ButtonGreen, ButtonSky } from "@/components/global/Button";
import React, { useEffect, useState } from "react";
import { LoadingClip } from "@/components/global/Loading";
import { getOpdTahun } from "@/components/lib/Cookie";
import { TahunNull, OpdTahunNull } from "@/components/global/OpdTahunNull";
import { getToken, getUser } from "@/components/lib/Cookie";

interface Periode {
    tahun_awal: string;
    tahun_akhir: string;
}

interface Target {
    id: string;
    target: string;
    satuan: string;
    tahun: string;
}

interface Indikator {
    id: string;
    indikator: string;
    rumus_perhitungan: string;
    sumber_data: string;
    target: Target[];
}

interface Periode {
    tahun_awal: string;
    tahun_akhir: string;
}

interface TujuanPemda {
    id: number;
    tujuan_pemda: string;
    periode: Periode;
    visi: string;
    misi: string;
    indikator: Indikator[];
}

interface tujuan {
    pokin_id: number;
    nama_tematik: string;
    jenis_pohon: string;
    level_pohon: number;
    keterangan: string;
    tahun_pokin: string;
    is_active: boolean;
    tujuan_pemda: TujuanPemda[];
}

interface table {
    tahun_awal: string;
    tahun_akhir: string;
    jenis: string;
}

const Table: React.FC<table> = ({tahun_awal, tahun_akhir, jenis}) => {

    const [ReviewOpd, setReviewOpd] = useState<tujuan[]>([]);

    const [Error, setError] = useState<boolean | null>(null);
    const [DataNull, setDataNull] = useState<boolean | null>(null);
    const [Loading, setLoading] = useState<boolean | null>(null);

    const [Tahun, setTahun] = useState<any>(null);
    const [SelectedOpd, setSelectedOpd] = useState<any>(null);
    const [User, setUser] = useState<any>(null);
    const token = getToken();

    useEffect(() => {
        const data = getOpdTahun();
        const fetchUser = getUser();
        if (fetchUser) {
            setUser(fetchUser.user);
        }
        if (data.tahun) {
            const tahun = {
                value: data.tahun.value,
                label: data.tahun.label,
            }
            setTahun(tahun);
        }
        if(data.opd){
            const opd = {
                value: data.opd.value,
                label: data.opd.label,
            }
            setSelectedOpd(opd);
        }
    }, []);

    useEffect(() => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const fetchTujuanPemda = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${API_URL}/tujuan_pemda/findall_with_pokin/${tahun_awal}/${tahun_akhir}/${jenis}`, {
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const result = await response.json();
                const data = result.data;
                if (data.length == 0) {
                    setDataNull(true);
                    setReviewOpd([]);
                } else if (result.code == 500) {
                    setReviewOpd([]);
                } else {
                    setDataNull(false);
                    setReviewOpd(data);
                }
            } catch (err) {
                setError(true);
                console.error(err)
            } finally {
                setLoading(false);
            }
        }
        if (User?.roles !== undefined) {
            fetchTujuanPemda();
        }
    }, [token, User, tahun_awal, tahun_akhir, jenis]);

    if (Loading) {
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <LoadingClip className="mx-5 py-5" />
            </div>
        );
    } else if (Error) {
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="text-red-500 font-bold mx-5 py-5">Reload Halaman, Periksa koneksi internet atau database server</h1>
            </div>
        )
    } else if (Tahun?.value == undefined) {
        return <TahunNull />
    } else if (SelectedOpd?.value == undefined) {
        return <OpdTahunNull />
    }

    return (
        <>
            <div className="overflow-auto m-2 rounded-t-xl border">
                <table className="w-full">
                    <thead>
                        <tr className="bg-emerald-500 text-white">
                            <th className="border-r border-b px-6 py-3 min-w-[50px] text-center">No</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Nama Pohon</th>
                            <th className="border-r border-b px-6 py-3 min-w-[300px]">Review</th>
                            <th className="border-r border-b px-6 py-3 min-w-[300px]">Keterangan</th>
                            <th className="border-r border-b px-6 py-3 min-w-[100px]">Waktu Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DataNull ?
                            <tr>
                                <td className="px-6 py-3" colSpan={30}>
                                    Data Kosong / Belum Ditambahkan
                                </td>
                            </tr>
                            :
                            ReviewOpd.map((data: tujuan, index: number) => {
                                // Cek apakah data.tujuan_pemda ada
                                const hasTujuanPemda = data.tujuan_pemda.length != 0;
                                const TotalRow = data.tujuan_pemda.reduce((total, item) => total + (item.indikator == null ? 1 : item.indikator.length), 0) + data.tujuan_pemda.length + 1;

                                return (
                                    <React.Fragment key={index}>
                                        {/* Baris Utama */}
                                        <tr>
                                            <td className="border-x border-b border-emerald-500 px-6 py-4 text-center" rowSpan={data.tujuan_pemda.length === 0 ? 2 : TotalRow}>
                                                {index + 1}
                                            </td>
                                            <td className="border-r border-b border-emerald-500 px-6 py-4" rowSpan={data.tujuan_pemda.length === 0 ? 2 : TotalRow}>
                                                <div className="flex flex-col gap-2">
                                                    {data.nama_tematik || "-"}
                                                </div>
                                            </td>
                                        </tr>
                                        {hasTujuanPemda ?
                                            data.tujuan_pemda.map((item: TujuanPemda) => (
                                                <React.Fragment key={item.id}>
                                                    <tr>
                                                        <td className="border-x border-b border-emerald-500 px-6 py-6 h-[150px]" rowSpan={item.indikator !== null ? item.indikator.length + 1 : 2}>
                                                            {item.tujuan_pemda || "-"}
                                                        </td>
                                                        <td className="border-x border-b border-emerald-500 px-6 py-6 h-[150px]" rowSpan={item.indikator !== null ? item.indikator.length + 1 : 2}>
                                                            {item.visi || "-"} / {item.misi || "-"}
                                                        </td>
                                                    </tr>
                                                </React.Fragment>
                                            ))
                                            :
                                            <td className="border-r border-b border-emerald-500 px-6 py-4 bg-red-400 text-white" colSpan={30}>
                                                Tujuan Pemda belum di buat
                                            </td>
                                        }
                                    </React.Fragment>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;
