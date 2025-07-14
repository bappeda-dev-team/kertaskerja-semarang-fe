'use client'

import { ButtonRed, ButtonGreen } from "@/components/global/Button";
import React, { useEffect, useState } from "react";
import { LoadingClip } from "@/components/global/Loading";
import { AlertNotification, AlertQuestion } from "@/components/global/Alert";
import { getOpdTahun } from "@/components/lib/Cookie";
import { TahunNull } from "@/components/global/OpdTahunNull";
import { getToken } from "@/components/lib/Cookie";
import { ModalCSF } from "./ModalCSF";

interface tematik {
    csf: CSF[];
    id: number;
    parent: number;
    tema: string;
    keterangan: string;
    indikator: indikator[];
}
interface DataTerukur {
    id: number;
    alasan_kondisi_id: number;
    data_terukur: string;
}

interface AlasanKondisi {
    id: number;
    csf_id: number;
    alasan_kondisi_strategis: string;
    data_terukur: DataTerukur[];
}

interface CSF {
    id: number;
    pohon_id: number;
    pernyataan_kondisi_strategis: string;
    alasan_kondisi: AlasanKondisi[];
}
interface indikator {
    id_indikator: string;
    nama_indikator: string;
    targets: target[];
}
type target = {
    id_target: string;
    target: string;
    satuan: string;
};

