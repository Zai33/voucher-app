import React from "react";

const ProductListSkeleton = () => {
  return (
    <>
      <tr className="animate-pulse border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-8"></div>
        </th>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-48"></div>
        </th>
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-16 ml-auto"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col space-y-2 items-end">
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-24"></div>
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-20"></div>
          </div>
        </td>
        <td className="px-6 py-4 flex justify-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <div className="px-4 py-2 bg-gray-300 rounded-s-lg dark:bg-gray-600 w-10 h-10"></div>
            <div className="px-4 py-2 bg-gray-300 rounded-e-lg dark:bg-gray-600 w-10 h-10"></div>
          </div>
        </td>
      </tr>
      <tr className="animate-pulse border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-8"></div>
        </th>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-48"></div>
        </th>
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-16 ml-auto"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col space-y-2 items-end">
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-24"></div>
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-20"></div>
          </div>
        </td>
        <td className="px-6 py-4 flex justify-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <div className="px-4 py-2 bg-gray-300 rounded-s-lg dark:bg-gray-600 w-10 h-10"></div>
            <div className="px-4 py-2 bg-gray-300 rounded-e-lg dark:bg-gray-600 w-10 h-10"></div>
          </div>
        </td>
      </tr>
      <tr className="animate-pulse border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-8"></div>
        </th>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-48"></div>
        </th>
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-16 ml-auto"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col space-y-2 items-end">
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-24"></div>
            <div className="h-4 bg-gray-300 rounded dark:bg-gray-600 w-20"></div>
          </div>
        </td>
        <td className="px-6 py-4 flex justify-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <div className="px-4 py-2 bg-gray-300 rounded-s-lg dark:bg-gray-600 w-10 h-10"></div>
            <div className="px-4 py-2 bg-gray-300 rounded-e-lg dark:bg-gray-600 w-10 h-10"></div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductListSkeleton;
