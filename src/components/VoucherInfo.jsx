import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../store/useRecordStore";
import toast from "react-hot-toast";

const VoucherInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSending, setIsSending] = useState();
  const { records, resetRecord } = useRecordStore();

  const onSubmit = async (data) => {
    setIsSending(true);
    const total = records.reduce((acc, record) => acc + record.cost, 0);
    const tax = total * 0.05;
    const netTotal = total + tax;
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}`;

    const currentVoucher = { ...data, records, total, tax, netTotal, time };

    await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentVoucher),
    });
    setIsSending(false);
    toast.success("Voucher created successfully.");
    resetRecord();
    reset();
  };

  function generateVoucherId() {
    const length = 10;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let voucherId = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      voucherId += characters[randomIndex];
    }

    return voucherId;
  }

  return (
    <div>
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)} id="info_form">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="col-span-1">
            <div className=" mb-5">
              <label
                className={`block mb-2 text-sm font-medium ${
                  errors.voucher_id ? "text-red-500" : "text-gray-900"
                }`}
              >
                VoucherId
              </label>
              <input
                {...register("voucher_id", {
                  required: true,
                })}
                type="text"
                defaultValue={generateVoucherId()}
                className={`bg-gray-50 border font-bold  ${
                  errors.voucher_id
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                // onChange={handleChange}
              />
              {errors.voucher_id?.type === "required" && (
                <p className=" text-red-500 text-sm mt-1">
                  VoucherId is required.
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className=" mb-5">
              <label
                className={`block mb-2 text-sm font-medium ${
                  errors.customer_name ? "text-red-500" : "text-gray-900"
                }`}
              >
                Customer Name
              </label>
              <input
                {...register("customer_name", {
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                })}
                type="text"
                className={`bg-gray-50 border font-bold ${
                  errors.customer_name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                // onChange={handleChange}
              />
              {errors.customer_name?.type === "required" && (
                <p className=" text-red-500 text-sm mt-1">
                  Customer_Name is required.
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className=" mb-5">
              <label
                className={`block mb-2 text-sm font-medium ${
                  errors.customer_email ? "text-red-500" : "text-gray-900"
                }`}
              >
                Customer Email
              </label>
              <input
                {...register("customer_email", {
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                })}
                type="text"
                className={`bg-gray-50 border font-bold ${
                  errors.customer_email
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                // onChange={handleChange}
              />
              {errors.customer_email?.type === "required" && (
                <p className=" text-red-500 text-sm mt-1">
                  Customer Email is required.
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className=" mb-5">
              <label
                className={`block mb-2 text-sm font-medium ${
                  errors.sale_date ? "text-red-500" : "text-gray-900"
                }`}
              >
                Sale Date
              </label>
              <input
                {...register("sale_date", {
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                })}
                type="date"
                defaultValue={new Date().toISOString().slice(0, 10)}
                className={`bg-gray-50 border font-bold ${
                  errors.sale_date
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                // onChange={handleChange}
              />
              {errors.sale_date?.type === "required" && (
                <p className=" text-red-500 text-sm mt-1">
                  Sale Date is required.
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
      <SaleForm />
      <VoucherTable />
      <div className="flex justify-end items-center gap-5 mt-5">
        <div className="flex items-center">
          <input
            {...register("all_correct")}
            id="all_correct"
            form="info_form"
            type="checkbox"
            defaultValue
            required
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="all_correct"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Make Sure All Fields are Correct.
          </label>
        </div>
        <button
          form="info_form"
          className=" inline-flex justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Comfirm Voucher
          {isSending && (
            <l-dot-spinner size="15" speed="0.9" color="white"></l-dot-spinner>
          )}
        </button>
      </div>
    </div>
  );
};

export default VoucherInfo;
