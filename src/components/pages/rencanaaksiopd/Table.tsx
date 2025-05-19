'use client'

import { ButtonGreen, ButtonRed, ButtonSkyBorder, ButtonBlackBorder } from "@/components/global/Button";
import React, { useState, useEffect } from "react";
import { TbCirclePlus, TbPencil, TbRefresh, TbSearch, TbTrash } from "react-icons/tb";
import { ModalRenaksiOpd } from "./ModalRenaksiOpd";
import { AlertNotification, AlertQuestion } from "@/components/global/Alert";
import { getToken } from "@/components/lib/Cookie";
import { LoadingButtonClip2 } from "@/components/global/Loading";

interface Table {
    kode_opd: string;
    tahun: number;
}
interface RekinAsn {
    kode_opd: string;
    tahun: number;
    token: string;
    id: number;
    sasaran: string;
    indikator: IndikatorSasaranOpd[];
}

interface IndikatorSasaranOpd {
    id: string;
    indikator: string;
    rumus_perhitungan: string;
    sumber_data: string;
    target: {
        id: string;
        indikator_id: string;
        tahun: string;
        target: string;
        satuan: string;
    }
}

interface Sasaran {
    id: number;
    nama_sasaran_opd: string;
    tahun_awal: string;
    tahun_akhir: string;
    jenis_periode: string;
    indikator: IndikatorSasaranOpd[];
}

interface SubKegiatan {
    kode_subkegiatan: string;
    nama_subkegiatan: string;
    indikator: {
        id: string;
        indikator: string;
        target: string;
        satuan: string;
    }[];
}

interface RencanaKinerja {
    rekin_id: string;
    nama_rencana_kinerja: string;
    nip_pegawai: string;
    nama_pegawai: string;
    kode_opd: string;
    total_anggaran: number;
    subkegiatan: SubKegiatan[];
}

interface Rekin {
    id_renaksiopd: number;
    sasaran_opd_id: number;
    nama_sasaran_opd: string;
    tahun_renaksi: string;
    tw1: number;
    tw2: number;
    tw3: number;
    tw4: number;
    keterangan: string | null;
    rencana_kinerja: RencanaKinerja[];
}

