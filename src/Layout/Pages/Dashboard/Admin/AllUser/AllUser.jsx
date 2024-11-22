import "./AllUser.css";
import { LuUser } from "react-icons/lu";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/AxiosSecure";
import Swal from "sweetalert2";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, [axiosSecure]);

  // Handle seller approved__ __ __!
  const handleApprovedSeller = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You wen't to approved",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#088408",
      cancelButtonColor: "#2563eb",
      confirmButtonText: "Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/make-seller/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            window.location.reload();
            Swal.fire({
              title: "Deleted!",
              text: "Seller request approved!",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <div className="w-full h-auto">
        <section className="container px-4 mx-auto max-w-screen-2xl">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800">Total</h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
              {users.length} users
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
                            <span>Name</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Role</span>
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
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Edit
                        </th>
                      </tr>
                    </thead>
                    {users.map((user) => (
                      <tbody
                        key={user._id}
                        className="bg-white divide-y divide-gray-200"
                      >
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <div>
                                  <h2 className="flex items-center text-base justify-center gap-2 font-medium pl-8 text-gray-800">
                                    <LuUser />
                                    {user.userName}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-2 ">
                              {user.userRole === "admin" && (
                                <h2 className="text-sm font-normal px-3 py-1 rounded-full uppercase text-emerald-500 bg-emerald-100/60">
                                  {user.userRole}
                                </h2>
                              )}

                              {user.userRole === "seller" && (
                                <h2 className="text-sm font-normal px-3 py-1 rounded-full uppercase bg-orange-100 text-orange-500">
                                  {user.userRole}
                                </h2>
                              )}

                              {user.userRole === "buyer" && (
                                <h2 className="text-sm font-normal px-3 py-1 rounded-full uppercase bg-purple-100 text-purple-500">
                                  {user.userRole}
                                </h2>
                              )}
                            </div>
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            shsoburhossen951@gmail.com
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              {user.status === "approved" && (
                                <p className="px-3 py-1 text-sm text-indigo-500 rounded-full bg-indigo-100/60">
                                  {user.status}
                                </p>
                              )}

                              {user.status === "pending" && (
                                <p className="px-3 py-1 text-sm text-pink-500 rounded-full bg-pink-100/60">
                                  {user.status}
                                </p>
                              )}
                            </div>
                          </td>

                          {user.status === "pending" && (
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-6">
                                <button
                                  onClick={() => handleApprovedSeller(user._id)}
                                  className="px-3 py-1 text-sm bg-[#e3fcef] text-[#10b981] hover:bg-[#c5dbd0] font-medium rounded-xl"
                                >
                                  Approved Now
                                </button>
                              </div>
                            </td>
                          )}
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

export default AllUser;
