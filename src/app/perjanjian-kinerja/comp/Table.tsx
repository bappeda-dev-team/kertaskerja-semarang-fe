'use client'

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { TbPlugConnected, TbPrinter, TbRouteSquare2, TbUserShare } from "react-icons/tb"
import { ButtonBlackBorder, ButtonSkyBorder } from "@/components/global/Button"
// import { ModalConnectRekin } from "./ModalConnectRekin"
// import { ModalAtasan } from "./ModalAtasan"
import { useBrandingContext } from "@/context/BrandingContext"
import { LoadingClip } from "@/components/global/Loading"

interface Table {
    tahun: string;
    kode_opd: string;
    level?: number;
}

export const Table: React.FC<Table> = ({ tahun, kode_opd, level }) => {

    const [ModalOpen, setModalOpen] = useState<boolean>(false);
    const [ModalNamaPegawai, setModalNamaPegawai] = useState<string>("");
    const [ModalNipPegawai, setModalNipPegawai] = useState<string>("");

    const [ModalAtasanOpen, setModalAtasanOpen] = useState<boolean>(false);
    const [LevelPegawai, setLevelPegawai] = useState<number>(0);

    const [FetchTrigger, setFetchTrigger] = useState<boolean>(false);
    const { branding } = useBrandingContext();

    return (
        <>
            <div className={`overflow-auto border border-emerald-500`}>
                <table className="w-full">
                    <thead>
                        <tr className="text-white bg-emerald-500">
                            <th className="border-r border-b py-4 px-6 border-gray-300 min-w-[50px] text-center">No</th>
                            <th className="border-r border-b py-4 px-6 border-gray-300 min-w-[400px] text-center">Nama Pegawai/Rekin Pegawai</th>
                            <th className="border-r border-b py-4 px-6 border-gray-300 min-w-[100px] text-center">Status/Aksi</th>
                            <th className="border-r border-b py-4 px-6 border-gray-300 min-w-[400px] text-center">Nama Atasan/Rekin Atasan</th>
                            <th className="border-r border-b py-4 px-6 border-gray-300 min-w-[100px] text-center">Cetak</th>
                        </tr>
                    </thead>
                    <tbody>
                        <React.Fragment>
                            {/* NAMA PEGAWAI & REKAP NAMA ATASAN */}
                            <tr className="bg-sky-200 font-semibold">
                                <td className="border-b border-emerald-500 px-6 py-4 text-center">1</td>
                                <td className="border border-emerald-500 px-6 py-4">Nama Pegawai</td>
                                <td className="border border-emerald-500 px-2 py-4 text-center">
                                    <div className="flex items-center justify-center gap-1">
                                        <ButtonSkyBorder
                                            className="flex items-center gap-1"
                                        >
                                            <TbUserShare />
                                            pilih atasan
                                        </ButtonSkyBorder>
                                    </div>
                                </td>
                                <td className="border border-emerald-500 px-6 py-4">
                                    <div className="flex items-center justify-between gap-1">
                                        <p className="font-light italic">*atasan belum di pilih</p>
                                    </div>
                                </td>
                                <td className="border border-emerald-500 px-6 py-4">
                                    <div className="flex flex-col gap-2 justify-center items-center">
                                        <Link
                                            href={`#`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ButtonBlackBorder
                                                className="flex items-center gap-1"
                                            >
                                                <TbPrinter />
                                                Cetak
                                            </ButtonBlackBorder>
                                        </Link>

                                    </div>
                                </td>
                            </tr>
                            {/* REKIN PEGAWAI & REKIN ATASAN */}
                            <tr >
                                <td className="border-b border-emerald-500 px-6 py-4 text-center">1.1</td>
                                <td className="border border-emerald-500 px-6 py-4">
                                    <p className="border-b border-emerald-500 py-2">pembuatan pohon kinerja opd</p>
                                    <ProgramSubKegiatan
                                        key={1}
                                        jenis="Sub Kegiatan"
                                        nama={`sub kegiatan`}
                                        kode={"1.02"}
                                        pagu={3000000}
                                    />
                                </td>
                                {/* REKIN ATASAN */}
                                <>
                                    <td className="border border-emerald-500 px-6 py-4 text-center">
                                        <div className="flex flex-col gap-2 justify-center items-center">
                                            <ButtonSkyBorder
                                                className="flex items-center gap-1 text-sm"
                                                // onClick={() => handleModalRekin(rk, pk.nama, pk.nip)}
                                            >
                                                <TbPlugConnected />
                                                Hubungkan
                                            </ButtonSkyBorder>
                                        </div>
                                    </td>
                                    <td className="border border-emerald-500 px-6 py-4 bg-red-200 italic">
                                        *hubungkan dengan rencana kinerja atasan
                                    </td>
                                </>
                                <td className="border border-emerald-500 px-6 py-4"></td>
                            </tr>
                        </React.Fragment>
                    </tbody>
                </table>
            </div >
        </>
    )
}

interface ProgramSubKegiatan {
    jenis: string;
    kode?: string;
    nama?: string;
    pagu?: number;
}
export const ProgramSubKegiatan: React.FC<ProgramSubKegiatan> = ({ jenis, kode, nama, pagu }) => {
    return (
        <table className="my-2 w-full text-sm border-emerald-500">
            <tbody>
                <tr>
                    <td className="border border-emerald-500 p-2">
                        {jenis === "Program" &&
                            <p>Program : ({kode || "-"}) {nama || "-"}</p>
                        }
                        {jenis === "Kegiatan" &&
                            <p>Kegiatan : ({kode || "-"}) {nama || "-"}</p>
                        }
                        {jenis === "Sub Kegiatan" &&
                            <p>Sub Kegiatan : ({kode || "-"}) {nama || "-"}</p>
                        }
                        {jenis === "kosong" &&
                            <p className="text-red-300 italic">*Program / Sub Kegiatan belum di pilih</p>
                        }
                    </td>
                    <td className="border border-emerald-500 bg-emerald-500 text-white p-2">Rp.{pagu || 0}</td>
                </tr>
            </tbody>
        </table>
    )
}
