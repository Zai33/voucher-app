import React, { useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { useSWRConfig } from "swr";
import { dotSpinner } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

dotSpinner.register();

const ProductRow = ({ product }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { mutate } = useSWRConfig();
  const date = new Date(product.createdAt);
  const formatDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formatTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const handleDelete = async () => {
    setIsDeleting(true);
    await fetch(import.meta.env.VITE_API_URL + `/products/${product.id}`, {
      method: "DELETE",
    });
    toast.success("Product Delete Successfully");
    mutate(import.meta.env.VITE_API_URL + `/products`);
  };

  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {product.id}
        </th>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {product.product_name}
        </th>
        <td className="px-6 py-4 text-end">{product.price}</td>
        <td className="px-6 py-4 text-end">
          <p>{formatDate}</p>
          <p>{formatTime}</p>
        </td>

        <td className="px-6 py-4 flex justify-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <Link
              to={`/product/edit/${product.id}`}
              className=" size-10 flex items-center justify-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <HiOutlinePencil className="text-blue-500" />
            </Link>
            <button
              onClick={handleDelete}
              type="button"
              className=" size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
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
    </>
  );
};

export default ProductRow;
