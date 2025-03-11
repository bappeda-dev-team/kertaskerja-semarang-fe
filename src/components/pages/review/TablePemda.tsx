'use client'

import { ButtonRed, ButtonGreen, ButtonSky } from "@/components/global/Button";
import React, { useEffect, useState } from "react";
import { LoadingClip } from "@/components/global/Loading";
import { getOpdTahun } from "@/components/lib/Cookie";
import { TahunNull } from "@/components/global/OpdTahunNull";
import { getToken, getUser } from "@/components/lib/Cookie";
import { TbArrowBadgeDownFilled, TbSearch } from "react-icons/tb";


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

interface SasaranPemda {
    id_sasaran_pemda: number;
    sasaran_pemda: string;
    periode: Periode;
    indikator: Indikator[];
}

interface SubTematik {
    subtematik_id: number;
    nama_subtematik: string;
    jenis_pohon: string;
    level_pohon: number;
    sasaran_pemda: SasaranPemda[];
}

interface Sasaran {
    tematik_id: number;
    nama_tematik: string;
    subtematik: SubTematik[];
}

interface Periode_Header {
    id: number;
    tahun_awal: string;
    tahun_akhir: string;
    tahun_list: string[];
}

interface table {
    tahun_awal: string;
    tahun_akhir: string;
    jenis: string;
}

