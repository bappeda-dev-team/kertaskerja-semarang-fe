import { ButtonGreen, ButtonRed } from "@/components/global/Button";

const Table = () => {
    return(
        <>
            <div className="overflow-auto m-2 rounded-t-xl border">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#99CEF5] text-white">
                            <th className="border-r border-b px-6 py-3 min-w-[50px]">No</th>
                            <th className="border-r border-b px-6 py-3 min-w-[500px]">Nama Sub Kegiatan</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Kode Sub Kegiatan</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Kode OPD</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-r border-b px-6 py-4">1</td>
                            <td className="border-r border-b px-6 py-4">Rehabilitasi Sedang/Berat Sarana, Prasarana dan Utilitas Sekolah</td>
                            <td className="border-r border-b px-6 py-4">9376497236</td>
                            <td className="border-r border-b px-6 py-4">0.234.234234.243.3.2</td>
                            <td className="border-r border-b px-6 py-4">
                                <div className="flex flex-col jutify-center items-center gap-2">
                                    <ButtonGreen className="w-full" halaman_url="/DataMaster/masterprogramkegiatan/subkegiatan/1">Edit</ButtonGreen>
                                    <ButtonRed className="w-full">Hapus</ButtonRed>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;