export const Table: React.FC<Table> = ({ kode_opd, tahun }) => {

    const [SasaranOpd, setSasaranOpd] = useState<Sasaran[]>([]);

    const [Loading, setLoading] = useState<boolean>(false);
    const [DataNull, setDataNull] = useState<boolean>(false);
    const [Error, setError] = useState<boolean>(false);

    const token = getToken();

    useEffect(() => {
        const API_URL_2 = process.env.NEXT_PUBLIC_API_URL_2;
        const fetchSasaran = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_URL_2}/sasaran_opd/all/${kode_opd}/${tahun}`, {
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const result = await response.json();
                const data = result.data;
                // console.log(data);
                if (data == null) {
                    setDataNull(true);
                    setSasaranOpd([]);
                } else {
                    setDataNull(false);
                    setSasaranOpd(data);
                }
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchSasaran();
    }, [token, kode_opd, tahun]);


    return (
        <div className="overflow-auto">
            {SasaranOpd.map((data: Sasaran, index: number) => (
                <div className="my-2" key={data.id || index}>
                    <div
                        className={`flex justify-between border items-center p-5 rounded-xl  border-emerald-500`}
                    >
                        <h1 className="font-semibold">{index + 1}. {data.nama_sasaran_opd || "-"}</h1>
                        <div className="flex items-center">
                            <ButtonBlackBorder className="flex items-center justify-center gap-1 text-xs">
                                <TbSearch />
                                Cek Indikator
                            </ButtonBlackBorder>
                        </div>
                    </div>
                    <div className={`transition-all duration-300 ease-in-out mx-2 p-2 border-x border-b border-emerald-500`}>
                        <RekinAsn
                            id={data.id}
                            sasaran={data.nama_sasaran_opd}
                            indikator={data.indikator}
                            kode_opd={kode_opd}
                            tahun={tahun}
                            token={token ? token : ""}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export const RekinAsn: React.FC<RekinAsn> = ({ id, sasaran, indikator, tahun, token, kode_opd }) => {

    const [Data, setData] = useState<Rekin[]>([]);

    const [ModalTambah, setModaltambah] = useState<boolean>(false);
    const [ModalEdit, setModalEdit] = useState<boolean>(false);

    const [IdRenaksi, setIdRenaksi] = useState<string>('');
    const [IdRekin, setIdRekin] = useState<string>('');
    const [IdSasaran, setIdSasaran] = useState<number>(0);
    const [IndikatorSasaran, setIndikatorSasaran] = useState<IndikatorSasaranOpd[]>([]);
    const [Rekin, setRekin] = useState<string>('');

    const [Loading, setLoading] = useState<boolean>(false);
    const [DataNull, setDataNull] = useState<boolean>(false);
    const [Error, setError] = useState<boolean>(false);
    const [FetchTrigger, setFetchTrigger] = useState<boolean>(false);

    const handleModalTambah = (id_sasaran: number, rekin: string, indikator: IndikatorSasaranOpd[]) => {
        if (ModalTambah) {
            setModaltambah(false);
            setRekin('');
            setIdSasaran(0);
            setIndikatorSasaran([]);
        } else {
            setModaltambah(true);
            setIdSasaran(id_sasaran);
            setRekin(rekin);
            setIndikatorSasaran(indikator);
        }
    }
    const handleModalEdit = (id: string, id_sasaran: string, id_rekin: string, rekin: string) => {
        if (ModalEdit) {
            setModalEdit(false);
            setRekin('');
            setIdRekin('');
            setIdRenaksi('');
        } else {
            setModalEdit(true);
            setRekin(rekin);
            setIdRekin(id_rekin);
            setIdRenaksi(id);
        }
    }

    const hapusRenaksiOpd = async (id: string) => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        // console.log(id);
        try {
            const response = await fetch(`${API_URL}/rencana-aksi-opd/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                alert("response tidak !ok saat hapus data renaksi opd")
            }
            AlertNotification("Berhasil", "Rencana Aksi OPD Berhasil Dihapus", "success", 1000);
            setFetchTrigger((prev) => !prev);
        } catch (err) {
            AlertNotification("Gagal", "cek koneksi internet atau database server", "error", 2000);
            console.error(err);
        }
    };
    const syncRenaksiOpd = async (id: string) => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        // console.log(id);
        try {
            const response = await fetch(`${API_URL}/rencana-aksi-opd/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                alert("response tidak !ok saat hapus data renaksi opd")
            }
            AlertNotification("Berhasil", "Rencana Aksi OPD Berhasil Dihapus", "success", 1000);
            setFetchTrigger((prev) => !prev);
        } catch (err) {
            AlertNotification("Gagal", "cek koneksi internet atau database server", "error", 2000);
            console.error(err);
        }
    };

    useEffect(() => {
        const API_URL_2 = process.env.NEXT_PUBLIC_API_URL_2;
        const fetchRekinById = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_URL_2}/rencana-aksi-opd/${id}/${tahun}`, {
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const result = await response.json();
                const data = result.data;
                // console.log(data);
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
        fetchRekinById();
    }, [token, id, tahun, FetchTrigger]);

    function formatRupiah(angka: number) {
        if (typeof angka !== 'number') {
            return String(angka); // Jika bukan angka, kembalikan sebagai string
        }
        return angka.toLocaleString('id-ID'); // 'id-ID' untuk format Indonesia
    }

    if (Loading) {
        return (
            <React.Fragment>
                <div className="w-full">
                    <div className="border px-6 py-4 text-center"><LoadingButtonClip2 /> Loading...</div>
                </div>
            </React.Fragment>
        )
    }
    if (Error) {
        return (
            <React.Fragment>
                <div className="w-full">
                    <div className="border px-6 py-4 text-center text-red-500">Cek koneksi internet, terdapat kesalahan server backend atau database</div>
                </div>
            </React.Fragment>
        )
    }

    return (
        <div className="flex flex-col">
            <ButtonSkyBorder
                onClick={() => handleModalTambah(id, sasaran, indikator)}
                className="flex items-center justify-center gap-1 w-full mb-2"
            >
                <TbCirclePlus />
                Tambah Rencana Aksi OPD
            </ButtonSkyBorder>
            <div className="overflow-auto rounded-t-xl border">
                <table className="w-full">
                    <thead>
                        <tr className="text-xm bg-emerald-500 text-white">
                            <td rowSpan={2} className="border-r border-b px-6 py-3 max-w-[100px] text-center">No</td>
                            <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[300px]">Aksi/Kegiatan</td>
                            <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[400px] text-center">Sub Kegiatan</td>
                            <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[200px]">Anggaran</td>
                            <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[100px]">Nama Pemilik</td>
                            <td colSpan={4} className="border-r border-b px-6 py-3 min-w-[100px] text-center">Jadwal Pelaksanaan</td>
                            <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[100px]">Keterangan</td>
                            <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[100px]">Aksi</td>
                        </tr>
                        <tr className="text-sm bg-emerald-500 text-white">
                            <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[50px] text-center">TW1</td>
                            <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[50px] text-center">TW2</td>
                            <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[50px] text-center">TW3</td>
                            <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[50px] text-center">TW4</td>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.length != 0 ?
                            Data.map((data: Rekin, index: number) => (
                                <React.Fragment>
                                    {data.rencana_kinerja.map((rk: RencanaKinerja, sub_index: number) => (
                                        <tr key={data.id_renaksiopd || index}>
                                            <td className="border-r border-b px-6 py-4">{sub_index + 1}</td>
                                            <td className="border-r border-b px-6 py-4">{rk.nama_rencana_kinerja || "-"}</td>
                                            <td className="border-r border-b px-6 py-4">sub kegiatan</td>
                                            <td className="border-r border-b px-6 py-4">Rp.{formatRupiah(rk.total_anggaran || 0)}</td>
                                            <td className="border-r border-b px-6 py-4">{rk.nama_pegawai}</td>
                                            <td className="border-r border-b px-6 py-4 text-center">{data.tw1}</td>
                                            <td className="border-r border-b px-6 py-4 text-center">{data.tw2}</td>
                                            <td className="border-r border-b px-6 py-4 text-center">{data.tw3}</td>
                                            <td className="border-r border-b px-6 py-4 text-center">{data.tw4}</td>
                                            <td className="border-r border-b px-6 py-4">{data.keterangan || "-"}</td>
                                            <td className="border-r border-b px-6 py-4">
                                                <div className="flex flex-col justify-center items-center gap-2">
                                                    <ButtonSkyBorder
                                                        className="w-full"
                                                    // onClick={() => handleModalEdit('', '', '')}
                                                    >
                                                        <TbRefresh className="mr-1" />
                                                        Sync
                                                    </ButtonSkyBorder>
                                                    <ButtonGreen
                                                        className="w-full"
                                                    // onClick={() => handleModalEdit('', '', '')}
                                                    >
                                                        <TbPencil className="mr-1" />
                                                        Edit
                                                    </ButtonGreen>
                                                    <ButtonRed className="w-full"
                                                        onClick={() => {
                                                            AlertQuestion("Hapus?", "Hapus Renaksi OPD yang dipilih?", "question", "Hapus", "Batal").then((result) => {
                                                                if (result.isConfirmed) {
                                                                    hapusRenaksiOpd(rk.rekin_id);
                                                                }
                                                            });
                                                        }}
                                                    >
                                                        <TbTrash className="mr-1" />
                                                        Hapus
                                                    </ButtonRed>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))
                            :
                            <tr>
                                <td colSpan={11} className="border-r border-b px-6 py-4">Data Kosong / Belum di Tambahkan</td>
                            </tr>
                        }
                    </tbody>
                </table>
                <ModalRenaksiOpd
                    metode="baru"
                    isOpen={ModalTambah}
                    onClose={() => handleModalTambah(0, '', [])}
                    kode_opd={kode_opd}
                    tahun={String(tahun)}
                    id_rekin={IdRekin}
                    id_sasaran={IdSasaran}
                    rekin={Rekin}
                    indikator={IndikatorSasaran ? IndikatorSasaran : []}
                    onSuccess={() => setFetchTrigger((prev) => !prev)}
                />
                <ModalRenaksiOpd
                    metode="lama"
                    isOpen={ModalEdit}
                    onClose={() => handleModalEdit('', '', '', '')}
                    id={IdRenaksi}
                    kode_opd={kode_opd}
                    tahun={String(tahun)}
                    id_rekin={IdRekin}
                    rekin={Rekin}
                    indikator={[]}
                    onSuccess={() => setFetchTrigger((prev) => !prev)}
                />
            </div>
        </div>
    )
} 