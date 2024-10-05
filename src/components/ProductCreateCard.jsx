import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { dotSpinner } from "ldrs";
import toast from "react-hot-toast";

dotSpinner.register();

const ProductCreateCard = () => {
  // const [productData, setProductData] = useState({});
  // const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProductData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const validateData = () => {
  //   const newErrors = {};
  //   if (!productData.productName) {
  //     newErrors.productName = "Product Name is required!";
  //   } else if (productData.productName.length < 5) {
  //     newErrors.productName = "Product name must be at least 5 characters!";
  //   }

  //   if (!productData.productPrice) {
  //     newErrors.productPrice = "Product price is required!";
  //   } else if (
  //     isNaN(productData.productPrice) ||
  //     Number(productData.productPrice) <= 0
  //   ) {
  //     newErrors.productPrice = "Price must be a positive number.";
  //   }

  //   return newErrors;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newErrors = validateData();
  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }
  // };

  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleCreateProduct = async (data) => {
    setIsSending(true);
    console.log(data);
    await fetch(import.meta.env.VITE_API_URL + `/products`, {
      method: "POST",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        createdAt: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSending(false);
    reset();
    if (data.back_to_product_list) {
      navigate("/product");
    }
    toast.success("Product Add Successfully");
  };

  return (
    <div className=" bg-stone-200 px-10 py-8 rounded-lg shadow-lg mt-5 w-full md:w-1/2 lg:w-3/4">
      <h1 className="text-3xl font-bold mb-3">Create New Product</h1>
      <p className="mb-10 text-stone-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, odit.
      </p>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <div className=" mb-5">
          <label
            className={`block mb-2 text-sm font-medium ${
              errors.product_name ? "text-red-500" : "text-gray-900"
            }`}
          >
            New Product Name
          </label>
          <input
            {...register("product_name", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            type="text"
            className={`bg-gray-50 border ${
              errors.product_name
                ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="Enter Product Name"
            // onChange={handleChange}
          />
          {/* {errors.productName && (
            <p className="text-red-500 mt-3">{errors.productName}</p>
          )} */}
          {errors.product_name?.type === "required" && (
            <p className=" text-red-500 text-sm mt-1">
              Product_Name is required.
            </p>
          )}
          {errors.product_name?.type === "minLength" && (
            <p className=" text-red-500 text-sm mt-1">
              Product_Name must be greater than 3.
            </p>
          )}
          {errors.product_name?.type === "maxLength" && (
            <p className=" text-red-500 text-sm mt-1">
              Product_Name must be less than 20.
            </p>
          )}
        </div>
        <div className=" mb-3">
          <label
            className={`block mb-2 text-sm font-medium ${
              errors.price ? "text-red-500" : "text-gray-900"
            }`}
          >
            Product Price
          </label>
          <input
            {...register("price", {
              required: true,
              min: 20,
              max: 1000,
            })}
            type="number"
            className={`bg-gray-50 border ${
              errors.price
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Product Price`}
            // onChange={handleChange}
          />
          {/* {errors.productPrice && (
            <p className="text-red-500 mt-3">{errors.productPrice}</p>
          )} */}
          {errors.price?.type === "required" && (
            <p className=" text-red-500 text-sm mt-1">Price is required.</p>
          )}
          {errors.price?.type === "min" && (
            <p className=" text-red-500 text-sm mt-1">
              Price must be at least $20.
            </p>
          )}
          {errors.price?.type === "max" && (
            <p className=" text-red-500 text-sm mt-1">
              Price must be at most $10000.
            </p>
          )}
        </div>

        <div className="flex items-center mb-4">
          <input
            {...register("all_correct")}
            id="all_correct"
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
        <div className="flex items-center mb-4">
          <input
            {...register("back_to_product_list")}
            id="back_to_product_list"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="back_to_product_list"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Back to Product List{" "}
          </label>
        </div>
        <div className=" text-end">
          <Link
            to={"/product"}
            className=" px-5 py-2.5 me-2 mb-2 text-sm font-medium focus:outline-none bg-red-600 text-white rounded-lg border border-gray-200 hover:bg-red-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cancle
          </Link>

          <button
            // onClick={handleSubmit}
            className=" inline-flex justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
            {isSending && (
              <l-dot-spinner
                size="15"
                speed="0.9"
                color="white"
              ></l-dot-spinner>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductCreateCard;
