import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/AxiosSecure";
import Swal from "sweetalert2";
import { useContext, useRef } from "react";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import useUserData from "../../../../Hooks/UserData/UserData";

const AddProduct = () => {
  const axiosSecure = useAxiosSecure();
  const userData = useUserData();
  const { user } = useContext(AuthContext);
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const savingMony = ((data.oldPrice - data.newPrice) / data.oldPrice) * 100;
    const savings = Math.round(savingMony);

    const newProduct = {
      name: data.name,
      sellerEmail: user.email,
      oldPrice: data.oldPrice,
      newPrice: data.newPrice,
      savings,
      color: data.color,
      category: data.category,
      productStatus: data.status,
      image: data.image,
      description: data.description,
    };

    axiosSecure.post("/add-product", newProduct).then((res) => {
      if (res.data.acknowledged) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Product added successfully",
        });

        formRef.current.reset();
      }
    });
  };

  return (
    <>
      {userData.status === "pending" ? (
        <div className="w-full h-full flex items-center justify-center flex-col">
          <h2 className="text-3xl pb-5">
            Admin does not accept you request. Your request is on pending.
          </h2>
          <p className="text-xl">
            Request will accept in{" "}
            <span className="text-green-500 font-bold">24h</span>
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-[#f0f0f0]">
          <section className="p-6 w-full max-w-5xl bg-white rounded-md shadow-md">
            <h2 className="text-lg font-semibold text-[#563eb] capitalize">
              Add Product
            </h2>

            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700">Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your product name"
                    {...register("name", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                  <div>
                    {errors.name && (
                      <span className="text-sm text-red-500">
                        Field is required
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-gray-700">Category</label>
                  <select
                    {...register("category")}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  >
                    <option disabled selected>
                      Product category
                    </option>
                    <option value="Athletic">Athletic</option>
                    <option value="Hiking">Hiking </option>
                    <option value="Formal">Formal</option>
                    <option value="Sneakers">Sneakers</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-700">Old Price</label>
                  <input
                    name="oldPrice"
                    type="text"
                    placeholder="$***"
                    {...register("oldPrice", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                  <div>
                    {errors.oldPrice && (
                      <span className="text-sm text-red-500">
                        Field is required
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-gray-700">New Price</label>
                  <input
                    name="newPrice"
                    type="text"
                    placeholder="$***"
                    {...register("newPrice", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                  <div>
                    {errors.newPrice && (
                      <span className="text-sm text-red-500">
                        Field is required
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-gray-700">Color</label>
                  <input
                    name="color"
                    type="text"
                    placeholder="Black"
                    {...register("color", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                  <div>
                    {errors.color && (
                      <span className="text-sm text-red-500">
                        Field is required
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-gray-700">Status</label>
                  <select
                    {...register("status")}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  >
                    <option disabled selected>
                      Product status
                    </option>
                    <option value="new">New Arrivel</option>
                    <option value="topSell">Top sell</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-700">Image url</label>
                  <input
                    name="image"
                    type="text"
                    {...register("image", { required: true })}
                    placeholder="https://example.com/5vxYDpF/sole-mart.jpg"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                  <div>
                    {errors.image && (
                      <span className="text-sm text-red-500">
                        Field is required
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-gray-700">Description</label>
                  <textarea
                    type="password"
                    name="description"
                    rows="4"
                    cols="50"
                    {...register("description", { required: true })}
                    placeholder="Write between 15 to 20 words."
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                  <div>
                    {errors.description && (
                      <span className="text-sm text-red-500">
                        Field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#2563eb] rounded-md focus:outline-none"
                >
                  Add
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default AddProduct;