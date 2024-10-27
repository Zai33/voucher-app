import React from "react";
import useRecordStore from "../store/useRecordStore";

const VoucherTable = () => {
  const { records } = useRecordStore();

  return (
    <div className=" mt-5">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Cost
              </th>
              <th scope="col" className="px-6 py-3">
                {""}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b font-bold dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td className="px-6 py-4">Apple Macbook Pro</td>
              <td className="px-6 py-4">1000</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">1000</td>
              <td className="px-6 py-4">{""}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 rounded-md shadow-md flex justify-between items-center gap-5">
        <div className="w-1/2">{/* Content for the first div */}</div>
        <div className="flex items-center justify-between w-1/2">
          <p>Total:</p>
          <p>$ 0</p>
        </div>
      </div>
    </div>
  );
};

export default VoucherTable;
