import React from "react";
import useRecordStore from "../store/useRecordStore";
import VoucherTableRow from "./VoucherTableRow";

const VoucherTable = () => {
  const { records } = useRecordStore();
  const total = records.reduce((acc, record) => acc + record.cost, 0);
  const tax = total * 0.05;
  const netTotal = total + tax;

  return (
    <div className=" mt-5">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-end">
                #
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Cost
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                {""}
              </th>
            </tr>
          </thead>
          <tbody>
            {records.length === 0 && (
              <tr className="hidden last:table-row dark:bg-gray-800">
                <td
                  colSpan={6}
                  className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  There is no record. Buy something.
                </td>
              </tr>
            )}
            {records.map((record, index) => (
              <VoucherTableRow key={record.id} record={record} index={index} />
            ))}
          </tbody>
          <tfoot>
            <tr className="border-b font-bold dark:border-gray-700">
              <td className="px-6 py-4 text-end" colSpan={4}>
                Total
              </td>
              <td className="px-6 py-4 text-end">{total.toFixed(2)}</td>
              <td className="px-6 py-4 text-end"></td>
            </tr>
            <tr className="border-b font-bold dark:border-gray-700">
              <td className="px-6 py-4 text-end" colSpan={4}>
                Tax ( VAT 5% )
              </td>
              <td className="px-6 py-4 text-end">{tax.toFixed(2)}</td>
              <td className="px-6 py-4 text-end"></td>
            </tr>
            <tr className="border-b font-bold dark:border-gray-700">
              <td className="px-6 py-4 text-end" colSpan={4}>
                Net Total ( KS )
              </td>
              <td className="px-6 py-4 text-end">{netTotal.toFixed(2)}</td>
              <td className="px-6 py-4 text-end"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default VoucherTable;
