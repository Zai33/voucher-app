import { dotSpinner } from "ldrs";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineTrash } from "react-icons/hi2";
import { useSWRConfig } from "swr";
dotSpinner.register();

const VoucherListRow = ({
  voucher: { id, voucher_id, customer_name, customer_email, sale_date, time },
  index,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { mutate } = useSWRConfig();

  const handleDelete = async () => {
    setIsDeleting(true);
    await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
      method: "DELETE",
    });
    toast.success("Voucher Deleted Successfully");
    mutate(import.meta.env.VITE_API_URL + `/vouchers`);
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-semibold text-end whitespace-nowrap dark:text-white"
      >
        {index + 1}
      </th>
      <th
        scope="row"
        className="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
      >
        {voucher_id}
      </th>
      <th
        scope="row"
        className="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
      >
        {customer_name}
      </th>
      <td className="px-6 py-4 font-semibold text-end">{customer_email}</td>
      <td className="px-6 py-4 font-semibold text-end">
        <p>{sale_date}</p>
        <p>{time}</p>
      </td>

      <td className="px-6 py-4 flex justify-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {isDeleting ? (
              <>
                <l-dot-spinner
                  size="20"
                  speed="0.9"
                  color="red"
                ></l-dot-spinner>
              </>
            ) : (
              <HiOutlineTrash className="text-red-500" />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default VoucherListRow;
