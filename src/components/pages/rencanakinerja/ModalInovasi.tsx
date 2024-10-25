'use client'

import { useState, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ButtonSky, ButtonRed } from '@/components/global/Button';

interface renaksi {
    judul_inovasi: string;
    jenis_inovasi: string;
    gambaran_nilai_kebaruan: string;
}
interface modal {
    isOpen: boolean;
    onClose: () => void;
    className?: string; 
}


export const ModalInovasi: React.FC<modal> = ({isOpen, onClose, className}) => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<renaksi>();
    const [JudulInovasi, setJudulInovasi] = useState<string>('');
    const [JenisInovasi, setJenisInovasi] = useState<string>('');
    const [Gambaran, setGambaran] = useState<string>('');

    if(!isOpen){
        return null;
    } else {

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
            <div className={`bg-white rounded-lg p-8 z-10 w-4/5`}>
                <div className="w-max-[500px] py-2 border-b">
                    <h1 className="text-xl uppercase">Tambah Inovasi Sasaran</h1>
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="judul_inovasi`"
                    >
                        Judul Inovasi:
                    </label>
                    <Controller
                        name="judul_inovasi"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="border px-4 py-2 rounded-lg"
                                id="judul_inovasi`"
                                type="text"
                                placeholder="masukkan Judul Inovasi"
                                value={field.value || JudulInovasi}
                                onChange={(e) => {
                                    field.onChange(e);
                                    setJudulInovasi(e.target.value);
                                }}
                            />
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="jenis_inovasi"
                    >
                        Jenis Inovasi:
                    </label>
                    <Controller
                        name="jenis_inovasi"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="border px-4 py-2 rounded-lg"
                                id="jenis_inovasi"
                                type="number"
                                placeholder="masukkan jenis inovasi"
                                value={field.value || JenisInovasi}
                                onChange={(e) => {
                                    field.onChange(e);
                                    setJenisInovasi(e.target.value);
                                }}
                            />
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="gambaran_nilai_kebaruan"
                    >
                        Gambaran Nilai Kebaruan:
                    </label>
                    <Controller
                        name="gambaran_nilai_kebaruan"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="border px-4 py-2 rounded-lg"
                                id="gambaran_nilai_kebaruan"
                                type="number"
                                placeholder="masukkan gambaran nilai"
                                value={field.value || Gambaran}
                                onChange={(e) => {
                                    field.onChange(e);
                                    setGambaran(e.target.value);
                                }}
                            />
                        )}
                    />
                </div>
                <ButtonSky className="w-full my-3">
                    Simpan
                </ButtonSky>
                <ButtonRed className="w-full my-3" onClick={onClose}>
                    Batal
                </ButtonRed>
            </div>
        </div>
    )
    }
}