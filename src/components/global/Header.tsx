"use client"

import { useEffect, useState } from "react"
import {FiAperture} from "react-icons/fi"
import Select from "react-select"
import { setCookie, getOpdTahun, getUser } from "../lib/Cookie"

interface OptionType {
    value: number;
    label: string;
}
interface OptionTypeString {
    value: string;
    label: string;
}

const Header = () => {

    const [Tahun, setTahun] = useState<OptionType | null>(null);
    const [SelectedOpd, setSelectedOpd] = useState<OptionTypeString | null>(null);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
       const data = getOpdTahun();
       const fetchUser = getUser();
       if(data){
        if(data.tahun){
            const valueTahun = {
                value: data.tahun.value,
                label: data.tahun.label
            }
            setTahun(valueTahun);
        } 
        if(data.opd){
            const valueOpd = {
                value: data.opd.value,
                label: data.opd.label
            }
            setSelectedOpd(valueOpd);
        } 
        if(fetchUser){
            setUser(fetchUser.user);
        }
    }
    },[])

    const handleTahun = (selectedOption: { value: number, label: string } | null) => {
      if (selectedOption) {
        const year = {label : selectedOption.label, value: selectedOption.value};
        setCookie('tahun', JSON.stringify(year)); // Simpan value dan label ke cookies
        alert("berhasil mengganti tahun")
        setTimeout(() => {
          window.location.reload();
        }, 1000); //reload halaman dengan delay 1 detik
      }
    };
    const handleOpd = (selectedOption: { value: string, label: string } | null) => {
      if (selectedOption) {
        const opd = {label : selectedOption.label, value: selectedOption.value};
        setCookie('opd', JSON.stringify(opd)); // Simpan value dan label ke cookies
        alert("berhasil mengganti OPD")
        setTimeout(() => {
          window.location.reload();
        }, 1000); //reload halaman dengan delay 1 detik
      }
    };

    const OpdOption = [
        {label: "Badan Perencanaan, penelitian dan pengembangan daerah", value: "Badan Perencanaan, penelitian dan pengembangan daerah"},
        {label: "Dinas Komunikasi dan informasi", value: "Dinas Komunikasi dan informasi"},
        {label: "Dinas Pariwisata, Pemuda dan Olahraga", value: "Dinas Pariwisata, Pemuda dan Olahraga"},
        {label: "Dinas Pendidikan", value: "Dinas Pendidikan"},
        {label: "Badan Pengelolaan Keuangan Daerah", value: "Badan Pengelolaan Keuangan Daerah"},
    ];
    const TahunOption = [
        {label: "Tahun 2019", value: 2019},
        {label: "Tahun 2020", value: 2020},
        {label: "Tahun 2020", value: 2020},
        {label: "Tahun 2021", value: 2021},
        {label: "Tahun 2022", value: 2022},
        {label: "Tahun 2023", value: 2023},
        {label: "Tahun 2024", value: 2024},
        {label: "Tahun 2025", value: 2025},
        {label: "Tahun 2026", value: 2026},
        {label: "Tahun 2027", value: 2027},
        {label: "Tahun 2028", value: 2028},
        {label: "Tahun 2029", value: 2029},
        {label: "Tahun 2030", value: 2030},
    ];

    return(
        <div className="flex justify-between items-center border-b bg-gray-800 py-4 pr-2 pl-3">
            <div className="flex items-center justify-center pl-3 text-white">
                <FiAperture className="w-9 h-9 mr-2"/>
                <div className="flex flex-col">
                    <h1 className="font-normal">{SelectedOpd ? SelectedOpd?.label : "Pilih OPD"}</h1>
                    <h1 className="font-normal">{Tahun ? Tahun?.value : "Pilih Tahun"} - Kab. Madiun</h1>
                </div>
            </div>
            <div className="flex flex-wrap items-center">
                <Select
                    styles={{
                        control: (baseStyles) => ({
                        ...baseStyles,
                        borderRadius: '8px',
                        marginLeft: '4px',
                        marginRight: '4px',
                        minWidth: '157.562px',
                        maxWidth: '200px',
                        })
                    }}
                    onChange={(option) => handleOpd(option)}
                    options={OpdOption}
                    placeholder="Pilih OPD ..."
                    value={SelectedOpd}
                    isSearchable
                />
                <Select
                    styles={{
                        control: (baseStyles) => ({
                        ...baseStyles,
                        borderRadius: '8px',
                        marginLeft: '4px',
                        marginRight: '4px',
                        minWidth: '157.562px',
                        maxWidth: '200px',
                        })
                    }}
                    options={TahunOption}
                    placeholder="Pilih Tahun ..."
                    onChange={(option) => handleTahun(option)}
                    value={Tahun}
                    isSearchable
                />
                {user == "super_admin" && 
                    <button className="border border-white text-white px-3 py-2 mx-1 min-w-20 rounded-lg hover:bg-white hover:text-gray-800">Super Admin</button>
                }
                {user == "admin_opd" && 
                    <button className="border border-white text-white px-3 py-2 mx-1 min-w-20 rounded-lg hover:bg-white hover:text-gray-800">Admin Opd</button>
                }
                {user == "asn" && 
                    <button className="border border-white text-white px-3 py-2 mx-1 min-w-20 rounded-lg hover:bg-white hover:text-gray-800">ASN</button>
                }
                {user == undefined && 
                    <button className="border border-white text-white px-3 py-2 mx-1 min-w-20 rounded-lg hover:bg-white hover:text-gray-800">Loading</button>
                }
            </div>
        </div>
    )
}

export default Header;