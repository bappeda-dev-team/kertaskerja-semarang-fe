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
    nama_kegiatan: string;
    kode_kegiatan: string;
    kode_opd: string;
}

export const FormKegiatan = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [NamaKegiatan, setNamaKegiatan] = useState<string>('');
    const [KodeKegiatan, setKodeKegiatan] = useState<string>('');
    const [KodeOpd, setKodeOpd] = useState<string>('');

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const formData = {
            //key : value
            nama_kegiatan : data.nama_kegiatan,
            kode_kegiatan : data.kode_kegiatan,
            kode_opd : data.kode_opd,
        };
        console.log(formData);
      };

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Tambah Kegiatan :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama_kegiatan"
                    >
                        Nama Kegiatan :
                    </label>
                    <Controller
                        name="nama_kegiatan"
                        control={control}
                        rules={{ required: "Nama Kegiatan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_kegiatan"
                                    type="text"
                                    placeholder="masukkan Nama Kegiatan"
                                    value={field.value || NamaKegiatan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaKegiatan(e.target.value);
                                    }}
                                />
                                {errors.nama_kegiatan ?
                                    <h1 className="text-red-500">
                                    {errors.nama_kegiatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Kegiatan Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_kegiatan"
                    >
                        Kode Kegiatan :
                    </label>
                    <Controller
                        name="kode_kegiatan"
                        control={control}
                        rules={{ required: "Kode Kegiatan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="tahun"
                                    type="text"
                                    placeholder="masukkan Kode Kegiatan"
                                    value={field.value || KodeKegiatan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeKegiatan(e.target.value);
                                    }}
                                />
                                {errors.kode_kegiatan ?
                                    <h1 className="text-red-500">
                                    {errors.kode_kegiatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode Kegiatan Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_opd"
                    >
                        Kode OPD :
                    </label>
                    <Controller
                        name="kode_opd"
                        control={control}
                        rules={{ required: "Kode OPD harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="tahun"
                                    type="text"
                                    placeholder="masukkan Kode OPD"
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
                                    <h1 className="text-slate-300 text-xs">*Kode OPD Harus Terisi</h1>
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
                <ButtonRed type="button" halaman_url="/DataMaster/masterpegawai">
                    Kembali
                </ButtonRed>
            </form>
        </div>
    </>
    )
}
export const FormEditKegiatan = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [NamaKegiatan, setNamaKegiatan] = useState<string>('');
    const [KodeKegiatan, setKodeKegiatan] = useState<string>('');
    const [KodeOpd, setKodeOpd] = useState<string>('');
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
                    if(data.nama_kegiatan){
                        setNamaKegiatan(data.nama_kegiatan);
                    }
                    if(data.kode_kegiatan){
                        setKodeKegiatan(data.kode_kegiatan);
                    }
                    if(data.kode_opd){
                        setKodeOpd(data.kode_opd);
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
          nama_kegiatan : data.nama_kegiatan,
          kode_kegiatan : data.kode_kegiatan,
          kode_opd : data.kode_opd,
      };
      console.log(formData);
    };

    if(loading){
        return (    
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Kegiatan :</h1>
                <LoadingClip className="mx-5 py-5"/>
            </div>
        );
    } else if(error){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Kegiatan :</h1>
                <h1 className="text-red-500 mx-5 py-5">{error}</h1>
            </div>
        )
    } else if(idNull){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Kegiatan :</h1>
                <h1 className="text-red-500 mx-5 py-5">id tidak ditemukan</h1>
            </div>
        )
    }

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Edit Kegiatan :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama_kegiatan"
                    >
                        Nama Kegiatan :
                    </label>
                    <Controller
                        name="nama_kegiatan"
                        control={control}
                        rules={{ required: "Nama Kegiatan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_kegiatan"
                                    type="text"
                                    placeholder="masukkan Nama Kegiatan"
                                    value={field.value || NamaKegiatan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaKegiatan(e.target.value);
                                    }}
                                />
                                {errors.nama_kegiatan ?
                                    <h1 className="text-red-500">
                                    {errors.nama_kegiatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Kegiatan Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_kegiatan"
                    >
                        Kode Kegiatan :
                    </label>
                    <Controller
                        name="kode_kegiatan"
                        control={control}
                        rules={{ required: "Kode Kegiatan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="tahun"
                                    type="text"
                                    placeholder="masukkan Kode Kegiatan"
                                    value={field.value || KodeKegiatan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeKegiatan(e.target.value);
                                    }}
                                />
                                {errors.kode_kegiatan ?
                                    <h1 className="text-red-500">
                                    {errors.kode_kegiatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode Kegiatan Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_opd"
                    >
                        Kode OPD :
                    </label>
                    <Controller
                        name="kode_opd"
                        control={control}
                        rules={{ required: "Kode OPD harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="tahun"
                                    type="text"
                                    placeholder="masukkan Kode OPD"
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
                                    <h1 className="text-slate-300 text-xs">*Kode OPD Harus Terisi</h1>
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
                <ButtonRed type="button" halaman_url="/DataMaster/masterpegawai">
                    Kembali
                </ButtonRed>
            </form>
        </div>
    </>
    )
}