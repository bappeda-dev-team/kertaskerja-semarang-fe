'use client'

import { ButtonSky, ButtonSkyBorder } from "@/components/global/Button";
import Select from 'react-select';

const Sakip = () => {
    return(
        <>
        {/* SasaranKinerja */}
        <div className="mt-3 rounded-t-xl border px-5 py-3">
                <div className="flex justify-between">
                    <h1>Sasaran Kinerja</h1>
                    <ButtonSky halaman_url='/rencanakinerja/1/edit'>Edit Sasaran</ButtonSky>
                </div>
                <div className="mx-2 mt-3">
                    <table className="w-full">
                        <tbody className='border'>
                            <tr>
                                <td className="px-2 py-2 border">OPD </td>
                                <td className="px-2 py-2 border">Badan perencanaan, penelitian dan pengembangan daerah</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">ASN </td>
                                <td className="px-2 py-2 border">Nama lengkap ASN</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">NIP </td>
                                <td className="px-2 py-2 border">197364193647</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Pangkat </td>
                                <td className="px-2 py-2 border">eselon 4</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Sasaran Kinerja </td>
                                <td className="px-2 py-2 border">Tersusunnya dokumen rancangan aplikasi rencana kinerja terintegrasi</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Tahun </td>
                                <td className="px-2 py-2 border">2024</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Indikator Kinerja </td>
                                <td className="px-2 py-2 border">Dokument rancanngan aplikasi</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Target Indikator Kinerja </td>
                                <td className="px-2 py-2 border"> 1 Dokumen</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Manual IK </td>
                                <td className="px-2 py-2 border"><ButtonSkyBorder>edit Manual IK</ButtonSkyBorder></td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 border">Data Input </td>
                                <td className="px-2 py-2 border">kinerja</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Sakip; 