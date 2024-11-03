const Table = () => {
    return(
        <>
            <div className="overflow-auto m-2 rounded-t-xl border">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#99CEF5] text-white">
                            <th className="border-r border-b px-6 py-3 min-w-[50px]">No</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Kode Urusan</th>
                            <th className="border-r border-b px-6 py-3 min-w-[500px]">Program indikator</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Tahun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-r border-b px-6 py-4">1</td>
                            <td className="border-r border-b px-6 py-4">9376497236</td>
                            <td className="border-r border-b px-6 py-4">Rehabilitasi Sedang/Berat Sarana, Prasarana dan Utilitas Sekolah</td>
                            <td className="border-r border-b px-6 py-4">2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;