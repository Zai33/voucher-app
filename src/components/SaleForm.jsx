import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useRecordStore from "../store/useRecordStore";

const fetcher = (url) => fetch(url).then((res) => res.json());

const SaleForm = () => {
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );

  const { register, handleSubmit, reset } = useForm();
  const { addRecord } = useRecordStore();

  const onSubmit = (data) => {
    const currentData = JSON.parse(data.product);
    addRecord({
      id: Date.now(),
      product: currentData,
      quantity: data.quantity,
      cost: currentData.price * data.quantity,
      created_at: new Date().toISOString(),
    });

    reset();
  };

  return (
    <div className=" p-5 rounded-lg border shadow-md mt-5">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-2">
            <div className=" mb-5">
              <label
                className={`block mb-2 text-sm font-medium 
                  text-gray-900`}
              >
                Select Your Product
              </label>
              <select
                type="text"
                {...register("product")}
                className={`bg-gray-50 border font-bold  
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500
                 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              >
                <option value="">Select Product</option>
                {isLoading ? (
                  <option>Loading...</option>
                ) : (
                  data.map((product) => (
                    <option key={product.id} value={JSON.stringify(product)}>
                      {product.product_name}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
          <div className="col-span-2">
            <div className=" mb-5">
              <label
                className={`block mb-2 text-sm font-medium 
                text-gray-900`}
              >
                Quantity
              </label>
              <input
                type="number"
                required
                {...register("quantity")}
                className={`bg-gray-50 border font-bold  
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500
                 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
            </div>
          </div>
          <div className="col-span-1 w-full">
            <button className=" bg-blue-700 rounded-md shadow-md border-none w-40 py-8 text-white text-xl font-semibold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
