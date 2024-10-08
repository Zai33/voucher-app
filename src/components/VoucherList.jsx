import React from "react";
import { HiSearch } from "react-icons/hi";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";

const VoucherList = () => {
  return (
    <div>
      <div className="mt-4">
        <div className="flex justify-between mb-3">
          <div className="">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <HiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Voucher"
              />
            </div>
          </div>
          <div>
            <Link
              to={"/sale"}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Sale
            </Link>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer name
                </th>
                <th scope="col" className="px-6 py-3 text-end">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-end">
                  CreatedAt
                </th>
                <th scope="col" className="px-6 py-3 text-end">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hidden last:table-row">
                <th
                  colSpan={5}
                  scope="row"
                  className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
                >
                  There is no Voucher.
                </th>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Kyaw Kyaw
                </th>
                <td className="px-6 py-4 text-end">kyawkyaw@gmail.com</td>
                <td className="px-6 py-4 text-end">
                  <p>7 Sep 2024</p>
                  <p>10:00 PM</p>
                </td>

                <td className="px-6 py-4 flex justify-end">
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      <HiOutlinePencil className="text-blue-500" />
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      <HiOutlineTrash className="text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VoucherList;
