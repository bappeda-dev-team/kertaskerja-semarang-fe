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
    nama_program: string;
    kode_program: string;
    kode_opd: string;
}

export const FormProgram = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [NamaProgram, setNamaProgram] = useState<string>('');
    const [KodeProgram, setKodeProgram] = useState<string>('');
    const [KodeOpd, setKodeOpd] = useState<string>('');

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const formData = {
            //key : value
            nama_program : data.nama_program,
            kode_program : data.kode_program,
            kode_opd : data.kode_opd,
        };
        console.log(formData);
      };

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Tambah Program :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama_program"
                    >
                        Nama Program :
                    </label>
                    <Controller
                        name="nama_program"
                        control={control}
                        rules={{ required: "Nama Program harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_program"
                                    type="text"
                                    placeholder="masukkan Nama Program"
                                    value={field.value || NamaProgram}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaProgram(e.target.value);
                                    }}
                                />
                                {errors.nama_program ?
                                    <h1 className="text-red-500">
                                    {errors.nama_program.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Program Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_program"
                    >
                        Kode Program :
                    </label>
                    <Controller
                        name="kode_program"
                        control={control}
                        rules={{ required: "Kode Program harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="tahun"
                                    type="text"
                                    placeholder="masukkan Kode Program"
                                    value={field.value || KodeProgram}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeProgram(e.target.value);
                                    }}
                                />
                                {errors.kode_program ?
                                    <h1 className="text-red-500">
                                    {errors.kode_program.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode Program Harus Terisi</h1>
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
export const FormEditProgram = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [NamaProgram, setNamaProgram] = useState<string>('');
    const [KodeProgram, setKodeProgram] = useState<string>('');
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
                    if(data.nama_program){
                        setNamaProgram(data.nama_program);
                    }
                    if(data.kode_program){
                        setKodeProgram(data.kode_program);
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
          nama_program : data.nama_program,
          kode_program : data.kode_program,
          kode_opd : data.kode_opd,
      };
      console.log(formData);
    };

    if(loading){
        return (    
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Program :</h1>
                <LoadingClip className="mx-5 py-5"/>
            </div>
        );
    } else if(error){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Program :</h1>
                <h1 className="text-red-500 mx-5 py-5">{error}</h1>
            </div>
        )
    } else if(idNull){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Program :</h1>
                <h1 className="text-red-500 mx-5 py-5">id tidak ditemukan</h1>
            </div>
        )
    }

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Edit Program :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama_program"
                    >
                        Nama Program :
                    </label>
                    <Controller
                        name="nama_program"
                        control={control}
                        rules={{ required: "Nama Program harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_program"
                                    type="text"
                                    placeholder="masukkan Nama Program"
                                    value={field.value || NamaProgram}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaProgram(e.target.value);
                                    }}
                                />
                                {errors.nama_program ?
                                    <h1 className="text-red-500">
                                    {errors.nama_program.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Program Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_program"
                    >
                        Kode Program :
                    </label>
                    <Controller
                        name="kode_program"
                        control={control}
                        rules={{ required: "Kode Program harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="tahun"
                                    type="text"
                                    placeholder="masukkan Kode Program"
                                    value={field.value || KodeProgram}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeProgram(e.target.value);
                                    }}
                                />
                                {errors.kode_program ?
                                    <h1 className="text-red-500">
                                    {errors.kode_program.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode Program Harus Terisi</h1>
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