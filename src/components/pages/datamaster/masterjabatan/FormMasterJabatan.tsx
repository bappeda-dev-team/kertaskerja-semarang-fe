'use client'

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ButtonGreen, ButtonRedBorder, ButtonSkyBorder, ButtonRed } from "@/components/global/Button";
import { LoadingClip } from "@/components/global/Loading";
import { AlertNotification } from "@/components/global/Alert";
import { useParams, useRouter } from "next/navigation";

interface FormValue {
    id: string;
    nama_jabatan: string;
    kode_jabatan: number;
    kode_opd: string;
}

export const FormMasterJabatan = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [NamaJabatan, setNamaJabatan] = useState<string>('');
    const [KodeJabatan, setKodeJabatan] = useState<string>('');
    const [KodeOpd, setKodeOpd] = useState<string>('');
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
      const formData = {
          //key : value
          nama_jabatan : data.nama_jabatan,
          kode_jabatan : data.kode_jabatan,
          kode_opd : data.kode_opd,
      };
      // console.log(formData);
      try{
          const response = await fetch(`${API_URL}/jabatan/create`, {
              method: "POST",
              headers: {
                  "Content-Type" : "application/json",
              },
              body: JSON.stringify(formData),
          });
          if(response.ok){
              AlertNotification("Berhasil", "Berhasil menambahkan data master jabatan", "success", 1000);
              router.push("/DataMaster/masterjabatan");
          } else {
              AlertNotification("Gagal", "terdapat kesalahan pada backend / database server", "error", 2000);
          }
      } catch(err){
          AlertNotification("Gagal", "cek koneksi internet/terdapat kesalahan pada database server", "error", 2000);
      }
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
                        htmlFor="nama_jabatan"
                    >
                        Nama Jabatan :
                    </label>
                    <Controller
                        name="nama_jabatan"
                        control={control}
                        rules={{ required: "Nama Jabatan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_jabatan"
                                    type="text"
                                    placeholder="masukkan Nama Jabatan"
                                    value={field.value || NamaJabatan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaJabatan(e.target.value);
                                    }}
                                />
                                {errors.nama_jabatan ?
                                    <h1 className="text-red-500">
                                    {errors.nama_jabatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Jabatan Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_jabatan"
                    >
                        Kode Jabatan :
                    </label>
                    <Controller
                        name="kode_jabatan"
                        control={control}
                        rules={{ required: "Kode Jabatan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="kode_jabatan"
                                    type="text"
                                    placeholder="masukkan Kode Jabatan"
                                    value={field.value || KodeJabatan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeJabatan(e.target.value);
                                    }}
                                />
                                {errors.kode_jabatan ?
                                    <h1 className="text-red-500">
                                    {errors.kode_jabatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode Jabatan Harus Terisi</h1>
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
      reset,
      formState: { errors },
    } = useForm<FormValue>();
    const [NamaJabatan, setNamaJabatan] = useState<string>('');
    const [KodeJabatan, setKodeJabatan] = useState<string>('');
    const [KodeOpd, setKodeOpd] = useState<string>('');
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [idNull, setIdNull] = useState<boolean | null>(null);
    const router = useRouter();
    const {id} = useParams();

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
                    if(data.nama_jabatan){
                        setNamaJabatan(data.nama_jabatan);
                        reset((prev) => ({ ...prev, nama_jabatan: result.nama_jabatan }))
                    }
                    if(data.kode_jabatan){
                        setKodeJabatan(data.kode_jabatan);
                        reset((prev) => ({ ...prev, kode_jabatan: result.kode_jabatan }))
                    }
                    if(data.kode_opd){
                        setKodeOpd(data.kode_opd);
                        reset((prev) => ({ ...prev, kode_opd: result.kode_opd }))
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
          nama_jabatan : data.nama_jabatan,
          kode_jabatan : data.kode_jabatan,
          kode_opd : data.kode_opd,
      };
    //   console.log(formData);
        try{
            const response = await fetch(`${API_URL}/jabatan/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(formData),
            });
            if(response.ok){
                AlertNotification("Berhasil", "Berhasil menambahkan data master jabatan", "success", 1000);
                router.push("/DataMaster/masterjabatan");
            } else {
                AlertNotification("Gagal", "terdapat kesalahan pada backend / database server", "error", 2000);
            }
        } catch(err){
            AlertNotification("Gagal", "cek koneksi internet/terdapat kesalahan pada database server", "error", 2000);
        }
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
                            htmlFor="nama_jabatan"
                        >
                            Nama jabatan :
                        </label>
                        <Controller
                            name="nama_jabatan"
                            control={control}
                            rules={{ required: "Nama jabatan harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="nama_jabatan"
                                        type="text"
                                        placeholder="masukkan Nama jabatan"
                                        value={field.value || NamaJabatan}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setNamaJabatan(e.target.value);
                                        }}
                                    />
                                    {errors.nama_jabatan ?
                                        <h1 className="text-red-500">
                                        {errors.nama_jabatan.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Nama jabatan Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="kode_jabatan"
                        >
                            Kode jabatan :
                        </label>
                        <Controller
                            name="kode_jabatan"
                            control={control}
                            rules={{ required: "Kode jabatan harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="kode_jabatan"
                                        type="text"
                                        placeholder="masukkan Kode jabatan"
                                        value={field.value || KodeJabatan}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setKodeJabatan(e.target.value);
                                        }}
                                    />
                                    {errors.kode_jabatan ?
                                        <h1 className="text-red-500">
                                        {errors.kode_jabatan.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Kode jabatan Harus Terisi</h1>
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
                            Kode Perangkat Daerah :
                        </label>
                        <Controller
                            name="kode_opd"
                            control={control}
                            rules={{ required: "Kode Perangkata Daerah harus terisi" }}
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