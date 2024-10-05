import React from "react";

const ProductEmplty = () => {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          colSpan={5}
          scope="row"
          className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
        >
          There is no Data.
        </th>
      </tr>
    </>
  );
};

export default ProductEmplty;
