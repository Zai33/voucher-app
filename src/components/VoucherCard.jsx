import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import VoucherRecordsList from "./VoucherRecordsList";
import printJS from "print-js";
import html2pdf from "html2pdf.js";

const fetcher = (url) => fetch(url).then((res) => res.json());

const VoucherCard = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + `/vouchers/${id}`,
    fetcher
  );

  const handleToPrint = () => {
    printJS({
      printable: "printArea",
      type: "html",
      css: "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
    });
  };

  const handleDownloadPDF = () => {
    const element = document.getElementById("printArea");
    html2pdf()
      .from(element)
      .set({
        margin: 10,
        filename: "voucher.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .save();
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col gap-4 items-center justify-center p-6">
      <div
        id="printArea"
        className="bg-white shadow-lg rounded-lg p-6 w-[14.8cm]"
      >
        <div className="text-center border-b pb-4">
          <h1 className="text-3xl font-bold">COMPANY NAME</h1>
          <p className="text-gray-500">
            408 Commonwealth Ave, Tandang Sora, MNL, PH, 46360
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <h2 className="text-lg font-semibold">INVOICE #</h2>
            <p className="text-gray-600 font-semibold">{data.voucher_id}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">DATE</h2>
            <p className="text-gray-600 font-semibold">{data.sale_date}</p>
          </div>
          <div className="bg-gray-800 text-white px-4 py-2 rounded-md">
            <p className="text-lg font-bold">{`${data.netTotal} KYATS`}</p>
          </div>
        </div>

        <table className="w-full mt-6 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 border-b border-gray-300">
              <th className="text-left p-2 font-semibold border border-gray-300">
                ITEM NAME
              </th>
              <th className="text-center p-2 font-semibold border border-gray-300">
                QTY
              </th>
              <th className="text-center p-2 font-semibold border border-gray-300">
                PRICE
              </th>
              <th className="text-center p-2 font-semibold border border-gray-300">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {data.records.length === 0 ? (
              <tr className="border-b border-gray-300">
                <td
                  className="p-2 text-center border border-gray-300"
                  colSpan={4}
                >
                  No records found
                </td>
              </tr>
            ) : (
              data.records.map((record, index) => (
                <VoucherRecordsList key={index} record={record} />
              ))
            )}
          </tbody>
        </table>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">BILLING ADDRESS</h3>
            <p className="text-gray-600">Sophia Phillips</p>
            <p className="text-gray-600">
              817 Cedar Springs Rd, Athens, TN, 37303
            </p>
          </div>
          <div className="text-right">
            <h3 className="font-semibold">CUSTOMER INFO</h3>
            <p className="text-gray-600 font-semibold">{data.customer_name}</p>
            <p className="text-gray-600 font-semibold">{data.customer_email}</p>
          </div>
        </div>

        <div className="mt-6 text-right">
          <p className="text-gray-600">{`SUB TOTAL : ${data.total} `}</p>
          <p className="text-gray-600">{`TAX (5%) : ${data.tax}`}</p>
          <p className="text-xl font-bold">{`NET TOTAL : ${data.netTotal}`}</p>
        </div>

        <div className="mt-6 border-t pt-4 text-center">
          <h3 className="font-semibold">CUSTOMER SERVICE</h3>
          <p className="text-gray-600">
            +76 209 1092 4098 | (04) 298 1029 1092
          </p>
          <p className="text-gray-600">kyawzinwinhtike6@gmail.com</p>
        </div>
      </div>
      <div className=" flex gap-4 mt-4">
        <button
          onClick={handleToPrint}
          className=" w-36 py-4 bg-blue-600 rounded-lg shadow-lg text-white font-semibold hover:bg-blue-700 cursor-pointer"
        >
          Print
        </button>
        <button
          onClick={handleDownloadPDF}
          className=" w-36 py-4 bg-blue-600 rounded-lg shadow-lg text-white font-semibold hover:bg-blue-700 cursor-pointer"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default VoucherCard;
