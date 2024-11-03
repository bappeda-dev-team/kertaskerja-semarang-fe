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
    instansi: string;
    nama_opd: string;
    nama: string;
    nip: string;
    email: string;
    password: string;
    role: string;
}

export const FormMasterPegawai = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [Instansi, setInstansi] = useState<string>('');
    const [NamaOpd, setNamaOpd] = useState<string>('');
    const [Nama, setNama] = useState<string>('');
    const [Nip, setNip] = useState<string>('');
    const [Email, setEmail] = useState<string>('');
    const [Password, setPassword] = useState<string>('');
    const [Role, setRole] = useState<string>('');

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const formData = {
            //key : value
            instansi : data.instansi,
            nama_opd : data.nama_opd,
            nama : data.nama,
            nip : data.nip,
            email : data.email,
            password : data.password,
            role : data.role, 
        };
        console.log(formData);
      };

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Tambah Pegawai :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="instansi"
                    >
                        Instansi :
                    </label>
                    <Controller
                        name="instansi"
                        control={control}
                        rules={{ required: "Instansi harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="instansi"
                                    type="text"
                                    placeholder="masukkan Instansi"
                                    value={field.value || Instansi}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setInstansi(e.target.value);
                                    }}
                                />
                                {errors.instansi ?
                                    <h1 className="text-red-500">
                                    {errors.instansi.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Instansi Harus Terisi</h1>
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
                        htmlFor="nama"
                    >
                        Nama :
                    </label>
                    <Controller
                        name="nama"
                        control={control}
                        rules={{ required: "Nama harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama"
                                    type="text"
                                    placeholder="masukkan Nama"
                                    value={field.value || Nama}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNama(e.target.value);
                                    }}
                                />
                                {errors.nama ?
                                    <h1 className="text-red-500">
                                    {errors.nama.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nip"
                    >
                        NIP :
                    </label>
                    <Controller
                        name="nip"
                        control={control}
                        rules={{ required: "NIP harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nip"
                                    type="text"
                                    placeholder="masukkan NIP"
                                    value={field.value || Nip}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNip(e.target.value);
                                    }}
                                />
                                {errors.nip ?
                                    <h1 className="text-red-500">
                                    {errors.nip.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*NIP Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="email"
                    >
                        Email :
                    </label>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: "Email harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="email"
                                    type="text"
                                    placeholder="masukkan Email"
                                    value={field.value || Email}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setEmail(e.target.value);
                                    }}
                                />
                                {errors.email ?
                                    <h1 className="text-red-500">
                                    {errors.email.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Email Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="password"
                    >
                        Password :
                    </label>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: "Password harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="password"
                                    type="password"
                                    placeholder="masukkan Password"
                                    value={field.value || Password}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setPassword(e.target.value);
                                    }}
                                />
                                {errors.password ?
                                    <h1 className="text-red-500">
                                    {errors.password.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Password Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="role"
                    >
                        Role :
                    </label>
                    <Controller
                        name="role"
                        control={control}
                        rules={{ required: "Role harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="role"
                                    type="text"
                                    placeholder="masukkan Role"
                                    value={field.value || Role}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setRole(e.target.value);
                                    }}
                                />
                                {errors.role ?
                                    <h1 className="text-red-500">
                                    {errors.role.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Role Harus Terisi</h1>
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