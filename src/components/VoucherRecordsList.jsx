import React from "react";

const VoucherRecordsList = ({
  record: {
    quantity,
    product: { price, product_name },
  },
}) => {
  return (
    <tr className="border-b border-gray-300">
      <td className="p-2 border border-gray-300">{product_name}</td>
      <td className="text-center p-2 border border-gray-300">{quantity}</td>
      <td className="text-center p-2 border border-gray-300">$ {price}</td>
      <td className="text-center p-2 border border-gray-300">
        $ {quantity * price}
      </td>
    </tr>
  );
};

export default VoucherRecordsList;
