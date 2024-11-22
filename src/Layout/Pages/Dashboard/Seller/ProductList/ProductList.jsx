import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/AxiosSecure";
import useUserData from "../../../../Hooks/UserData/UserData";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductList = () => {
  const axiosSecure = useAxiosSecure();
  const useData = useUserData();
  const navigate = useNavigate();
  const [sellerProducts, setSellerProducts] = useState([]);

  useEffect(() => {
    const fatchProduct = async () => {
      const res = await axiosSecure.get(`/seller-product/${useData.userEmail}`);
      setSellerProducts(res.data);
    };

    fatchProduct();
  }, [axiosSecure, useData, navigate]);

  // Handle delete product__ __ __!
  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e00809",
      cancelButtonColor: "#2563eb",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/product-delete/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount === 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }

          const remainingData = sellerProducts.filter(
            (item) => item._id !== id
          );
          setSellerProducts(remainingData);
        });
      }
    });
  };

  return (
    <>
      <div className="w-full h-auto">
        <section className="container px-4 mx-auto max-w-screen-2xl">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800">
              Total Products
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
              100 users
            </span>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Product</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Status</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Category</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Email address
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Product price
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Edit
                        </th>
                      </tr>
                    </thead>

                    {sellerProducts.map((sellerProduct) => (
                      <tbody
                        key={sellerProduct._id}
                        className="bg-white divide-y divide-gray-200"
                      >
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <img
                                  className="object-cover w-32 h-16 rounded-xl"
                                  src={sellerProduct.image}
                                  alt="image"
                                />

                                <div>
                                  <h2 className="font-medium text-gray-800">
                                    {useData.userName}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                              <h2 className="text-sm font-normal uppercase text-emerald-500">
                                {sellerProduct.productStatus}
                              </h2>
                            </div>
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {sellerProduct.category}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {sellerProduct.sellerEmail}
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <p className="px-3 py-1 text-sm line-through text-indigo-500 rounded-full bg-indigo-100/60">
                                ${sellerProduct.oldPrice}
                              </p>
                              <p className="px-3 py-1 text-sm text-blue-500 rounded-full bg-blue-100/60">
                                ${sellerProduct.newPrice}
                              </p>
                              <p className="px-3 py-1 text-sm text-pink-500 rounded-full bg-pink-100/60">
                                {sellerProduct.savings}%
                              </p>
                            </div>
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              <button
                                onClick={() =>
                                  handleDeleteProduct(sellerProduct._id)
                                }
                                className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </button>

                              <button className="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductList;
