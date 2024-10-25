'use client'

import { useState, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ButtonSky, ButtonRed } from '@/components/global/Button';

interface renaksi {
    gambaran_umum: string;
}
interface modal {
    isOpen: boolean;
    onClose: () => void;
    className?: string; 
}


export const ModalGambaranUmum: React.FC<modal> = ({isOpen, onClose, className}) => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<renaksi>();
    const [GambaranUmum, setGambaranUmum] = useState<string>('');

    if(!isOpen){
        return null;
    } else {

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
            <div className={`bg-white rounded-lg p-8 z-10 w-4/5`}>
                <div className="w-max-[500px] py-2 border-b">
                    <h1 className="text-xl uppercase">Tambah Gambaran Umum</h1>
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="gambaran_umum"
                    >
                        Gambaran Umum:
                    </label>
                    <Controller
                        name="gambaran_umum"
                        control={control}
                        render={({ field }) => (
                            <textarea
                                {...field}
                                className="border px-4 py-2 rounded-lg"
                                id="gambaran_umum"
                                placeholder="masukkan gambaran umum"
                                value={field.value || GambaranUmum}
                                onChange={(e) => {
                                    field.onChange(e);
                                    setGambaranUmum(e.target.value);
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