const TablePemda: React.FC<table> = ({ tahun_awal, tahun_akhir, jenis }) => {

    const [Data, setData] = useState<Sasaran[]>([]);

    const [User, setUser] = useState<any>(null);
    const [SelectedOpd, setSelectedOpd] = useState<any>(null);
    const [Tahun, setTahun] = useState<any>(null);
    const token = getToken();

    const [IsError, setIsError] = useState<boolean | null>(null);
    const [Loading, setLoading] = useState<boolean | null>(null);
    const [DataNull, setDataNull] = useState<boolean>(false);

    const [Show, setShow] = useState<{ [key: string]: boolean }>({});

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
        if (data.opd) {
            const opd = {
                value: data.opd.value,
                label: data.opd.label,
            }
            setSelectedOpd(opd);
        }
    }, []);

    useEffect(() => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const fetchSasaran = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_URL}/sasaran_pemda/findall/tahun_awal/${tahun_awal}/tahun_akhir/${tahun_akhir}/jenis_periode/${jenis}`, {
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const result = await response.json();
                const data = result.data;
                console.log(data);
                if (data == null) {
                    setDataNull(true);
                    setData([]);
                } else {
                    setDataNull(false);
                    setData(data);
                }
            } catch (err) {
                console.error(err);
                setIsError(true);
            } finally {
                setLoading(false);
            }
        }
        if (User?.roles !== undefined && Tahun?.value != undefined) {
            fetchSasaran();
        }
    }, [token, User, Tahun, SelectedOpd, tahun_awal, tahun_akhir, jenis]);

    const handleShow = (id: number) => {
        setShow((prev) => ({
            [id]: !prev[id],
        }));
    }

    if (Loading) {
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <LoadingClip className="mx-5 py-5" />
            </div>
        );
    } else if (IsError) {
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="text-red-500 font-bold mx-5 py-5">Periksa koneksi internet atau database server</h1>
            </div>
        )
    } else if (Tahun?.value == undefined) {
        return <TahunNull />
    }

    return (
        <>
            {DataNull ?
                <div className="px-6 py-3 border w-full rounded-xl">
                    Data Kosong / Belum Ditambahkan
                </div>
                :
                Data.map((data: Sasaran) => {
                    const isShown = Show[data.tematik_id] || false;

                    return (
                        <div className="flex flex-col m-2" key={data.tematik_id}>
                            <div
                                className={`flex justify-between border items-center p-5 rounded-xl text-emerald-500 cursor-pointer border-emerald-500 hover:bg-emerald-500 hover:text-white ${isShown ? "bg-emerald-500 text-white" : ""}`}
                                onClick={() => handleShow(data.tematik_id)}
                            >
                                <h1 className="font-semibold">Tematik - {data.nama_tematik}</h1>
                                <div className="flex items-center">
                                    <TbArrowBadgeDownFilled className={`transition-all duration-200 ease-in-out text-3xl ${isShown ? "" : "-rotate-90"}`} />
                                </div>
                            </div>
                            <div className={`transition-all duration-300 ease-in-out border-x border-b border-emerald-500 ${isShown ? "opacity-100 mx-4 p-5" : "max-h-0 opacity-0 pointer-events-none"}`}>
                                <div className="overflow-auto rounded-t-xl border">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-xm bg-emerald-500 text-white">
                                                <td className="border-r border-b px-6 py-3 max-w-[100px] text-center">No</td>
                                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Nama Pohon</td>
                                                <td className="border-r border-b px-6 py-3 min-w-[400px] text-center">Review</td>
                                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Keterangan</td>
                                                <td className="border-r border-b px-6 py-3 min-w-[100px]">Waktu Review</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.subtematik.length == 0 ?
                                                <tr>
                                                    <td className="px-6 py-3" colSpan={30}>
                                                        Data Kosong / Belum Ditambahkan
                                                    </td>
                                                </tr>
                                                :
                                                data.subtematik.map((item: SubTematik, index: number) => {
                                                    // Cek apakah item.tujuan_pemda ada
                                                    const hasSasaran = item.sasaran_pemda.length != 0;
                                                    // const hasSasaranPemda = item.sasaranpemda != "";
                                                    const [sasaranLength, indikatorLength] = hasSasaran
                                                        ? [
                                                            item.sasaran_pemda.length + 1,
                                                            item.sasaran_pemda.reduce((total, sasaran) => total + (sasaran.indikator.length === 0 ? 1 : sasaran.indikator.length), 0),
                                                        ]
                                                        : [1, 1];
                                                    return (
                                                        <React.Fragment key={item.subtematik_id}>
                                                            {/* NO & POHON */}
                                                            <tr>
                                                                <td className="border border-emerald-500 px-4 py-4 text-center" rowSpan={sasaranLength + (indikatorLength === 0 ? 1 : indikatorLength)}>
                                                                    {index + 1}
                                                                </td>
                                                                <td className="border border-emerald-500 px-6 py-4" rowSpan={sasaranLength + (indikatorLength === 0 ? 1 : indikatorLength)}>
                                                                    <p>{item.nama_subtematik}</p>
                                                                    <p className="uppercase text-emerald-500 text-xs">{item.jenis_pohon}</p>
                                                                </td>
                                                            </tr>
                                                            {/* SASARAN */}
                                                            {hasSasaran ?
                                                                item.sasaran_pemda.map((s: SasaranPemda) => (
                                                                    <React.Fragment key={s.id_sasaran_pemda}>
                                                                        <tr>
                                                                            <td className="border border-emerald-500 px-6 py-4 h-[150px]" rowSpan={s.indikator.length === 0 ? 2 : s.indikator.length + 1}>
                                                                                {s.sasaran_pemda || "-"}
                                                                            </td>
                                                                        </tr>
                                                                        {/* INDIKATOR */}
                                                                        {s.indikator.length == 0 ?
                                                                            <td className="border-r border-b border-emerald-500 px-6 py-4 bg-yellow-500 text-white" colSpan={30}>
                                                                                Indikator Kosong / Belum di Inputkan
                                                                            </td>
                                                                            :
                                                                            s.indikator.map((i: Indikator) => (
                                                                                <tr key={i.id}>
                                                                                    <td className="border-b border-r border-emerald-500 px-6 py-4">{i.indikator || "-"}</td>
                                                                                    <td className="border-b border-r border-emerald-500 px-6 py-4">{i.rumus_perhitungan || "-"}</td>
                                                                                </tr>
                                                                            ))
                                                                        }
                                                                    </React.Fragment>
                                                                ))
                                                                :
                                                                <td className="border-r border-b border-emerald-500 px-6 py-4 bg-red-400 text-white" colSpan={30}>
                                                                    Sasaran Pemda belum di buat
                                                                </td>
                                                            }
                                                        </React.Fragment>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </>
    )
}

export default TablePemda;
