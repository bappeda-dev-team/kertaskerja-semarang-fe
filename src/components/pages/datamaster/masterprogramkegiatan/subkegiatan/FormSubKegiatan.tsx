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
    nama_sub_kegiatan: string;
    kode_sub_kegiatan: string;
    kode_opd: string;
}

export const FormSubKegiatan = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [NamaBidangUrusan, setNamaBidangUrusan] = useState<string>('');
    const [KodeBidangUrusan, setKodeBidangUrusan] = useState<string>('');
    const [KodeOpd, setKodeOpd] = useState<string>('');

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const formData = {
            //key : value
            nama_sub_kegiatan : data.nama_sub_kegiatan,
            kode_sub_kegiatan : data.kode_sub_kegiatan,
            kode_opd : data.kode_opd,
        };
        console.log(formData);
      };

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Tambah Sub Kegiatan :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama_sub_kegiatan"
                    >
                        Nama Sub Kegiatan :
                    </label>
                    <Controller
                        name="nama_sub_kegiatan"
                        control={control}
                        rules={{ required: "Nama Sub Kegiatan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_sub_kegiatan"
                                    type="text"
                                    placeholder="masukkan Nama Sub Kegiatan"
                                    value={field.value || NamaBidangUrusan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaBidangUrusan(e.target.value);
                                    }}
                                />
                                {errors.nama_sub_kegiatan ?
                                    <h1 className="text-red-500">
                                    {errors.nama_sub_kegiatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Sub Kegiatan Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_sub_kegiatan"
                    >
                        Kode Sub Kegiatan :
                    </label>
                    <Controller
                        name="kode_sub_kegiatan"
                        control={control}
                        rules={{ required: "Kode Sub Kegiatan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="tahun"
                                    type="text"
                                    placeholder="masukkan Kode Sub Kegiatan"
                                    value={field.value || KodeBidangUrusan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeBidangUrusan(e.target.value);
                                    }}
                                />
                                {errors.kode_sub_kegiatan ?
                                    <h1 className="text-red-500">
                                    {errors.kode_sub_kegiatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode Sub Kegiatan Harus Terisi</h1>
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
export const FormEditSubKegiatan = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [NamaBidangUrusan, setNamaBidangUrusan] = useState<string>('');
    const [KodeBidangUrusan, setKodeBidangUrusan] = useState<string>('');
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
                    if(data.nama_sub_kegiatan){
                        setNamaBidangUrusan(data.nama_sub_kegiatan);
                    }
                    if(data.kode_sub_kegiatan){
                        setKodeBidangUrusan(data.kode_sub_kegiatan);
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
          nama_sub_kegiatan : data.nama_sub_kegiatan,
          kode_sub_kegiatan : data.kode_sub_kegiatan,
          kode_opd : data.kode_opd,
      };
      console.log(formData);
    };

    if(loading){
        return (    
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Sub Kegiatan :</h1>
                <LoadingClip className="mx-5 py-5"/>
            </div>
        );
    } else if(error){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Sub Kegiatan :</h1>
                <h1 className="text-red-500 mx-5 py-5">{error}</h1>
            </div>
        )
    } else if(idNull){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Sub Kegiatan :</h1>
                <h1 className="text-red-500 mx-5 py-5">id tidak ditemukan</h1>
            </div>
        )
    }

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Edit Sub Kegiatan :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama_sub_kegiatan"
                    >
                        Nama Sub Kegiatan :
                    </label>
                    <Controller
                        name="nama_sub_kegiatan"
                        control={control}
                        rules={{ required: "Nama Sub Kegiatan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_sub_kegiatan"
                                    type="text"
                                    placeholder="masukkan Nama Sub Kegiatan"
                                    value={field.value || NamaBidangUrusan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaBidangUrusan(e.target.value);
                                    }}
                                />
                                {errors.nama_sub_kegiatan ?
                                    <h1 className="text-red-500">
                                    {errors.nama_sub_kegiatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Sub Kegiatan Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_sub_kegiatan"
                    >
                        Kode Bidang Urusan :
                    </label>
                    <Controller
                        name="kode_sub_kegiatan"
                        control={control}
                        rules={{ required: "Kode Bidang Urusan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="tahun"
                                    type="text"
                                    placeholder="masukkan Kode Bidang Urusan"
                                    value={field.value || KodeBidangUrusan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeBidangUrusan(e.target.value);
                                    }}
                                />
                                {errors.kode_sub_kegiatan ?
                                    <h1 className="text-red-500">
                                    {errors.kode_sub_kegiatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode Bidang Urusan Harus Terisi</h1>
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