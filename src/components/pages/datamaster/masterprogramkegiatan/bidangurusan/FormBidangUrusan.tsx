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
    kode_urusan: string;
    program_indikator: string;
    tahun: string;
}

export const FormBidangUrusan = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [KodeUrusan, setKodeUrusan] = useState<string>('');
    const [ProgramIndikator, setProgramIndikator] = useState<string>('');
    const [Tahun, setTahun] = useState<string>('');

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const formData = {
            //key : value
            kode_urusan : data.kode_urusan,
            program_indikator : data.program_indikator,
            tahun : data.tahun, 
        };
        console.log(formData);
      };

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Tambah Bidang Urusan :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_urusan"
                    >
                        Kode Urusan :
                    </label>
                    <Controller
                        name="kode_urusan"
                        control={control}
                        rules={{ required: "Kode Urusan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="kode_urusan"
                                    type="text"
                                    placeholder="masukkan Kode Urusan"
                                    value={field.value || KodeUrusan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeUrusan(e.target.value);
                                    }}
                                />
                                {errors.kode_urusan ?
                                    <h1 className="text-red-500">
                                    {errors.kode_urusan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode Urusan Harus Terisi</h1>
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
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="program_indikator"
                    >
                        Program Indikator :
                    </label>
                    <Controller
                        name="program_indikator"
                        control={control}
                        rules={{ required: "Program Indikator harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="program_indikator"
                                    type="text"
                                    placeholder="masukkan Program Indikator"
                                    value={field.value || ProgramIndikator}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setProgramIndikator(e.target.value);
                                    }}
                                />
                                {errors.program_indikator ?
                                    <h1 className="text-red-500">
                                    {errors.program_indikator.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Program Indikator Harus Terisi</h1>
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