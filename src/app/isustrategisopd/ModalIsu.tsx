'use client'

import { useState, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ButtonSky, ButtonRed } from '@/components/global/Button';
import { getToken, getUser, getPeriode } from "@/components/lib/Cookie";
import { LoadingButtonClip } from "@/components/global/Loading";
import { Permasalahan, DataDukung, BidangUrusan, TargetJumlahData, TablePermasalahan } from "@/types";
import Select from "react-select";
import { AlertNotification } from "@/components/global/Alert";
import { useBrandingContext } from "@/context/BrandingContext";

interface FormValue {
    id?: string;
    kode_opd: string;
    nama_opd: string;
    kode_bidang_urusan: BidangUrusan;
    tahun_awal: string;
    tahun_akhir: string;
    isu_strategis: string;
    permasalahan_opd: Permasalahan;
}
interface modal {
    isOpen: boolean;
    onClose: () => void;
    metode: 'edit' | 'baru' | '';
    id?: string;
    onSuccess: () => void;
}


export const ModalIsu: React.FC<modal> = ({ isOpen, onClose, id, metode, onSuccess }) => {

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValue>();

    const [BidangUrusanOption, setBidangUrusanOption] = useState<BidangUrusan[]>([]);
    const [PermasalahanOption, setPermasalahanOption] = useState<TablePermasalahan[]>([]);

    const [User, setUser] = useState<any>(null);
    const [Periode, setPeriode] = useState<any>(null);
    const [Proses, setProses] = useState<boolean>(false);
    const [LoadingOption, setLoadingOption] = useState<boolean>(false);

    const token = getToken();
    const { branding } = useBrandingContext();

    useEffect(() => {
        const fetchUser = getUser();
        const fetchPeriode = getPeriode();
        if (fetchUser) {
            setUser(fetchUser.user);
        }
        if (fetchPeriode.periode) {
            const data = {
                value: fetchPeriode.periode.value,
                label: fetchPeriode.periode.label,
                id: fetchPeriode.periode.value,
                tahun_awal: fetchPeriode.periode.tahun_awal,
                tahun_akhir: fetchPeriode.periode.tahun_akhir,
                jenis_periode: fetchPeriode.periode.jenis_periode,
                tahun_list: fetchPeriode.periode.tahun_list
            }
            setPeriode(data);
        }
    }, []);

    const fetchBidangUrusanOption = async () => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        try {
            setLoadingOption(true);
            const response = await fetch(`${API_URL}/bidang_urusan/findall/${branding?.opd?.value}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
            });
            const result = await response.json();
            if (result.code === 200 || result.code === 201) {
                const data = result.data.map((item: BidangUrusan) => ({
                    value: item.kode_bidang_urusan,
                    label: `(${item.kode_bidang_urusan}) ${item.nama_bidang_urusan}`,
                    kode_bidang_urusan: item.kode_bidang_urusan,
                    nama_bidang_urusan: item.nama_bidang_urusan
                }));
                setBidangUrusanOption(data);
            } else {
                console.log(result.data);
                setBidangUrusanOption([]);
            }
        } catch (err) {
            setBidangUrusanOption([]);
            console.log(err);
        } finally {
            setLoadingOption(false);
        }
    }

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL_PERMASALAHAN;
        const formDataNew = {
            //key : value
            nama_opd: branding?.opd?.label,
            kode_opd: branding?.opd?.value,
            kode_bidang_urusan: data.kode_bidang_urusan.value,
            nama_bidang_urusan: data.kode_bidang_urusan.nama_bidang_urusan,
            tahun_awal: Periode.tahun_awal,
            tahun_akhir: Periode.tahun_akhir,
            isu_strategis: data.isu_strategis,
        };
        const formDataEdit = {
            //key : value
            id: id,
            nama_opd: branding?.opd?.label,
            kode_opd: branding?.opd?.value,
            kode_bidang_urusan: data.kode_bidang_urusan.value,
            nama_bidang_urusan: data.kode_bidang_urusan.nama_bidang_urusan,
            tahun_awal: Periode.tahun_awal,
            tahun_akhir: Periode.tahun_akhir,
            isu_strategis: data.isu_strategis,
        };
        const getBody = () => {
            if (metode === "edit") return formDataEdit;
            if (metode === "baru") return formDataNew;
            return {}; // Default jika metode tidak sesuai
        };
        metode === 'baru' && console.log("baru :", formDataNew);
        metode === 'edit' && console.log("edit :", formDataEdit);
    };

    const handleClose = () => {
        onClose();
        reset();
    }

    if (!isOpen) {
        return null;
    } else {

        return (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-black opacity-30" onClick={handleClose}></div>
                <div className={`bg-white rounded-lg p-8 z-10 w-4/5`}>
                    <div className="w-max-[500px] py-2 border-b">
                        <h1 className="text-xl uppercase text-center">{metode === 'baru' ? "Tambah" : "Edit"} Isu Strategis</h1>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col mx-5 py-5"
                    >
                        <div className="flex flex-col py-3">
                            <label
                                className="uppercase text-xs font-bold text-gray-700 my-2"
                                htmlFor="kode_bidang_urusan"
                            >
                                Bidang Permasalahan:
                            </label>
                            <Controller
                                name="kode_bidang_urusan"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        id="kode_bidang_urusan"
                                        options={BidangUrusanOption}
                                        isLoading={LoadingOption}
                                        onMenuOpen={() => {
                                            if(BidangUrusanOption.length == 0){
                                                fetchBidangUrusanOption()
                                            } else {
                                                null
                                            }
                                        }}
                                        placeholder="Pilih Bidang Urusan"
                                        noOptionsMessage={() => `bidang urusan kosong, tambahkan di data master (super_admin)`}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                borderRadius: '8px',
                                                borderColor: 'black',
                                                '&:hover': {
                                                    borderColor: '#3673CA',
                                                },
                                            }),
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div className="flex flex-col py-3">
                            <label
                                className="uppercase text-xs font-bold text-gray-700 my-2"
                                htmlFor="isu_strategis"
                            >
                                Isu Strategis:
                            </label>
                            <Controller
                                name="isu_strategis"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        className="border px-4 py-2 rounded-lg"
                                        id="isu_strategis"
                                        type="text"
                                        placeholder="masukkan Isu Strategis"
                                        onChange={(e) => {
                                            field.onChange(e);
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div className="flex flex-col gap-2 my-3">
                            <ButtonSky className="w-full" type="submit" disabled={Proses}>
                                {Proses ?
                                    <span className="flex">
                                        <LoadingButtonClip />
                                        Menyimpan...
                                    </span>
                                    :
                                    "Simpan"
                                }
                            </ButtonSky>
                            <ButtonRed className="w-full" onClick={handleClose}>
                                Batal
                            </ButtonRed>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}