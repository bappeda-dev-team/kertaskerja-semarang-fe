import PohonCascading from "@/components/pages/Pohon/pohoncascading";

const ztestPage = () => {
  return(
    <table className="table-fixed w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-blue-200 text-left">
          <th className="w-10 border border-gray-300 p-2">No</th>
          <th className="w-1/5 border border-gray-300 p-2">Pohon Kinerja</th>
          <th className="w-1/5 border border-gray-300 p-2">Rencana Kinerja</th>
          <th className="w-1/10 border border-gray-300 p-2">Tahun</th>
          <th className="w-1/4 border border-gray-300 p-2">Indikator Rencana Kinerja</th>
          <th className="w-1/4 border border-gray-300 p-2">Target / Satuan</th>
        </tr>
      </thead>
      <tbody>
        {/* <!-- Baris pertama --> */}
        <tr>
          <td className="border border-gray-300 p-2 text-center">1</td>
          <td className="border border-gray-300 p-2 align-top">xxx</td>
          <td className="border border-gray-300 p-2 align-top">cek rencana kinerja pertama</td>
          <td className="border border-gray-300 p-2 align-top text-center">2024</td>
          <td className="border border-gray-300 p-2 align-top">
            <table className="w-full border-collapse">
              <tr>
                <td className="border border-gray-300 p-2">Indikator 1</td>
                <td className="border border-gray-300 p-2">
                  <button className="border px-3 py-1 rounded-md text-green-500 border-green-500">
                    Manual IK
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border border-gray-300 p-2">
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </td>
              </tr>
            </table>
          </td>
          <td className="border border-gray-300 p-2 align-top">
            <table className="w-full border-collapse">
              <tr>
                <td className="border border-gray-300 p-2">Target 1 / meter</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Target 2 / kilo</td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ztestPage;