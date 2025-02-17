'use client'

import { ButtonRed, ButtonGreen, ButtonSky } from "@/components/global/Button";
import React, { useEffect, useState } from "react";
import { LoadingClip } from "@/components/global/Loading";
import { AlertNotification, AlertQuestion } from "@/components/global/Alert";
import { getOpdTahun } from "@/components/lib/Cookie";
import { TahunNull } from "@/components/global/OpdTahunNull";
import { getToken, getUser } from "@/components/lib/Cookie";
import { TbPencil, TbArrowBadgeDownFilled, TbTrash, TbCirclePlus } from "react-icons/tb";
import { ModalSasaranOpd } from "./ModalSasaranOpd";


interface Target {
    target: string;
    satuan: string;
}

interface Indikator {
    indikator: string;
    rumus_perhitungan: string;
    sumber_data: string;
    target: Target[];
}

interface SasaranPemda {
    subtematik_id: number;
    nama_subtematik: string;
    jenis_pohon: string;
    level_pohon: number;
    id_sasaran: number;
    sasaranpemda: string;
    keterangan: string;
    indikator: Indikator[];
}

interface Sasaran {
    tematik_id: number;
    nama_tematik: string;
    sasaran_pemda: SasaranPemda[];
}

interface Periode_Header {
    id: number;
    tahun_awal: string;
    tahun_akhir: string;
    tahun_list: string[];
}

const Table = () => {

    const [Data, setData] = useState<Sasaran[]>([]);
    const [Periode, setPeriode] = useState<Periode_Header | null>(null);
    const [IdPeriode, setIdPeriode] = useState<number>(0);

    const [User, setUser] = useState<any>(null);
    const [SelectedOpd, setSelectedOpd] = useState<any>(null);
    const [Tahun, setTahun] = useState<any>(null);
    const token = getToken();

    const [PeriodeNotFound, setPeriodeNotFound] = useState<boolean | null>(null);
    const [Error, setError] = useState<boolean | null>(null);
    const [Loading, setLoading] = useState<boolean | null>(null);
    const [FetchTrigger, setFetchTrigger] = useState<boolean>(false);
    const [DataNull, setDataNull] = useState<boolean>(false);

    const [isOpenNewSasaran, setIsOpenNewSasaran] = useState<boolean>(false);
    const [isOpenEditSasaran, setIsOpenEditSasaran] = useState<boolean>(false);
    const [IdSasaran, setIdSasaran] = useState<number>(0);
    const [IdSubTema, setIdSubTema] = useState<number>(0);
    const [NamaPohon, setNamaPohon] = useState<string>('');
    const [JenisPohon, setJenisPohon] = useState<string>('');

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
                const response = await fetch(`${API_URL}/sasaran_pemda/findall/${Tahun?.value}`, {
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const result = await response.json();
                const data = result.data;
                if (data == null) {
                    setDataNull(true);
                    setData([]);
                } else {
                    setDataNull(false);
                    setData(data);
                }
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        const fetchPeriode = async () => {
            try {
                const response = await fetch(`${API_URL}/periode/tahun/${Tahun?.value}`, {
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const result = await response.json();
                const hasil = result.data;
                if (hasil == null) {
                    setPeriodeNotFound(true);
                    setPeriode(null);
                } else {
                    setPeriodeNotFound(false);
                    setPeriode(hasil);
                    if (hasil.id) {
                        setIdPeriode(hasil.id);
                    }
                }
            } catch (err) {
                console.error("error fetch periode", err);
            }
        };
        if (User?.roles !== undefined && Tahun?.value != undefined) {
            fetchSasaran();
            fetchPeriode();
        }
    }, [token, User, Tahun, SelectedOpd, FetchTrigger]);

    const handleShow = (id: number) => {
        setShow((prev) => ({
            [id]: !prev[id],
        }));
    }

    const hapusSasaranPemda = async (id: number) => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        // console.log(id);
        try {
            const response = await fetch(`${API_URL}/sasaran_pemda/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                alert("response !ok saat hapus data sasaran pemda")
            }
            AlertNotification("Berhasil", "Data Sasaran Pemda Berhasil Dihapus", "success", 1000);
            setFetchTrigger((prev) => !prev);
        } catch (err) {
            AlertNotification("Gagal", "cek koneksi internet atau database server", "error", 2000);
            console.error(err);
        }
    };

    const handleModalNewSasaran = (id: number, nama_pohon: string, jenis_pohon: string) => {
        if (isOpenNewSasaran) {
            setIsOpenNewSasaran(false);
            setNamaPohon('');
            setJenisPohon('');
            setIdSubTema(0);
        } else {
            setIsOpenNewSasaran(true);
            setNamaPohon(nama_pohon);
            setJenisPohon(jenis_pohon)
            setIdSubTema(id);
        }
    }
    const handleModalEditSasaran = (id: number, subtema: number, nama_pohon: string, jenis_pohon: string) => {
        if (isOpenEditSasaran) {
            setIsOpenEditSasaran(false);
            setIdSasaran(0);
            setNamaPohon('');
            setJenisPohon('')
            setIdSubTema(subtema);
        } else {
            setIdSubTema(subtema);
            setIsOpenEditSasaran(true);
            setIdSasaran(id);
            setNamaPohon(nama_pohon);
            setJenisPohon(jenis_pohon)
        }
    }

    if (Loading) {
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <LoadingClip className="mx-5 py-5" />
            </div>
        );
    } else if (Error) {
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="text-red-500 font-bold mx-5 py-5">Periksa koneksi internet atau database server</h1>
            </div>
        )
    } else if (PeriodeNotFound && Tahun?.value != undefined) {
        return (
            <div className="flex flex-col gap-3 border p-5 rounded-xl shadow-xl">
                <h1 className="text-yellow-500 font-base mx-5">Tahun {Tahun?.value} tidak tersedia di data periode / periode dengan tahun {Tahun?.value} belum di buat</h1>
                <h1 className="text-yellow-500 font-bold mx-5">Tambahkan periode dengan tahun {Tahun?.value} di halaman Master Periode (Super Admin)</h1>
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
                Data.map((item: Sasaran) => {
                    const isShown = Show[item.tematik_id] || false;

                    return (
                        <div className="flex flex-col m-2" key={item.tematik_id}>
                            <div
                                className={`flex justify-between border items-center p-5 rounded-xl text-emerald-500 cursor-pointer border-emerald-500 hover:bg-emerald-500 hover:text-white ${isShown ? "bg-emerald-500 text-white" : ""}`}
                                onClick={() => handleShow(item.tematik_id)}
                            >
                                <h1 className="font-semibold">Tematik - {item.nama_tematik}</h1>
                                <div className="flex items-center">
                                    <TbArrowBadgeDownFilled className={`transition-all duration-200 ease-in-out text-3xl ${isShown ? "" : "-rotate-90"}`} />
                                </div>
                            </div>
                            <div className={`transition-all duration-300 ease-in-out border-x border-b border-emerald-500 ${isShown ? "opacity-100 mx-4 p-5" : "max-h-0 opacity-0 pointer-events-none"}`}>
                                <div className="overflow-auto rounded-t-xl border">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-xm bg-emerald-500 text-white">
                                                <td rowSpan={2} className="border-r border-b px-6 py-3 max-w-[100px] text-center">No</td>
                                                <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[300px]">Strategic Pemda</td>
                                                <td rowSpan={2} colSpan={2} className="border-r border-b px-6 py-3 min-w-[400px] text-center">Sasaran Pemda</td>
                                                <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[200px]">Indikator</td>
                                                <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[100px]">Rumus Perhitungan</td>
                                                <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[100px]">Sumber Data</td>
                                                {Periode?.tahun_list.map((item: any) => (
                                                    <th key={item} colSpan={2} className="border-l border-b px-6 py-3 min-w-[100px]">{item}</th>
                                                ))}
                                            </tr>
                                            <tr className="bg-emerald-500 text-white">
                                                {Periode?.tahun_list.map((item: any) => (
                                                    <React.Fragment key={item}>
                                                        <th className="border-l border-b px-6 py-3 min-w-[50px]">Target</th>
                                                        <th className="border-l border-b px-6 py-3 min-w-[50px]">Satuan</th>
                                                    </React.Fragment>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {item.sasaran_pemda.length == 0 ?
                                                <tr>
                                                    <td className="px-6 py-3" colSpan={30}>
                                                        Data Kosong / Belum Ditambahkan
                                                    </td>
                                                </tr>
                                                :
                                                item.sasaran_pemda.map((item: SasaranPemda, index) => {

                                                    // Cek apakah item.tujuan_pemda ada
                                                    const hasIndikator = item.indikator != null;
                                                    const hasSasaranPemda = item.sasaranpemda != "";
                                                    const indikatorLength = hasIndikator ? item.indikator.length : 0;
                                                    return (
                                                        <React.Fragment key={item.subtematik_id}>
                                                            <tr>
                                                                <td className="border border-emerald-500 px-4 py-4 text-center" rowSpan={hasIndikator ? indikatorLength + 1 : 2}>
                                                                    {index + 1}
                                                                </td>
                                                                <td className="border border-emerald-500 px-6 py-4" rowSpan={hasIndikator ? indikatorLength + 1 : 2}>
                                                                    <p>{item.nama_subtematik}</p>
                                                                    <p className="uppercase text-emerald-500 text-xs mt-2">{item.jenis_pohon}</p>
                                                                </td>
                                                                <td className="border border-emerald-500 px-6 py-4" rowSpan={hasIndikator ? indikatorLength + 1 : 2}>
                                                                    {item.sasaranpemda || "-"}
                                                                </td>
                                                                <td className="border-b border-emerald-500 px-6 py-4" rowSpan={hasIndikator ? indikatorLength + 1 : 2}>
                                                                    <div className="flex flex-col justify-center items-center gap-1">
                                                                        {hasSasaranPemda ? (
                                                                            <>
                                                                                <ButtonGreen
                                                                                    className="flex items-center gap-1 w-full"
                                                                                    onClick={() => handleModalEditSasaran(item.id_sasaran, item.subtematik_id, item.nama_subtematik, item.jenis_pohon)}
                                                                                >
                                                                                    <TbPencil />
                                                                                    Edit
                                                                                </ButtonGreen>
                                                                                <ButtonRed
                                                                                    className="flex items-center gap-1 w-full"
                                                                                    onClick={() => {
                                                                                        AlertQuestion("Hapus?", "Hapus Tujuan Pemda yang dipilih?", "question", "Hapus", "Batal").then((result) => {
                                                                                            if (result.isConfirmed) {
                                                                                                hapusSasaranPemda(item.id_sasaran);
                                                                                            }
                                                                                        });
                                                                                    }}
                                                                                >
                                                                                    <TbTrash />
                                                                                    Delete
                                                                                </ButtonRed>
                                                                            </>
                                                                        ) : (
                                                                            <ButtonSky
                                                                                className="flex items-center gap-1 w-full"
                                                                                onClick={() => handleModalNewSasaran(item.subtematik_id, item.nama_subtematik, item.jenis_pohon)}
                                                                            >
                                                                                <TbCirclePlus />
                                                                                Tambah
                                                                            </ButtonSky>
                                                                        )}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            {/* Baris Indikator */}
                                                            {!hasSasaranPemda ?
                                                                <tr>
                                                                    <td className="border border-emerald-500 bg-red-500 text-white px-6 py-4" colSpan={30}>Sasaran Pemda belum di buat</td>
                                                                </tr>
                                                                :
                                                                hasIndikator ?
                                                                    item.indikator?.map((i: Indikator, subindex) => (
                                                                        <tr key={subindex}>
                                                                            <td className="border border-emerald-500 px-6 py-4">{i.indikator || "-"}</td>
                                                                            <td className="border border-emerald-500 px-6 py-4">{i.rumus_perhitungan || "-"}</td>
                                                                            <td className="border border-emerald-500 px-6 py-4">{i.sumber_data || "-"}</td>
                                                                            {i.target?.map((t, subsubindex) => (
                                                                                <React.Fragment key={subsubindex}>
                                                                                    <td className="border border-emerald-500 px-6 py-4 text-center">{t.target || "-"}</td>
                                                                                    <td className="border border-emerald-500 px-6 py-4 text-center">{t.satuan || "-"}</td>
                                                                                </React.Fragment>
                                                                            ))}
                                                                        </tr>
                                                                    ))
                                                                    :
                                                                    <tr>
                                                                        {/* indikator, rumus, sumber */}
                                                                        <td className="border border-emerald-500 px-6 py-4">-</td>
                                                                        <td className="border border-emerald-500 px-6 py-4">-</td>
                                                                        <td className="border border-emerald-500 px-6 py-4">-</td>
                                                                        {/* target satuan per tahun */}
                                                                        <td className="border border-emerald-500 px-6 py-4">-</td>
                                                                        <td className="border border-emerald-500 px-6 py-4">-</td>
                                                                        <td className="border border-emerald-500 px-6 py-4">-</td>
                                                                        <td className="border border-emerald-500 px-6 py-4">-</td>
                                                                        <td className="border border-emerald-500 px-6 py-4">-</td>
                                                                        <td className="border border-emerald-500 px-6 py-4">-</td>
                                                                        <td className="border border-emerald-500 px-6 py-4">-</td>
                                                                        <td className="border border-emerald-500 px-6 py-4">-</td>
                                                                        <td className="border border-emerald-500 px-6 py-4">-</td>
                                                                        <td className="border border-emerald-500 px-6 py-4">-</td>
                                                                    </tr>
                                                            }
                                                        </React.Fragment>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    {/* MODAL EDIT TUJUAN */}
                                    <ModalSasaranOpd
                                        metode="baru"
                                        subtema_id={IdSubTema}
                                        nama_pohon={NamaPohon}
                                        periode={IdPeriode}
                                        jenis_pohon={JenisPohon}
                                        tahun={Tahun?.value}
                                        isOpen={isOpenNewSasaran}
                                        onClose={() => handleModalNewSasaran(0, '', '')}
                                        onSuccess={() => setFetchTrigger((prev) => !prev)}
                                    />
                                    {/* MODAL EDIT TUJUAN */}
                                    <ModalSasaranOpd
                                        metode="lama"
                                        id={IdSasaran}
                                        nama_pohon={NamaPohon}
                                        periode={IdPeriode}
                                        jenis_pohon={JenisPohon}
                                        subtema_id={IdSubTema}
                                        tahun={Tahun?.value}
                                        isOpen={isOpenEditSasaran}
                                        onClose={() => handleModalEditSasaran(0, 0, '', '')}
                                        onSuccess={() => setFetchTrigger((prev) => !prev)}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </>
    )
}

export default Table;
