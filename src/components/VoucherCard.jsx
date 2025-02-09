import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import VoucherRecordsList from "./VoucherRecordsList";

const fetcher = (url) => fetch(url).then((res) => res.json());

const VoucherCard = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + `/vouchers/${id}`,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  console.log(data);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <div className="text-center border-b pb-4">
          <h1 className="text-3xl font-bold">COMPANY NAME</h1>
          <p className="text-gray-500">
            408 Commonwealth Ave, Tandang Sora, MNL, PH, 46360
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <h2 className="text-lg font-semibold">INVOICE #</h2>
            <p className="text-gray-600">{data.voucher_id}</p>
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
          <div>
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
    </div>
  );
};

export default VoucherCard;
