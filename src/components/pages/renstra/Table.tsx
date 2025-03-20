interface renstra {
    nama: string;
    kode: string;
    jenis: string;
    childs : renstra[]
}

interface table {
    data: renstra[];
}

export const TableRenstra = () => {
    return(
        <div className="overflow-auto m-2 rounded-t-xl border">
            <table className="w-full">
                <thead>
                    <tr className="bg-red-500 text-white">
                        <td className="border-r border-b px-6 py-4 min-w-[50px] text-center">No</td>
                        <td className="border-r border-b px-6 py-4 min-w-[200px]">Kode</td>
                        <td className="border-r border-b px-6 py-4 min-w-[200px]">Nama</td>
                        <td className="border-r border-b px-6 py-4 min-w-[200px]">Jenis</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-x border-b px-6 py-4 text-center">1</td>
                        <td className="border-r border-b px-6 py-4">10247107</td>
                        <td className="border-r border-b px-6 py-4">Program pertama</td>
                        <td className="border-r border-b px-6 py-4">Program</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}