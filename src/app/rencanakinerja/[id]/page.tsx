'use client'

import { FiHome } from 'react-icons/fi';
import Select from 'react-select';
import { useState, useEffect } from 'react';
import { ButtonSky, ButtonSkyBorder, ButtonGreen, ButtonRed, ButtonRedBorder } from '@/components/global/Button';
import { ModalRenaksi } from '@/components/pages/rencanakinerja/ModalRenaksi';
import { ModalDasarHukum } from '@/components/pages/rencanakinerja/ModalDasarHukum';
import { ModalGambaranUmum } from '@/components/pages/rencanakinerja/ModalGambaranUmum';
import { ModalInovasi } from '@/components/pages/rencanakinerja/ModalInovasi';

const rincianRencanaKinerja = () => {

    const [isOpenNewRenaksi, setIsOpenNewRenaksi] = useState<boolean>(false);
    const [isOpenNewDasarHukum, setIsOpenNewDasarHukum] = useState<boolean>(false);
    const [isOpenNewGambaranUmum, setIsOpenNewGambaranUmum] = useState<boolean>(false);
    const [isOpenNewInovasi, setIsOpenNewInovasi] = useState<boolean>(false);
    
    const handleModalNewRenaksi = () => {
        if(isOpenNewRenaksi){
            setIsOpenNewRenaksi(false);
        } else {
            setIsOpenNewRenaksi(true);
        }
    }
    const handleModalNewDasarHukum = () => {
        if(isOpenNewDasarHukum){
            setIsOpenNewDasarHukum(false);
        } else {
            setIsOpenNewDasarHukum(true);
        }
    }
    const handleModalNewGambaranUmum = () => {
        if(isOpenNewGambaranUmum){
            setIsOpenNewGambaranUmum(false);
        } else {
            setIsOpenNewGambaranUmum(true);
        }
    }
    const handleModalNewInovasi = () => {
        if(isOpenNewInovasi){
            setIsOpenNewInovasi(false);
        } else {
            setIsOpenNewInovasi(true);
        }
    }

    return(
        <>
            <div className="flex items-center">
                <a href="/" className="mr-1"><FiHome /></a>
                <p className="mr-1">/ Perencanaan</p>
                <p className="mr-1">/ Rencana Kinerja</p>
                <p>/ Nama sub kegiatan</p>
            </div>
            {/* status sasaran */}
            {/* <div className="mt-3 rounded-xl shadow-lg border px-5 py-3">
                <h1>Status Sasaran</h1>
                <div className="my-3 border"></div>
                <button className="w-full uppercase bg-emerald-500 rounded-lg py-1 font-bold my-1">siap ditarik skp</button>
                <button className="w-full uppercase bg-emerald-500 rounded-lg py-1 font-bold my-1">manrisk siap diverifikasi</button>
                <div className="my-3 border"></div>
            </div> */}
            {/* usulan musrebang */}
            <div className="mt-3 rounded-t-xl border px-5 py-3">
                <h1>Usulan Musrenbang</h1>
            </div>
            <div className="rounded-b-xl shadow-lg border-x border-b px-5 py-3">
                <div className="my-2">
                    <Select 
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                borderRadius: '8px',
                                })
                            }}
                            placeholder={"Pilih Musrebang"}
                        />
                </div>
                <ButtonSky className="w-full mt-2">Simpan</ButtonSky>
                <div className="overflow-auto mt-3 rounded-t-xl border">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td className="border-r border-b px-6 py-3 min-w-[50px]">No</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Usulan</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Alamat</td>
                                <td className="border-r border-b px-6 py-3 min-w-[400px]">Permasalahan</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Aksi</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            {/* usulan pokok pikiran DPRD */}
            <div className="mt-3 rounded-t-xl border px-5 py-3">
                <h1>Usulan Pokok Pikiran DPRD</h1>
            </div>
            <div className="rounded-b-xl shadow-lg border-x border-b px-5 py-3">
                <div className="my-2">
                    <Select 
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                borderRadius: '8px',
                                })
                            }}
                            placeholder={"Pilih pokok pikiran DPRD"}
                        />
                </div>
                <ButtonSky className="w-full mt-2">Simpan</ButtonSky>
                <div className="overflow-auto mt-3 rounded-t-xl border">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td className="border-r border-b px-6 py-3 min-w-[50px]">No</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Usulan</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Alamat</td>
                                <td className="border-r border-b px-6 py-3 min-w-[400px]">Permasalahan</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Aksi</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            {/* usulan Mandatori */}
            <div className="mt-3 rounded-t-xl border px-5 py-3">
                <h1>Usulan Mandatori</h1>
            </div>
            <div className="rounded-b-xl shadow-lg border-x border-b px-5 py-3">
                <div className="my-2">
                    <Select 
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                borderRadius: '8px',
                                })
                            }}
                            placeholder={"Pilih Mandatori"}
                        />
                </div>
                <ButtonSky className="w-full mt-2">Simpan</ButtonSky>
                <div className="overflow-auto mt-3 rounded-t-xl border">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td className="border-r border-b px-6 py-3 min-w-[50px]">No</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Usulan</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Peraturan Terkait</td>
                                <td className="border-r border-b px-6 py-3 min-w-[400px]">Uraian</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Aksi</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            {/* usulan Inisiatif */}
            <div className="mt-3 rounded-t-xl border px-5 py-3">
                <h1>Usulan Inisiatif</h1>
            </div>
            <div className="rounded-b-xl shadow-lg border-x border-b px-5 py-3">
                <div className="my-2">
                    <Select 
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                borderRadius: '8px',
                                })
                            }}
                            placeholder={"Pilih Inisiatif"}
                        />
                </div>
                <ButtonSky className="w-full mt-2">Simpan</ButtonSky>
                <div className="overflow-auto mt-3 rounded-t-xl border">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td className="border-r border-b px-6 py-3 min-w-[50px]">No</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Usulan</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Manfaat</td>
                                <td className="border-r border-b px-6 py-3 min-w-[400px]">Uraian</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Aksi</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            {/* usulan subkegiatan */}
            <div className="mt-3 rounded-t-xl border px-5 py-3">
                <h1>Usulan Sub Kegiatan</h1>
            </div>
            <div className="rounded-b-xl shadow-lg border-x border-b px-5 py-3">
                <div className="my-2">
                    <label>Sub Kegiatan Terpilih :</label>
                    <Select 
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                borderRadius: '8px',
                                marginTop: '4px'
                                })
                            }}
                            placeholder={"Pilih sub kegiatan"}
                        />
                </div>
                <ButtonSky className="w-full mt-2">Simpan</ButtonSky>
                <div className="overflow-auto mt-3 rounded-t-xl border">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Sub Kegiatan</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Indikator</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Pagu Ranwal 2024</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Pagu Rankir 2024</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Pagu Penetapan 2024</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Aksi</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            {/* SasaranKinerja */}
            <div className="mt-3 rounded-t-xl border px-5 py-3">
                <div className="flex justify-between">
                    <h1>Sasaran Kinerja</h1>
                    <ButtonSky halaman_url='/rencanakinerja/1/edit'>Edit Sasaran</ButtonSky>
                </div>
                <div className="mx-2 mt-3">
                    <table className="w-full">
                        <tbody className='border'>
                            <tr>
                                <td className="px-2 py-2 border">OPD </td>
                                <td className="px-2 py-2 border">Badan perencanaan, penelitian dan pengembangan daerah</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">ASN </td>
                                <td className="px-2 py-2 border">Nama lengkap ASN</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">NIP </td>
                                <td className="px-2 py-2 border">197364193647</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Pangkat </td>
                                <td className="px-2 py-2 border">eselon 4</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Sasaran Kinerja </td>
                                <td className="px-2 py-2 border">Tersusunnya dokumen rancangan aplikasi rencana kinerja terintegrasi</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Tahun </td>
                                <td className="px-2 py-2 border">2024</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Indikator Kinerja </td>
                                <td className="px-2 py-2 border">Dokument rancanngan aplikasi</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Target Indikator Kinerja </td>
                                <td className="px-2 py-2 border"> 1 Dokumen</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Manual IK </td>
                                <td className="px-2 py-2 border"><ButtonSkyBorder>edit Manual IK</ButtonSkyBorder></td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Data Input </td>
                                <td className="px-2 py-2 border">kinerja</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* rencana aksi */}
            <div className="rounded-b-xl shadow-lg border-x border-b px-5 py-3">
                <div className="flex flex-wrap justify-between items-center">
                    <h1>Rencana Aksi</h1>
                    <div className="flex flex-wrap">
                        <ButtonGreen className="m-1">Fix Jumlah Target</ButtonGreen>
                        <ButtonSky className="m-1" onClick={() => handleModalNewRenaksi()}>Tambah Tahapan</ButtonSky>
                        <ModalRenaksi isOpen={isOpenNewRenaksi} onClose={handleModalNewRenaksi}/>
                    </div>
                </div>
                <div className="overflow-auto mt-3 rounded-t-xl border">
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[50px]">No</td>
                                <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[200px]">Tahapan kerja</td>
                                <td rowSpan={2} className="border-r border-b px-6 py-3 min-w-[100px]">Aksi</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px]">1</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px]">2</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px]">3</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px]">4</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px]">5</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px]">6</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px]">7</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px]">8</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px]">9</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px]">10</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px]">11</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px]">12</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px]">Total</td>
                                <td rowSpan={2} className="border-b px-6 py-3 min-w-[200px]">Keterangan</td>
                            </tr>
                            <tr className="bg-blue-900 text-white">
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px] max-h-[20px] text-center">T</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px] max-h-[20px] text-center">T</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px] max-h-[20px] text-center">T</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px] max-h-[20px] text-center">T</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px] max-h-[20px] text-center">T</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px] max-h-[20px] text-center">T</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px] max-h-[20px] text-center">T</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px] max-h-[20px] text-center">T</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px] max-h-[20px] text-center">T</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px] max-h-[20px] text-center">T</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px] max-h-[20px] text-center">T</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px] max-h-[20px] text-center">T</td>
                                <td colSpan={3} className="border-r border-b px-6 py-3 min-w-[20px] max-h-[20px] text-center">T</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-r border-b px-6 py-4">1</td>
                                <td className="border-r border-b px-6 py-4">Rapat Koordinasi</td>
                                <td className="border-r border-b px-6 py-4">
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <ButtonSkyBorder>Edit</ButtonSkyBorder>
                                        <ButtonRedBorder>Hapus</ButtonRedBorder>
                                    </div>
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   <div className="p-1 rounded-full hover:border hover:border-black hover:bg-black hover:text-white cursor-pointer">
                                        10
                                   </div>
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   <div className="p-1 rounded-full hover:border hover:border-black hover:bg-black hover:text-white cursor-pointer">
                                        +
                                   </div>
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   <div className="p-1 rounded-full hover:border hover:border-black hover:bg-black hover:text-white cursor-pointer">
                                        +
                                   </div>
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   <div className="p-1 rounded-full hover:border hover:border-black hover:bg-black hover:text-white cursor-pointer">
                                        +
                                   </div>
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   <div className="p-1 rounded-full hover:border hover:border-black hover:bg-black hover:text-white cursor-pointer">
                                        +
                                   </div>
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   <div className="p-1 rounded-full hover:border hover:border-black hover:bg-black hover:text-white cursor-pointer">
                                        +
                                   </div>
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   <div className="p-1 rounded-full hover:border hover:border-black hover:bg-black hover:text-white cursor-pointer">
                                        +
                                   </div>
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   <div className="p-1 rounded-full hover:border hover:border-black hover:bg-black hover:text-white cursor-pointer">
                                        +
                                   </div>
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   <div className="p-1 rounded-full hover:border hover:border-black hover:bg-black hover:text-white cursor-pointer">
                                        +
                                   </div>
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   <div className="p-1 rounded-full hover:border hover:border-black hover:bg-black hover:text-white cursor-pointer">
                                        +
                                   </div>
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   <div className="p-1 rounded-full hover:border hover:border-black hover:bg-black hover:text-white cursor-pointer">
                                        +
                                   </div>
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   <div className="p-1 rounded-full hover:border hover:border-black hover:bg-black hover:text-white cursor-pointer">
                                        +
                                   </div>
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-4">
                                   -
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   Total
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                                <td colSpan={3} className="border-r border-b px-6 py-1">
                                   -
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className="my-2">waktu yang dibutuhkan : 4 Bulan</h1>
                <div className="my-3 border"></div>
                <div className="flex flex-wrap gap-2">
                    <select className="px-3 py-1 rounded-lg border min-w-20">
                        <option value="Dau">Dau</option>
                        <option value="Dau">Dau</option>
                        <option value="Dau">Dau</option>
                    </select>
                    <ButtonSky>ubah</ButtonSky>
                </div>
            </div>
            {/* Rincian sasaran */}
            {/* <div className="flex flex-wrap justify-between items-center mt-3 rounded-t-xl border px-5 py-3">
                <h1>Rincian Sasaran</h1>
                <ButtonSky>Edit Rincian Sasaran</ButtonSky>
            </div>
            <div className="rounded-b-xl shadow-lg border-x border-b px-5 py-3">
                <div className="mx-2 mt-3">
                    <table className="w-full">
                        <tbody className='border'>
                            <tr>
                                <td className="px-2 py-2 border">Jenis Layanan </td>
                                <td className="px-2 py-2 border">Konsultasi perencanaan dan pembangunan daerah</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Penerima Manfaat</td>
                                <td className="px-2 py-2 border">Seluruh perangkat daerah</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Data Terpilah</td>
                                <td className="px-2 py-2 border">29 Perangkat Daerah</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Resiko</td>
                                <td className="px-2 py-2 border">Apabila renstra tidak sinergi dengan dokumen kinerja lainnya</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Lokasi Pelaksanaan</td>
                                <td className="px-2 py-2 border">Kota Madiun</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}
            {/* permasalahan */}
            {/* <div className="flex flex-wrap justify-between items-center mt-3 rounded-t-xl border px-5 py-3">
                <h1>Permasalahan</h1>
                <ButtonSky>Tambah Permasalahan</ButtonSky>
            </div>
            <div className="rounded-b-xl shadow-lg border-x border-b px-5 py-3">
                <div className="overflow-auto m-2 rounded-t-xl border">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td className="border-r border-b px-6 py-3 min-w-[50px]">No</td>
                                <td className="border-r border-b px-6 py-3 min-w-[100px]">Jenis</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Permasalahan</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Pemnyebab Internal</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Pemnyebab Eksternal</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Aksi</td>
                            </tr>
                        </thead>
                        <tbody className='border'>
                            <tr>
                                <td className="border px-6 py-3">1</td>
                                <td className="border px-6 py-3">Umum</td>
                                <td className="border px-6 py-3">Dokumen resntra tidak sinergi dengan dokumen perencanaan, pengendalian dan evaluasi lainnya</td>
                                <td className="border px-6 py-3">waktu yang dibutuhkan dalam rangka merubah dokumen dampak dari renstra sangat lama</td>
                                <td className="border px-6 py-3">Adanya peraturan dari kemenpan yang berdampak pada dokumen renstra</td>
                                <td className="border px-6 py-3">
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <ButtonSkyBorder className="w-full">Edit</ButtonSkyBorder>
                                        <ButtonRedBorder className="w-full">Hapus</ButtonRedBorder>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}
            {/* Dasar Hukum */}
            <div className="flex flex-wrap justify-between items-center mt-3 rounded-t-xl border px-5 py-3">
                <h1>Dasar Hukum</h1>
                <ButtonSky onClick={handleModalNewDasarHukum}>Tambah Dasar Hukum</ButtonSky>
                <ModalDasarHukum onClose={handleModalNewDasarHukum} isOpen={isOpenNewDasarHukum}/>
            </div>
            <div className="rounded-b-xl shadow-lg border-x border-b px-5 py-3">
                <div className="overflow-auto m-2 rounded-t-xl border">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td className="border-r border-b px-6 py-3 min-w-[50px]">No</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Peraturan Terkait</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Uraian</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Aksi</td>
                            </tr>
                        </thead>
                        <tbody className='border'>
                            <tr>
                                <td className="border px-6 py-3">1</td>
                                <td className="border px-6 py-3">Peraturan mendagri 86 tahun 2017</td>
                                <td className="border px-6 py-3">Bahwa selama beberapa tahun terakhir, renstra merupakan salah satu hal yang sering mendapatkan temuan ketika ada review kinerja, misalnya dalam review sakip. Dinyatakan bahwa renstra tidak sinergi dengan dokumen lainnya. Oleh karena itu, dengan digitalisasi, apabila dokumen renstra berubah, maka dokumen lainnya otomatis berubah.</td>
                                <td className="border px-6 py-3">
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <ButtonSkyBorder className="w-full">Edit</ButtonSkyBorder>
                                        <ButtonRedBorder className="w-full">Hapus</ButtonRedBorder>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* gambaran umum */}
            <div className="flex flex-wrap justify-between items-center mt-3 rounded-t-xl border px-5 py-3">
                <h1>Gambaran Umum</h1>
                <ButtonSky onClick={handleModalNewGambaranUmum}>Tambah Gambaran Umum</ButtonSky>
                <ModalGambaranUmum onClose={handleModalNewGambaranUmum} isOpen={isOpenNewGambaranUmum} />
            </div>
            <div className="rounded-b-xl shadow-lg border-x border-b px-5 py-3">
                <div className="overflow-auto m-2 rounded-t-xl border">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td className="border-r border-b px-6 py-3 min-w-[50px]">No</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Gambaran Umum</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Aksi</td>
                            </tr>
                        </thead>
                        <tbody className='border'>
                            <tr>
                                <td className="border px-6 py-3">1</td>
                                <td className="border px-6 py-3">Bahwa selama beberapa tahun terakhir, renstra merupakan salah satu hal yang sering mendapatkan temuan ketika ada review kinerja, misalnya dalam review sakip. Dinyatakan bahwa renstra tidak sinergi dengan dokumen lainnya. Oleh karena itu, dengan digitalisasi, apabila dokumen renstra berubah, maka dokumen lainnya otomatis berubah.</td>
                                <td className="border px-6 py-3">
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <ButtonSkyBorder className="w-full">Edit</ButtonSkyBorder>
                                        <ButtonRedBorder className="w-full">Hapus</ButtonRedBorder>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Hasil Output sasaran */}
            {/* <div className="flex flex-wrap justify-between items-center mt-3 rounded-t-xl border px-5 py-3">
                <h1>Hasil Output Sasaran</h1>
            </div>
            <div className="rounded-b-xl shadow-lg border-x border-b px-5 py-3">
                <div className="overflow-auto m-2 rounded-t-xl border">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Hasil Output</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Nama Output</td>
                                <td className="border-r border-b px-6 py-3 min-w-[100px]">Aksi</td>
                            </tr>
                        </thead>
                        <tbody className='border'>
                            <tr>
                                <td className="border px-6 py-3">Bukan Raperda</td>
                                <td className="border px-6 py-3"></td>
                                <td className="border px-6 py-3">
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <ButtonSkyBorder className="w-full">Edit</ButtonSkyBorder>
                                        <ButtonRedBorder className="w-full">Hapus</ButtonRedBorder>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}
            {/* Inovasi Sasaran */}
            <div className="flex flex-wrap justify-between items-center mt-3 rounded-t-xl border px-5 py-3">
                <h1>Inovasi Sasaran</h1>
            </div>
            <div className="rounded-b-xl shadow-lg border-x border-b px-5 py-3">
                <div className="overflow-auto m-2 rounded-t-xl border">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Judul Inovasi</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Jenis Inovasi</td>
                                <td className="border-r border-b px-6 py-3 min-w-[200px]">Gambaran nilai kebaruan</td>
                                <td className="border-r border-b px-6 py-3 min-w-[100px]">Aksi</td>
                            </tr>
                        </thead>
                        <tbody className='border'>
                            <tr>
                                <td className="border px-6 py-3">E-KAK Siaran</td>
                                <td className="border px-6 py-3">Baru</td>
                                <td className="border px-6 py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis explicabo, magnam dolorum quae laborum, eos ad repudiandae voluptates, enim quis sequi. Obcaecati labore dolorem sunt eos magnam, blanditiis rem ipsa.</td>
                                <td className="border px-6 py-3">
                                    <ButtonSkyBorder className="w-full" onClick={handleModalNewInovasi}>Edit</ButtonSkyBorder>
                                    <ModalInovasi onClose={handleModalNewInovasi} isOpen={isOpenNewInovasi}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default rincianRencanaKinerja;