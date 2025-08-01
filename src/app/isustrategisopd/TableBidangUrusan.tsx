import { ButtonBlackBorder } from "@/components/global/Button";
import { TbCirclePlus } from "react-icons/tb";

const TableBidangUrusan = () => {
    return (
        <div className="overflow-auto m-2 rounded-t-xl border border-gray-300">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="border-r border-b border-gray-300 px-6 py-3 text-center w-[50px]">No</th>
                        <th className="border-r border-b border-gray-300 px-6 py-3">Bidang Urusan</th>
                        <th className="border-b border-gray-300 px-6 py-3 w-[300px]">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-r border-b border-gray-300 py-4 px-3 text-center">1</td>
                        <td className="border-r border-b border-gray-300 px-6 py-4">(5.01) Bidang Urusan pertama</td>
                        <td className="border-b border-gray-300 px-6 py-4">
                            <div className="flex flex-col jutify-center items-center gap-2">
                                <ButtonBlackBorder
                                    className="flex items-center gap-1 w-full"
                                >

                                    <TbCirclePlus />
                                    Tambah Isu Strategis
                                </ButtonBlackBorder>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-r border-b border-gray-300 py-4 px-3 text-center">2</td>
                        <td className="border-r border-b border-gray-300 px-6 py-4">(5.02)Bidang Urusan Kedua</td>
                        <td className="border-b border-gray-300 px-6 py-4">
                            <div className="flex flex-col jutify-center items-center gap-2">
                                <ButtonBlackBorder
                                    className="flex items-center gap-1 w-full"
                                >

                                    <TbCirclePlus />
                                    Tambah Isu Strategis
                                </ButtonBlackBorder>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableBidangUrusan;