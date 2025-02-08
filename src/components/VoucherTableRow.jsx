import React, { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import useRecordStore from "../store/useRecordStore";
import toast from "react-hot-toast";

const VoucherTableRow = ({
  record: {
    id,
    cost,
    quantity,
    product: { product_name, price },
  },
  index,
}) => {
  const [showControls, setShowControls] = useState(false);
  const { removeRecord, updateRecord } = useRecordStore();

  const increaseQuantity = () => {
    updateRecord(id, 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      updateRecord(id, -1);
    }
  };

  const handleRemove = (id) => {
    removeRecord(id);
    toast.success("Product removed from the list.");
  };

  return (
    <tr
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 font-semibold border-b dark:border-gray-700"
    >
      <td className="px-6 py-4 text-end">{index + 1}</td>
      <td className="px-6 py-4 text-end">{product_name}</td>
      <td className="px-6 py-4 text-end">{price}</td>
      <td className="px-6 py-4 text-end flex items-center justify-end gap-2">
        <button
          onClick={decreaseQuantity}
          className={`text-gray-500 hover:text-gray-700 transition-transform duration-300 ${
            showControls ? "scale-100" : "scale-0"
          }`}
        >
          <AiOutlineMinusCircle size={22} />
        </button>
        <span className="font-bold">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className={`text-gray-500 hover:text-gray-700 transition-transform duration-300 ${
            showControls ? "scale-100" : "scale-0"
          }`}
        >
          <AiOutlinePlusCircle size={22} />
        </button>
      </td>
      <td className="px-6 py-4 text-end">{cost}</td>
      <td className="px-6 py-4 text-center">
        <button
          onClick={() => handleRemove(id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <AiOutlineDelete size={20} />
        </button>
      </td>
    </tr>
  );
};

export default VoucherTableRow;
