'use client'

import { useState, useEffect } from 'react';
import { ButtonSky, ButtonRed } from '@/components/global/Button';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { getOpdTahun } from '../Cookie';
import { AlertNotification } from '@/components/global/Alert';

interface OptionTypeString {
    value: string;
    label: string;
}
interface FormValue {
    id: number;
    parent: string;
    nama_pohon: string;
    jenis_pohon: string;
    keterangan: string;
    tahun: OptionTypeString;
    kode_opd: OptionTypeString;
}
interface form {
    formId: number;
    onSave: [
        {data: any},
        {id: number}
    ];
    onCancle: () => void;
}

export const FormPohon: React.FC<{ formId: number; id: number; level: number; onSave: (data: any, id: number) => void; onCancel: () => void }> = ({ id, level, formId, onSave, onCancel }) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm<FormValue>();
    const [formData, setFormData] = useState({ tema: '', keterangan: '' });
    const [NamaPohon, setNamaPohon] = useState<string>('');
    const [Keterangan, setKeterangan] = useState<string>('');
    const [Tahun, setTahun] = useState<any>(null);
    const [SelectedOpd, setSelectedOpd] = useState<any>(null);
    
    useEffect(() => {
        const data = getOpdTahun();
        if(data.tahun){
            const tahun = {
                value: data.tahun.value,
                label: data.tahun.label,
            }
            setTahun(tahun);
        }
        if(data.opd){
            const opd = {
                value: data.opd.value,
                label: data.opd.label,
            }
            setSelectedOpd(opd);
        }
    },[]);
    
    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const formData = {
            //key : value
            nama_pohon : data.nama_pohon,
            Keterangan : data.keterangan,
            jenis_pohon:    level === 0 ? "SubTematik" :
                            level === 1 ? "Strategic" :
                            level === 4 ? "Tactical" :
                            level === 5 ? "Operational" : "Unknown",
            level_pohon :   level === 0 ? 1 :
                            level === 1 ? 4 :
                            level === 4 ? 5 :
                            level === 5 ? 6 : "Unknown",
            parent: id,
            tahun: Tahun?.value?.toString(),
            kode_opd: SelectedOpd?.value,
        };
        // console.log(formData);
        try{
            const url = level == 0 ? '/pohon_kinerja_admin/create' : '/pohon_kinerja_opd/create';
            const response = await fetch(`${API_URL}${url}`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(formData),
            });
            if(response.ok){
                AlertNotification("Berhasil", "Berhasil menambahkan pohon", "success", 1000);
                onCancel();
            } else {
                AlertNotification("Gagal", "terdapat kesalahan pada backend / database server", "error", 2000);
            }
        } catch(err){
            AlertNotification("Gagal", "cek koneksi internet/terdapat kesalahan pada database server", "error", 2000);
            console.error(err);
        }
    };

    return (
        <li>
        <div className="tf-nc tf flex flex-col w-[600px] rounded-lg shadow-lg shadow-slate-500">
            <div className="flex pt-3 justify-center font-bold text-lg uppercase border my-3 py-3 border-black rounded-lg">
                {level == 0 && 
                    <h1>Tambah SubTematik Baru {id} level : {level}</h1>
                } 
                {level == 1 && 
                    <h1>Tambah Strategic Baru {id} level : {level}</h1>
                } 
                {level == 4 && 
                    <h1>Tambah Tactical Baru {id} level : {level}</h1>
                } 
                {level == 5 && 
                    <h1>Tambah Operational Baru {id} level : {level}</h1>
                }
            </div>
            <div className="flex justify-center my-3 w-full">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full'
                >
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="nama_pohon"
                        >
                            {level == 0 && 
                                "SubTematik"
                            } 
                            {level == 1 && 
                                "Strategic"
                            } 
                            {level == 4 && 
                                "Tactical"
                            } 
                            {level == 5 && 
                                "Operational"
                            }
                        </label>
                        <Controller
                            name="nama_pohon"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_pohon"
                                    type="text"
                                    placeholder="masukkan Pohon"
                                    value={field.value || NamaPohon}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaPohon(e.target.value);
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="keterangan"
                        >
                            Keterangan:
                        </label>
                        <Controller
                            name="keterangan"
                            control={control}
                            render={({ field }) => (
                                <textarea
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="keterangan"
                                    placeholder="masukkan keterangan"
                                    value={field.value || Keterangan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKeterangan(e.target.value);
                                    }}
                                />
                            )}
                        />
                    </div>
                    <ButtonSky type="submit" className="w-full my-3">
                        Simpan
                    </ButtonSky>
                    <ButtonRed className="w-full my-3" onClick={onCancel}>
                        Batal
                    </ButtonRed>
                </form>
            </div>
        </div>
        </li>
    );
};
export const FormAmbilPohon: React.FC<{ formId: number; id: number; level: number; onSave: (data: any, id: number) => void; onCancel: () => void }> = ({ id, level, formId, onSave, onCancel }) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm<FormValue>();
    const [formData, setFormData] = useState({ tema: '', keterangan: '' });
    const [NamaPohon, setNamaPohon] = useState<string>('');
    const [Keterangan, setKeterangan] = useState<string>('');
    const [Tahun, setTahun] = useState<any>(null);
    const [SelectedOpd, setSelectedOpd] = useState<any>(null);
    
    useEffect(() => {
        const data = getOpdTahun();
        if(data.tahun){
            const tahun = {
                value: data.tahun.value,
                label: data.tahun.label,
            }
            setTahun(tahun);
        }
        if(data.opd){
            const opd = {
                value: data.opd.value,
                label: data.opd.label,
            }
            setSelectedOpd(opd);
        }
    },[]);
    
    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const formData = {
            //key : value
            nama_pohon : data.nama_pohon,
            Keterangan : data.keterangan,
            jenis_pohon:    level === 0 ? "SubTematik" :
                            level === 1 ? "Strategic" :
                            level === 4 ? "Tactical" :
                            level === 5 ? "Operational" : "Unknown",
            level_pohon :   level === 0 ? 1 :
                            level === 1 ? 4 :
                            level === 4 ? 5 :
                            level === 5 ? 6 : "Unknown",
            parent: id,
            tahun: Tahun?.value?.toString(),
            kode_opd: SelectedOpd?.value,
        };
        // console.log(formData);
        try{
            const url = level == 0 ? '/pohon_kinerja_admin/create' : '/pohon_kinerja_opd/create';
            const response = await fetch(`${API_URL}${url}`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(formData),
            });
            if(response.ok){
                AlertNotification("Berhasil", "Berhasil menambahkan pohon", "success", 1000);
                onCancel();
            } else {
                AlertNotification("Gagal", "terdapat kesalahan pada backend / database server", "error", 2000);
            }
        } catch(err){
            AlertNotification("Gagal", "cek koneksi internet/terdapat kesalahan pada database server", "error", 2000);
            console.error(err);
        }
    };

    return (
        <li>
        <div className="tf-nc tf flex flex-col w-[600px] rounded-lg shadow-lg shadow-slate-500">
            <div className="flex pt-3 justify-center font-bold text-lg uppercase border my-3 py-3 border-black rounded-lg">
                {level == 0 && 
                    <h1>Ambil SubTematik Baru {id} level : {level}</h1>
                } 
                {level == 1 && 
                    <h1>Ambil Strategic Baru {id} level : {level}</h1>
                } 
                {level == 4 && 
                    <h1>Ambil Tactical Baru {id} level : {level}</h1>
                } 
                {level == 5 && 
                    <h1>Ambil Operational Baru {id} level : {level}</h1>
                }
            </div>
            <div className="flex justify-center my-3 w-full">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full'
                >
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="nama_pohon"
                        >
                            {level == 0 && 
                                "SubTematik"
                            } 
                            {level == 1 && 
                                "Strategic"
                            } 
                            {level == 4 && 
                                "Tactical"
                            } 
                            {level == 5 && 
                                "Operational"
                            }
                        </label>
                        <Controller
                            name="nama_pohon"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_pohon"
                                    type="text"
                                    placeholder="masukkan Pohon"
                                    value={field.value || NamaPohon}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaPohon(e.target.value);
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="keterangan"
                        >
                            Keterangan:
                        </label>
                        <Controller
                            name="keterangan"
                            control={control}
                            render={({ field }) => (
                                <textarea
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="keterangan"
                                    placeholder="masukkan keterangan"
                                    value={field.value || Keterangan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKeterangan(e.target.value);
                                    }}
                                />
                            )}
                        />
                    </div>
                    <ButtonSky type="submit" className="w-full my-3">
                        Simpan
                    </ButtonSky>
                    <ButtonRed className="w-full my-3" onClick={onCancel}>
                        Batal
                    </ButtonRed>
                </form>
            </div>
        </div>
        </li>
    );
};

