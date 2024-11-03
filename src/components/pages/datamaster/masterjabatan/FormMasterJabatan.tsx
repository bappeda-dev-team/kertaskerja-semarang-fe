'use client'

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ButtonGreen, ButtonRedBorder, ButtonSkyBorder, ButtonRed } from "@/components/global/Button";
import { LoadingClip } from "@/components/global/Loading";

interface FormValue {
    nama_jenis: string;
    nilai: number;
    keterangan: string;
    tahun: string;
}

export const FormMasterJabatan = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [NamaJenis, setNamaJenis] = useState<string>('');
    const [Nilai, setNilai] = useState<number>(0);
    const [Keterangan, setKeterangan] = useState<string>('');
    const [Tahun, setTahun] = useState<string>('');

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const formData = {
            //key : value
            nama_jenis : data.nama_jenis,
            nilai : data.nilai,
            keterangan : data.keterangan,
            tahun : data.tahun,
        };
        console.log(formData);
      };

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Tambah Jabatan :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama_jenis"
                    >
                        Nama Jenis :
                    </label>
                    <Controller
                        name="nama_jenis"
                        control={control}
                        rules={{ required: "Nama Jenis harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_jenis"
                                    type="text"
                                    placeholder="masukkan Nama jenis"
                                    value={field.value || NamaJenis}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaJenis(e.target.value);
                                    }}
                                />
                                {errors.nama_jenis ?
                                    <h1 className="text-red-500">
                                    {errors.nama_jenis.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Jenis Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nilai"
                    >
                        Nilai :
                    </label>
                    <Controller
                        name="nilai"
                        control={control}
                        rules={{ required: "Nilai harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nilai"
                                    type="number"
                                    placeholder="masukkan Nilai"
                                    value={field.value || Nilai}
                                    onChange={(e) => {
                                        field.onChange(Number(e));
                                        setNilai(Number(e.target.value));
                                    }}
                                />
                                {errors.nilai ?
                                    <h1 className="text-red-500">
                                    {errors.nilai.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nilai Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="keterangan"
                    >
                        Keterangan :
                    </label>
                    <Controller
                        name="keterangan"
                        control={control}
                        rules={{ required: "Keterangan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="keterangan"
                                    type="text"
                                    placeholder="masukkan Keterangan"
                                    value={field.value || Keterangan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKeterangan(e.target.value);
                                    }}
                                />
                                {errors.keterangan ?
                                    <h1 className="text-red-500">
                                    {errors.keterangan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Keterangan Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="tahun"
                    >
                        Tahun :
                    </label>
                    <Controller
                        name="tahun"
                        control={control}
                        rules={{ required: "Tahun harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="tahun"
                                    type="text"
                                    placeholder="masukkan Tahun"
                                    value={field.value || Tahun}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setTahun(e.target.value);
                                    }}
                                />
                                {errors.tahun ?
                                    <h1 className="text-red-500">
                                    {errors.tahun.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Tahun Harus Terisi</h1>
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
                <ButtonRed type="button" halaman_url="/DataMaster/masterjabatan">
                    Kembali
                </ButtonRed>
            </form>
        </div>
    </>
    )
}
export const FormEditMasterJabatan = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [NamaJenis, setNamaJenis] = useState<string>('');
    const [Nilai, setNilai] = useState<number>(0);
    const [Keterangan, setKeterangan] = useState<string>('');
    const [Tahun, setTahun] = useState<string>('');
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
                    if(data.nama_jenis){
                        setNamaJenis(data.nama_jenis);
                    }
                    if(data.nilai){
                        setNilai(data.nilai);
                    }
                    if(data.keterangan){
                        setKeterangan(data.keterangan);
                    }
                    if(data.tahun){
                        setTahun(data.tahun);
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
          nama_jenis : data.nama_jenis,
          nilai : data.nilai,
          keterangan : data.keterangan,
          tahun : data.tahun,
      };
      console.log(formData);
    };

    if(loading){
        return (    
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Jabatan :</h1>
                <LoadingClip className="mx-5 py-5"/>
            </div>
        );
    } else if(error){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Jabatan :</h1>
                <h1 className="text-red-500 mx-5 py-5">{error}</h1>
            </div>
        )
    } else if(idNull){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Jabatan :</h1>
                <h1 className="text-red-500 mx-5 py-5">id tidak ditemukan</h1>
            </div>
        )
    } else {
        return(
        <>
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Jabatan :</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col mx-5 py-5"
                >
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="nama_jenis"
                        >
                            Nama Jenis :
                        </label>
                        <Controller
                            name="nama_jenis"
                            control={control}
                            rules={{ required: "Nama Jenis harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="nama_jenis"
                                        type="text"
                                        placeholder="masukkan Nama jenis"
                                        value={field.value || NamaJenis}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setNamaJenis(e.target.value);
                                        }}
                                    />
                                    {errors.nama_jenis ?
                                        <h1 className="text-red-500">
                                        {errors.nama_jenis.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Nama Jenis Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="nilai"
                        >
                            Nilai :
                        </label>
                        <Controller
                            name="nilai"
                            control={control}
                            rules={{ required: "Nilai harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="nilai"
                                        type="number"
                                        placeholder="masukkan Nilai"
                                        value={field.value || Nilai}
                                        onChange={(e) => {
                                            field.onChange(Number(e));
                                            setNilai(Number(e.target.value));
                                        }}
                                    />
                                    {errors.nilai ?
                                        <h1 className="text-red-500">
                                        {errors.nilai.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Nilai Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="keterangan"
                        >
                            Keterangan :
                        </label>
                        <Controller
                            name="keterangan"
                            control={control}
                            rules={{ required: "Keterangan harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="keterangan"
                                        type="text"
                                        placeholder="masukkan Keterangan"
                                        value={field.value || Keterangan}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setKeterangan(e.target.value);
                                        }}
                                    />
                                    {errors.keterangan ?
                                        <h1 className="text-red-500">
                                        {errors.keterangan.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Keterangan Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="tahun"
                        >
                            Tahun :
                        </label>
                        <Controller
                            name="tahun"
                            control={control}
                            rules={{ required: "Tahun harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="tahun"
                                        type="text"
                                        placeholder="masukkan Tahun"
                                        value={field.value || Tahun}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setTahun(e.target.value);
                                        }}
                                    />
                                    {errors.tahun ?
                                        <h1 className="text-red-500">
                                        {errors.tahun.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Tahun Harus Terisi</h1>
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
                    <ButtonRed type="button" halaman_url="/DataMaster/masterjabatan">
                        Kembali
                    </ButtonRed>
                </form>
            </div>
        </>
        )
    }
}