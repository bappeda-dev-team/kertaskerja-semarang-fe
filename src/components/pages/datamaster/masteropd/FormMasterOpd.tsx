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
    lembaga: string;
    nama_opd: string;
    id_opd_skp: string;
    kode_unik_opd: string;
    nama_kepala: string;
    pangkat_kepala: string;
    nip_kepala: string;
}

export const FormMasterOpd = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [Lembaga, setLembaga] = useState<string>('');
    const [NamaOpd, setNamaOpd] = useState<string>('');
    const [IdOpdSkp, setIdOpdSkp] = useState<string>('');
    const [KodeUnikOpd, setKodeUnikOpd] = useState<string>('');
    const [NamaKepala, setNamaKepala] = useState<string>('');
    const [PangkatKepala, setPangkatKepala] = useState<string>('');
    const [NipKepala, setNipKepala] = useState<string>('');

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const formData = {
            //key : value
            lembaga : data.lembaga,
            nama_opd : data.nama_opd,
            id_opd_skp : data.id_opd_skp,
            kode_unik_opd : data.kode_unik_opd,
            nama_kepala : data.nama_kepala,
            pangkat_kepala : data.pangkat_kepala,
            nip_kepala : data.nip_kepala, 
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
                        htmlFor="lembaga"
                    >
                        Lembaga :
                    </label>
                    <Controller
                        name="lembaga"
                        control={control}
                        rules={{ required: "Lembaga harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="lembaga"
                                    type="text"
                                    placeholder="masukkan Lembaga"
                                    value={field.value || Lembaga}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setLembaga(e.target.value);
                                    }}
                                />
                                {errors.lembaga ?
                                    <h1 className="text-red-500">
                                    {errors.lembaga.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Lembaga Harus Terisi</h1>
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
                        htmlFor="id_opd_skp"
                    >
                        ID OPD SKP :
                    </label>
                    <Controller
                        name="id_opd_skp"
                        control={control}
                        rules={{ required: "ID OPD SKP harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="id_opd_skp"
                                    type="text"
                                    placeholder="masukkan ID OPD SKP"
                                    value={field.value || IdOpdSkp}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setIdOpdSkp(e.target.value);
                                    }}
                                />
                                {errors.id_opd_skp ?
                                    <h1 className="text-red-500">
                                    {errors.id_opd_skp.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Id OPD SKP Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama_kepala"
                    >
                        Nama Kepala :
                    </label>
                    <Controller
                        name="nama_kepala"
                        control={control}
                        rules={{ required: "Nama Kepala harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_kepala"
                                    type="text"
                                    placeholder="masukkan Nama Kepala"
                                    value={field.value || NamaKepala}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaKepala(e.target.value);
                                    }}
                                />
                                {errors.nama_kepala ?
                                    <h1 className="text-red-500">
                                    {errors.nama_kepala.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Kepala Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_unik_opd"
                    >
                        Kode Unik OPD :
                    </label>
                    <Controller
                        name="kode_unik_opd"
                        control={control}
                        rules={{ required: "Kode Unik OPD harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="kode_unik_opd"
                                    type="text"
                                    placeholder="masukkan Kode Unik OPD"
                                    value={field.value || KodeUnikOpd}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeUnikOpd(e.target.value);
                                    }}
                                />
                                {errors.kode_unik_opd ?
                                    <h1 className="text-red-500">
                                    {errors.kode_unik_opd.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode Unik OPD Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="pangkat_kepala"
                    >
                        Pangkat Kepala :
                    </label>
                    <Controller
                        name="pangkat_kepala"
                        control={control}
                        rules={{ required: "Pangkat Kepala harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="pangkat_kepala"
                                    type="text"
                                    placeholder="masukkan Pangkat Kepala"
                                    value={field.value || PangkatKepala}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setPangkatKepala(e.target.value);
                                    }}
                                />
                                {errors.pangkat_kepala ?
                                    <h1 className="text-red-500">
                                    {errors.pangkat_kepala.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Pangkat Kepala Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nip_kepala"
                    >
                        NIP Kepala :
                    </label>
                    <Controller
                        name="nip_kepala"
                        control={control}
                        rules={{ required: "NIP Kepala harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nip_kepala"
                                    type="text"
                                    placeholder="masukkan NIP Kepala"
                                    value={field.value || NipKepala}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNipKepala(e.target.value);
                                    }}
                                />
                                {errors.nip_kepala ?
                                    <h1 className="text-red-500">
                                    {errors.nip_kepala.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*NIP Kepala Harus Terisi</h1>
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
    const [Lembaga, setLembaga] = useState<string>('');
    const [NamaOpd, setNamaOpd] = useState<string>('');
    const [IdOpdSkp, setIdOpdSkp] = useState<string>('');
    const [KodeUnikOpd, setKodeUnikOpd] = useState<string>('');
    const [NamaKepala, setNamaKepala] = useState<string>('');
    const [PangkatKepala, setPangkatKepala] = useState<string>('');
    const [NipKepala, setNipKepala] = useState<string>('');
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
                    if(data.lembaga){
                        setLembaga(data.lembaga);
                    }
                    if(data.nama_opd){
                        setNamaOpd(data.nama_opd);
                    }
                    if(data.id_opd_skp){
                        setIdOpdSkp(data.id_opd_skp);
                    }
                    if(data.kode_unik_opd){
                        setKodeUnikOpd(data.kode_unik_opd);
                    }
                    if(data.nama_kepala){
                        setNamaKepala(data.nama_kepala);
                    }
                    if(data.pangkat_kepala){
                        setPangkatKepala(data.pangkat_kepala);
                    }
                    if(data.nip_kepala){
                        setNipKepala(data.nip_kepala);
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
          lembaga : data.lembaga,
          nama_opd : data.nama_opd,
          id_opd_skp : data.id_opd_skp,
          kode_unik_opd : data.kode_unik_opd,
          nama_kepala : data.nama_kepala,
          pangkat_kepala : data.pangkat_kepala,
          nip_kepala : data.nip_kepala, 
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
                            htmlFor="lembaga"
                        >
                            Lembaga :
                        </label>
                        <Controller
                            name="lembaga"
                            control={control}
                            rules={{ required: "Lembaga harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="lembaga"
                                        type="text"
                                        placeholder="masukkan Lembaga"
                                        value={field.value || Lembaga}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setLembaga(e.target.value);
                                        }}
                                    />
                                    {errors.lembaga ?
                                        <h1 className="text-red-500">
                                        {errors.lembaga.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Lembaga Harus Terisi</h1>
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
                            htmlFor="id_opd_skp"
                        >
                            ID OPD SKP :
                        </label>
                        <Controller
                            name="id_opd_skp"
                            control={control}
                            rules={{ required: "ID OPD SKP harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="id_opd_skp"
                                        type="text"
                                        placeholder="masukkan ID OPD SKP"
                                        value={field.value || IdOpdSkp}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setIdOpdSkp(e.target.value);
                                        }}
                                    />
                                    {errors.id_opd_skp ?
                                        <h1 className="text-red-500">
                                        {errors.id_opd_skp.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Id OPD SKP Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="nama_kepala"
                        >
                            Nama Kepala :
                        </label>
                        <Controller
                            name="nama_kepala"
                            control={control}
                            rules={{ required: "Nama Kepala harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="nama_kepala"
                                        type="text"
                                        placeholder="masukkan Nama Kepala"
                                        value={field.value || NamaKepala}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setNamaKepala(e.target.value);
                                        }}
                                    />
                                    {errors.nama_kepala ?
                                        <h1 className="text-red-500">
                                        {errors.nama_kepala.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Nama Kepala Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="kode_unik_opd"
                        >
                            Kode Unik OPD :
                        </label>
                        <Controller
                            name="kode_unik_opd"
                            control={control}
                            rules={{ required: "Kode Unik OPD harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="kode_unik_opd"
                                        type="text"
                                        placeholder="masukkan Kode Unik OPD"
                                        value={field.value || KodeUnikOpd}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setKodeUnikOpd(e.target.value);
                                        }}
                                    />
                                    {errors.kode_unik_opd ?
                                        <h1 className="text-red-500">
                                        {errors.kode_unik_opd.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Kode Unik OPD Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="pangkat_kepala"
                        >
                            Pangkat Kepala :
                        </label>
                        <Controller
                            name="pangkat_kepala"
                            control={control}
                            rules={{ required: "Pangkat Kepala harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="pangkat_kepala"
                                        type="text"
                                        placeholder="masukkan Pangkat Kepala"
                                        value={field.value || PangkatKepala}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setPangkatKepala(e.target.value);
                                        }}
                                    />
                                    {errors.pangkat_kepala ?
                                        <h1 className="text-red-500">
                                        {errors.pangkat_kepala.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*Pangkat Kepala Harus Terisi</h1>
                                    }
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="nip_kepala"
                        >
                            NIP Kepala :
                        </label>
                        <Controller
                            name="nip_kepala"
                            control={control}
                            rules={{ required: "NIP Kepala harus terisi" }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="nip_kepala"
                                        type="text"
                                        placeholder="masukkan NIP Kepala"
                                        value={field.value || NipKepala}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setNipKepala(e.target.value);
                                        }}
                                    />
                                    {errors.nip_kepala ?
                                        <h1 className="text-red-500">
                                        {errors.nip_kepala.message}
                                        </h1>
                                        :
                                        <h1 className="text-slate-300 text-xs">*NIP Kepala Harus Terisi</h1>
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