export const FormEditPohon: React.FC<{ formId: number; id: number; level: number; onSave: (data: any, id: number) => void; onCancel: () => void }> = ({ id, level, formId, onSave, onCancel }) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm<FormValue>();
    const [NamaPohon, setNamaPohon] = useState<string>('');
    const [Keterangan, setKeterangan] = useState<string>('');
    const [Parent, setParent] = useState<number | null>(null);
    const [Tahun, setTahun] = useState<any>(null);
    const [SelectedOpd, setSelectedOpd] = useState<any>(null);
    
    useEffect(() => {
        const data = getOpdTahun();
        if(data.tahun){
            const tahun = {
                value: data.tahun.value,
                label: data.tahun.label,
            }
            setTahun(tahun);
        }
        if(data.opd){
            const opd = {
                value: data.opd.value,
                label: data.opd.label,
            }
            setSelectedOpd(opd);
        }
    },[]);

    useEffect(() => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const fetchStrategic = async() => {
            try{
                const response = await fetch(`${API_URL}/pohon_kinerja_opd/detail/${id}`);
                if(!response.ok){
                    throw new Error('terdapat kesalahan di koneksi backend');
                }
                const result = await response.json();
                const data = result.data;
                if(data.parent){
                    setParent(data.parent);
                }
                reset({
                    nama_pohon: data.nama_pohon || '',
                    keterangan: data.keterangan || '',
                    parent: data.parent || ''
                });
            } catch(err) {
                console.error(err, 'gagal mengambil data sesuai id pohon')
            }
        }
        fetchStrategic();
    },[id, reset]);
    
    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const formData = {
            //key : value
            nama_pohon : data.nama_pohon,
            Keterangan : data.keterangan,
            jenis_pohon:    level === 1 ? "SubTematik" :
                            level === 4 ? "Strategic" :
                            level === 5 ? "Tactical" :
                            level === 6 ? "Operational" : "Unknown",
            level_pohon :   level,
            parent: Number(Parent),
            tahun: Tahun?.value?.toString(),
            kode_opd: SelectedOpd?.value,
        };
        // console.log(formData);
        try{
            const url = level == 1 ? `/pohon_kinerja_admin/update/${id}` : `/pohon_kinerja_opd/update/${id}`;
            const response = await fetch(`${API_URL}${url}`, {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(formData),
            });
            if(response.ok){
                AlertNotification("Berhasil", "Berhasil edit pohon", "success", 1000);
                onCancel();
            } else {
                AlertNotification("Gagal", "terdapat kesalahan pada backend / database server", "error", 2000);
            }
        } catch(err){
            AlertNotification("Gagal", "cek koneksi internet/terdapat kesalahan pada database server", "error", 2000);
            console.error(err);
        }
    };

    return (
        <div className="tf-nc tf flex flex-col w-[600px] rounded-lg shadow-lg shadow-slate-500">
            <div className="flex pt-3 justify-center font-bold text-lg uppercase border my-3 py-3 border-black rounded-lg">
                {level == 1 && 
                    <h1>Edit Sub Tematik {id} level : {level}</h1>
                } 
                {level == 4 && 
                    <h1>Edit Strategic {id} level : {level}</h1>
                } 
                {level == 5 && 
                    <h1>Edit Tactical {id} level : {level}</h1>
                }
                {level == 6 && 
                    <h1>Edit Operational {id} level : {level}</h1>
                }
            </div>
            <div className="flex justify-center my-3 w-full">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full'
                >
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="nama_pohon"
                        >
                            {level == 1 && 
                                "SubTematik"
                            } 
                            {level == 4 && 
                                "Strategic"
                            } 
                            {level == 5 && 
                                "Tactical"
                            }
                            {level == 6 && 
                                "Operational"
                            }
                        </label>
                        <Controller
                            name="nama_pohon"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_pohon"
                                    type="text"
                                    placeholder="masukkan Pohon"
                                    value={field.value || NamaPohon}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaPohon(e.target.value);
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className="flex flex-col py-3">
                        <label
                            className="uppercase text-xs font-bold text-gray-700 my-2"
                            htmlFor="keterangan"
                        >
                            Keterangan:
                        </label>
                        <Controller
                            name="keterangan"
                            control={control}
                            render={({ field }) => (
                                <textarea
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="keterangan"
                                    placeholder="masukkan keterangan"
                                    value={field.value || Keterangan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKeterangan(e.target.value);
                                    }}
                                />
                            )}
                        />
                    </div>
                    <ButtonSky type="submit" className="w-full my-3">
                        Simpan
                    </ButtonSky>
                    <ButtonRed className="w-full my-3" onClick={onCancel}>
                        Batal
                    </ButtonRed>
                </form>
            </div>
        </div>
    );
};