const Table = () => {

    const [Tematik, setTematik] = useState<tematik[]>([]);
    const [Loading, setLoading] = useState<boolean | null>(null);
    const [Error, setError] = useState<boolean | null>(null);
    const [DataNull, setDataNull] = useState<boolean | null>(null);
    const [Tahun, setTahun] = useState<any>(null);
    const [SelectedOpd, setSelectedOpd] = useState<any>(null);

    const [ModalOpen, setModalOpen] = useState<boolean>(false);
    const [JenisModal, setJenisModal] = useState<string>("");
    const [DataToEdit, setDataToEdit] = useState<any>(null);
    const [FetchTrigger, setFetchTrigger] = useState<boolean>(false);
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
        const fetchTematik = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${API_URL}/pohon_kinerja_admin/findall/${Tahun?.value}`, {
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const result = await response.json();
                const data = result.data.tematiks;
                if (data == null) {
                    setDataNull(true);
                    setTematik([]);
                } else if (data.code == 500) {
                    setError(true);
                    setTematik([]);
                } else {
                    setDataNull(false);
                    setTematik(data);
                }
                setTematik(data);
            } catch (err) {
                setError(true);
                console.error(err)
            } finally {
                setLoading(false);
            }
        }
        if (Tahun?.value != undefined) {
            fetchTematik();
        }
    }, [Tahun, token]);

    const hapusTematik = async (id: any) => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        try {
            const response = await fetch(`${API_URL}/pohon_kinerja_admin/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                alert("cant fetch data")
            }
            setTematik(Tematik.filter((data) => (data.id !== id)))
            AlertNotification("Berhasil", "Data lembaga Berhasil Dihapus", "success", 1000);
        } catch (err) {
            AlertNotification("Gagal", "cek koneksi internet atau database server", "error", 2000);
        }
    };
    const handleModal = (jenis: string, data?: any) => {
        if (ModalOpen) {
            setModalOpen(false);
            setJenisModal("");
            setDataToEdit(null);
        } else {
            setModalOpen(true);
            setJenisModal(jenis);
            setDataToEdit(data);
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
                <h1 className="text-red-500 mx-5 py-5">Reload Halaman, Periksa koneksi internet atau database server</h1>
            </div>
        )
    } else if (Tahun?.value == undefined) {
        return <TahunNull />
    }

    const Dummy = [
        {
            "csf": [
                {
                    "id": 1,
                    "pohon_id": 1,
                    "pernyataan_kondisi_strategis": "cek pernyataan strategis",
                    "alasan_kondisi": [
                        {
                            "id": 1,
                            "csf_id": 1,
                            "alasan_kondisi_strategis": "cek alasan 1",
                            "data_terukur": [
                                {
                                    "id": 1,
                                    "alasan_kondisi_id": 1,
                                    "data_terukur": "cek data terukur 1"
                                },
                                {
                                    "id": 2,
                                    "alasan_kondisi_id": 1,
                                    "data_terukur": "cek data terukur 2"
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "csf_id": 1,
                            "alasan_kondisi_strategis": "cek alasan 2",
                            "data_terukur": [
                                {
                                    "id": 3,
                                    "alasan_kondisi_id": 2,
                                    "data_terukur": "cek data terukur 1"
                                },
                                {
                                    "id": 4,
                                    "alasan_kondisi_id": 2,
                                    "data_terukur": "cek data terukur 2"
                                }
                            ]
                        }
                    ]
                }
            ],
            "id": 1,
            "parent": null,
            "tema": "Tematik pertama dengan indikator",
            "jenis_pohon": "Tematik",
            "level_pohon": 0,
            "keterangan": "tematik pertama",
            "jumlah_review": 0,
            "is_active": false,
            "indikator": [
                {
                    "id_indikator": "IND-POKIN-1b78a65a",
                    "id_pokin": "1",
                    "nama_indikator": "indikator 1",
                    "targets": [
                        {
                            "id_target": "TRGT-IND-POKIN-32f9ca49",
                            "indikator_id": "IND-POKIN-1b78a65a",
                            "target": "cek target",
                            "satuan": "meter"
                        }
                    ]
                }
            ]
        }
    ]

    return (
        <>
            <div className="overflow-auto m-2 rounded-t-xl border">
                <table className="w-full">
                    <thead>
                        <tr className="bg-sky-700 text-white">
                            <th className="border-r border-b px-6 py-3 min-w-[50px] text-center">No</th>
                            <th className="border-r border-b px-6 py-3 min-w-[300px]">Peryataan kondisi strategis (Isu Strategis)</th>
                            <th className="border-r border-b px-6 py-3 min-w-[300px]">Alasan Sebagai Kondisi Strategis</th>
                            <th className="border-r border-b px-6 py-3 min-w-[300px]">Data Terukur Pendukung Pernyataan</th>
                            <th className="border-r border-b px-6 py-3 min-w-[100px]">Aksi</th>
                            <th className="border-r border-b px-6 py-3 min-w-[300px]">Kondisi Terukur Yang Diharapkan (Tema)</th>
                            <th className="border-l border-b px-6 py-3 min-w-[200px]">Keterangan</th>
                            <th className="border-l border-b px-6 py-3 min-w-[200px]">Indikator</th>
                            <th className="border-l border-b px-6 py-3 min-w-[200px]">Target/Satuan</th>
                            <th className="border-l border-b px-6 py-3 min-w-[100px]">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DataNull ?
                            <tr>
                                <td className="px-6 py-3 uppercase" colSpan={13}>
                                    Data Kosong / Belum Ditambahkan
                                </td>
                            </tr>
                            :
                            Dummy.map((data, index) => {
                                let calculatedTotalRow2;

                                if (!data.csf) {
                                    calculatedTotalRow2 = 1; // Hanya baris p sendiri jika tidak ada anak taktis
                                } else {
                                    const CSF = data.csf[0];
                                    calculatedTotalRow2 = CSF.alasan_kondisi.reduce((accumulator, t_element) => {
                                        // t_element adalah setiap item 'tactical' (disebut 't' di JSX)
                                        let rowsForThis_t_element;
                                        if (!t_element.data_terukur) {
                                            rowsForThis_t_element = 2; // Baris t_element + baris pesan "tidak ada anak pohon"
                                        } else {
                                            rowsForThis_t_element = 1 + t_element.data_terukur.length; // Baris t_element + baris untuk setiap anak 'operational'
                                        }
                                        return accumulator + rowsForThis_t_element + 3;
                                    }, 0);
                                }
                                return (
                                    <React.Fragment key={data.id}>
                                        {data.csf ?
                                            data.csf.map((c: CSF, csf_index: number) => (
                                                <React.Fragment key={csf_index}>
                                                    <tr>
                                                        <td rowSpan={c.alasan_kondisi.length + 2} className="border-r border-b bg-sky-50 px-6 py-4 text-center">{index + 1}</td>
                                                        <td rowSpan={c.alasan_kondisi.length + 2} className="border-r border-b bg-sky-50 px-6 py-4 text-center italic">{c.pernyataan_kondisi_strategis || "dalam pengembangan"}</td>
                                                    </tr>
                                                    {c.alasan_kondisi.map((a: AlasanKondisi, a_index: number) => (
                                                        <React.Fragment key={a_index}>
                                                            <tr>
                                                                <td className="border-r border-b bg-sky-50 px-6 py-4 text-center italic">{a.alasan_kondisi_strategis || "-"}</td>
                                                                <td className="border-r border-b bg-sky-50 px-6 py-4 text-center italic">
                                                                    {a.data_terukur.map((dt: DataTerukur, dt_index: number) => (
                                                                        <p key={dt_index} className={`py-2 ${a.data_terukur.length > 1 ? "border-b" : ""}`}>{ dt.data_terukur || "-" }</p>
                                                                    ))}
                                                                </td>
                                                            </tr>
                                                            <tr></tr>
                                                        </React.Fragment>
                                                    ))}
                                                </React.Fragment>
                                            ))
                                            :
                                            <tr>
                                                <td rowSpan={calculatedTotalRow2 + 1} className="border-r border-b bg-sky-50 px-6 py-4 text-center">{index + 1}</td>
                                                <td rowSpan={calculatedTotalRow2 + 1} className="border-r border-b bg-sky-50 px-6 py-4 text-center italic">-</td>
                                                <td rowSpan={calculatedTotalRow2 + 1} className="border-r border-b bg-sky-50 px-6 py-4 text-center italic">-</td>
                                                <td rowSpan={calculatedTotalRow2 + 1} className="border-r border-b bg-sky-50 px-6 py-4 text-center italic">-</td>
                                            </tr>
                                        }
                                        <tr>
                                            {/* kolom aksi */}
                                            <td className="border-r border-b bg-sky-50 px-6 py-4">
                                                <div className="flex flex-col jutify-center items-center gap-2">
                                                    <ButtonGreen
                                                        onClick={() => {
                                                            if (data.csf === null) {
                                                                handleModal("baru", data);
                                                            } else {
                                                                handleModal("edit", data);
                                                            }
                                                        }}
                                                        className="w-full"
                                                    >
                                                        Edit CSF
                                                    </ButtonGreen>
                                                    <ButtonRed
                                                        className="w-full"
                                                        onClick={() => {
                                                            AlertQuestion("Hapus?", "Hapus tematik pemda yang dipilih?", "question", "Hapus", "Batal").then((result) => {
                                                                if (result.isConfirmed) {
                                                                    // hapusTematik(data.id);
                                                                }
                                                            });
                                                        }}
                                                    >
                                                        Hapus
                                                    </ButtonRed>
                                                </div>
                                            </td>
                                            <td className="border-r border-b px-6 py-4 text-center">{data.tema || "-"}</td>
                                            <td className="border-r border-b px-6 py-4 text-center">{data.keterangan ? data.keterangan : "-"}</td>
                                            {data.indikator ?
                                                <>
                                                    <td className="border-r border-b px-6 py-4 text-center">
                                                        {data.indikator.map((item: indikator) => (
                                                            <p key={item.id_indikator}>{item.nama_indikator}</p>
                                                        ))}
                                                    </td>
                                                    <td className="border-r border-b px-6 py-4 text-center">
                                                        {data.indikator.map((item: indikator) => (
                                                            item.targets.map((t: target) => (
                                                                <p key={t.id_target}>{t.target} / {t.satuan}</p>
                                                            ))
                                                        ))}
                                                    </td>
                                                </>
                                                :
                                                <>
                                                    <td className="border-r border-b px-6 py-4 text-center">-</td>
                                                    <td className="border-r border-b px-6 py-4 text-center">-</td>
                                                </>
                                            }
                                            <td className="border-r border-b px-6 py-4">
                                                <div className="flex flex-col jutify-center items-center gap-2">
                                                    <ButtonGreen className="w-full" halaman_url={`/tematikpemda/${data.id}`}>Edit Tema</ButtonGreen>
                                                    <ButtonRed
                                                        className="w-full"
                                                        onClick={() => {
                                                            AlertQuestion("Hapus?", "Hapus tematik pemda yang dipilih?", "question", "Hapus", "Batal").then((result) => {
                                                                if (result.isConfirmed) {
                                                                    hapusTematik(data.id);
                                                                }
                                                            });
                                                        }}
                                                    >
                                                        Hapus
                                                    </ButtonRed>
                                                </div>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
                {ModalOpen &&
                    <ModalCSF
                        isOpen={ModalOpen}
                        onClose={() => handleModal("")}
                        onSuccess={() => setFetchTrigger((prev) => !prev)}
                        jenis={JenisModal}
                        data={DataToEdit}
                    />
                }
            </div>
        </>
    )
}

export default Table;