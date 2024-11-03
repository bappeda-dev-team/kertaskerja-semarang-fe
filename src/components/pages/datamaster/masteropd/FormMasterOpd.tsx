'use client'

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ButtonGreen, ButtonRedBorder, ButtonSkyBorder, ButtonRed } from "@/components/global/Button";
import { LoadingClip } from "@/components/global/Loading";

interface OptionTypeString {
    value: string;
    label: string;
}
interface FormValue {
    kode_opd: string;
    nama_opd: string;
    nama_kepala_opd: string;
    nip_kepala_opd: string;
    pangkat_kepala_opd: string;
    kode_lembaga: string;
}

export const FormMasterOpd = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [KodeOpd, setKodeOpd] = useState<string>('');
    const [NamaOpd, setNamaOpd] = useState<string>('');
    const [NamaKepalaOpd, setNamaKepalaOpd] = useState<string>('');
    const [NipKepalaOpd, setNipKepalaOpd] = useState<string>('');
    const [PangkatKepalaOpd, setPangkatKepalaOpd] = useState<string>('');
    const [KodeLembaga, setKodeLembaga] = useState<string>('');

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const formData = {
            //key : value
            kode_opd : data.kode_opd,
            nama_opd : data.nama_opd,
            nama_kepala_opd : data.nama_kepala_opd,
            nip_kepala_opd : data.nip_kepala_opd,
            pangkat_kepala_opd : data.pangkat_kepala_opd,
            kode_lembaga : data.kode_lembaga,
        };
        console.log(formData);
      };

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Tambah OPD :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_opd"
                    >
                        Kode Perangkat Daerah :
                    </label>
                    <Controller
                        name="kode_opd"
                        control={control}
                        rules={{ required: "Kode Perangkat Daerah harus dipilih" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="kode_opd"
                                    type="text"
                                    placeholder="masukkan Kode Perangkat Daerah"
                                    value={field.value || KodeOpd}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeOpd(e.target.value);
                                    }}
                                />
                                {errors.kode_opd ?
                                    <h1 className="text-red-500">
                                    {errors.kode_opd.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode Perangkat Daerah Harus Dipilih</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama_opd"
                    >
                        Nama Perangkat Daerah :
                    </label>
                    <Controller
                        name="nama_opd"
                        control={control}
                        rules={{ required: "Nama Perangkat Daerah harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_opd"
                                    type="text"
                                    placeholder="masukkan Nama Perangkat Daerah"
                                    value={field.value || NamaOpd}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaOpd(e.target.value);
                                    }}
                                />
                                {errors.nama_opd ?
                                    <h1 className="text-red-500">
                                    {errors.nama_opd.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama OPD Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama_kepala_opd"
                    >
                        Nama Kepala Perangkat Daerah:
                    </label>
                    <Controller
                        name="nama_kepala_opd"
                        control={control}
                        rules={{ required: "Nama Kepala harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_kepala_opd"
                                    type="text"
                                    placeholder="masukkan Nama Kepala Perangkat Daerah"
                                    value={field.value || NamaKepalaOpd}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaKepalaOpd(e.target.value);
                                    }}
                                />
                                {errors.nama_kepala_opd ?
                                    <h1 className="text-red-500">
                                    {errors.nama_kepala_opd.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Kepala Perangkat Daerah Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nip_kepala_opd"
                    >
                        NIP Kepala Perangkat Daerah :
                    </label>
                    <Controller
                        name="nip_kepala_opd"
                        control={control}
                        rules={{ required: "NIP Kepala Perangkat Daerah harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nip_kepala_opd"
                                    type="text"
                                    placeholder="masukkan NIP Kepala"
                                    value={field.value || NipKepalaOpd}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNipKepalaOpd(e.target.value);
                                    }}
                                />
                                {errors.nip_kepala_opd ?
                                    <h1 className="text-red-500">
                                    {errors.nip_kepala_opd.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*NIP Kepala Perangkat Daerah Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="pangkat_kepala_opd"
                    >
                        Pangkat Kepala Perangkat Daerah :
                    </label>
                    <Controller
                        name="pangkat_kepala_opd"
                        control={control}
                        rules={{ required: "Pangkat Kepala Perangkat Daerah harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="pangkat_kepala_opd"
                                    type="text"
                                    placeholder="masukkan Pangkat Kepala Perangkat Daerah"
                                    value={field.value || PangkatKepalaOpd}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setPangkatKepalaOpd(e.target.value);
                                    }}
                                />
                                {errors.pangkat_kepala_opd ?
                                    <h1 className="text-red-500">
                                    {errors.pangkat_kepala_opd.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Pangkat Kepala Perangkat Daerah Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_lembaga"
                    >
                        Kode Lembaga :
                    </label>
                    <Controller
                        name="kode_lembaga"
                        control={control}
                        rules={{ required: "Kode Lembaga harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="kode_lembaga"
                                    type="text"
                                    placeholder="masukkan Kode Lembaga"
                                    value={field.value || KodeLembaga}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeLembaga(e.target.value);
                                    }}
                                />
                                {errors.kode_lembaga ?
                                    <h1 className="text-red-500">
                                    {errors.kode_lembaga.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode Lembaga Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>

                <ButtonGreen
                    type="submit"
                    className="my-4"
                >
                    Simpan
                </ButtonGreen>
                <ButtonRed type="button" halaman_url="/DataMaster/masteropd">
                    Kembali
                </ButtonRed>
            </form>
        </div>
    </>
    )
}
export const FormEditMasterOpd = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [KodeOpd, setKodeOpd] = useState<string>('');
    const [NamaOpd, setNamaOpd] = useState<string>('');
    const [NamaKepalaOpd, setNamaKepalaOpd] = useState<string>('');
    const [NipKepalaOpd, setNipKepalaOpd] = useState<string>('');
    const [PangkatKepalaOpd, setPangkatKepalaOpd] = useState<string>('');
    const [KodeLembaga, setKodeLembaga] = useState<string>('');
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [idNull, setIdNull] = useState<boolean | null>(null);

    useEffect(() => {
        const fetchIdOpd = async() => {
            setLoading(true);
            try{
                const response = await fetch(`${API_URL}/lorem`);
                if(!response.ok){
                    throw new Error('terdapat kesalahan di koneksi backend');
                }
                const result = await response.json();
                if(result.code == 500){
                    setIdNull(true);
                } else {
                    const data = result.data;
                    if(data.kode_opd){
                        setKodeOpd(data.kode_opd);
                    }
                    if(data.nama_opd){
                        setNamaOpd(data.nama_opd);
                    }
                    if(data.nama_kepala_opd){
                        setNamaKepalaOpd(data.nama_kepala_opd);
                    }
                    if(data.pangkat_kepala_opd){
                        setPangkatKepalaOpd(data.pangkat_kepala_opd);
                    }
                    if(data.nip_kepala_opd){
                        setNipKepalaOpd(data.nip_kepala_opd);
                    }
                    if(data.kode_lembaga){
                        setKodeLembaga(data.kode_lembaga);
                    }
                }
            } catch(err) {
                setError('gagal mendapatkan data, periksa koneksi internet atau database server')
            } finally {
                setLoading(false);
            }
        }
        fetchIdOpd();
    },[]);

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
      const formData = {
            //key : value
            kode_opd : data.kode_opd,
            nama_opd : data.nama_opd,
            nama_kepala_opd : data.nama_kepala_opd,
            nip_kepala_opd : data.nip_kepala_opd,
            pangkat_kepala_opd : data.pangkat_kepala_opd,
            kode_lembaga : data.kode_lembaga,
      };
      console.log(formData);
    };

    if(loading){
        return (    
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit OPD :</h1>
                <LoadingClip className="mx-5 py-5"/>
            </div>
        );
    } else if(error){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit OPD :</h1>
                <h1 className="text-red-500 mx-5 py-5">{error}</h1>
            </div>
        )
    } else if(idNull){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit OPD :</h1>
                <h1 className="text-red-500 mx-5 py-5">id tidak ditemukan</h1>
            </div>
        )
    } else {
        return(
        <>
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit OPD :</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col mx-5 py-5"
                >
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="kode_opd"
                        >
                            Kode Perangkat Daerah :
                        </label>
                        <Controller
                            name="kode_opd"
                            control={control}
                            rules={{ required: "Kode Perangkat Daerah harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="kode_opd"
                                        type="text"
                                        placeholder="masukkan Kode Perangkat Daerah"
                                        value={field.value || KodeOpd}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setKodeOpd(e.target.value);
                                        }}
                                    />
                                    {errors.kode_opd ?
                                        <h1 className="text-red-500">
                                        {errors.kode_opd.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Kode Perangkat Daerah Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="nama_opd"
                        >
                            Nama OPD :
                        </label>
                        <Controller
                            name="nama_opd"
                            control={control}
                            rules={{ required: "Nama OPD harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="nama_opd"
                                        type="text"
                                        placeholder="masukkan Nama OPD"
                                        value={field.value || NamaOpd}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setNamaOpd(e.target.value);
                                        }}
                                    />
                                    {errors.nama_opd ?
                                        <h1 className="text-red-500">
                                        {errors.nama_opd.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Nama OPD Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="nama_kepala_opd"
                        >
                            Nama Kepala Perangkat Daerah :
                        </label>
                        <Controller
                            name="nama_kepala_opd"
                            control={control}
                            rules={{ required: "Nama Kepala Perangkat Daerah harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="nama_kepala_opd"
                                        type="text"
                                        placeholder="masukkan Nama Kepala Perangkat Daerah"
                                        value={field.value || NamaKepalaOpd}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setNamaKepalaOpd(e.target.value);
                                        }}
                                    />
                                    {errors.nama_kepala_opd ?
                                        <h1 className="text-red-500">
                                        {errors.nama_kepala_opd.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Nama Kepala Perangkat Daerah Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="nip_kepala_opd"
                        >
                            NIP Kepala Perangkat Daerah :
                        </label>
                        <Controller
                            name="nip_kepala_opd"
                            control={control}
                            rules={{ required: "NIP Kepala Perangkat Daerah harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="nip_kepala_opd"
                                        type="text"
                                        placeholder="masukkan NIP Kepala Perangkat Daerah"
                                        value={field.value || NipKepalaOpd}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setNipKepalaOpd(e.target.value);
                                        }}
                                    />
                                    {errors.nip_kepala_opd ?
                                        <h1 className="text-red-500">
                                        {errors.nip_kepala_opd.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*NIP Kepala Perangkat Daerah Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="pangkat_kepala_opd"
                        >
                            Pangkat Kepala Perangkat Daerah :
                        </label>
                        <Controller
                            name="pangkat_kepala_opd"
                            control={control}
                            rules={{ required: "Pangkat Kepala Perangkat Daerah harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="pangkat_kepala_opd"
                                        type="text"
                                        placeholder="masukkan Pangkat Kepala Perangkat Daerah"
                                        value={field.value || PangkatKepalaOpd}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setPangkatKepalaOpd(e.target.value);
                                        }}
                                    />
                                    {errors.pangkat_kepala_opd ?
                                        <h1 className="text-red-500">
                                        {errors.pangkat_kepala_opd.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Pangkat Kepala Perangkat Daerah Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="kode_lembaga"
                        >
                            Kode lembaga :
                        </label>
                        <Controller
                            name="kode_lembaga"
                            control={control}
                            rules={{ required: "Kode lembaga harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="kode_lembaga"
                                        type="text"
                                        placeholder="masukkan Kode lembaga"
                                        value={field.value || NipKepalaOpd}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setNipKepalaOpd(e.target.value);
                                        }}
                                    />
                                    {errors.kode_lembaga ?
                                        <h1 className="text-red-500">
                                        {errors.kode_lembaga.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Kode lembaga Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    
                    <ButtonGreen
                        type="submit"
                        className="my-4"
                    >
                        Simpan
                    </ButtonGreen>
                    <ButtonRed type="button" halaman_url="/DataMaster/masteropd">
                        Kembali
                    </ButtonRed>
                </form>
            </div>
        </>
        )
    }
    
}
