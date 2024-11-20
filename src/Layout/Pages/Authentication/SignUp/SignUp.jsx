import Swal from "sweetalert2";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import useAxiosPublic from "../../../Hooks/AxiosPublic/AxiosPublic";

function SignUp() {
  const { signUpUser, googleSigninUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let useStatus = data.role === "seller" ? "pending" : "approved";

    const signInUserInfo = {
      userName: data.name,
      userEmail: data.email,
      userRole: data.role,
      status: useStatus,
    };

    console.log(signInUserInfo, data.password);

    // Calling user sign up aip__ __ __!
    signUpUser(data.email, data.password)
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
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
          title: "Signed up successfully",
        });

        navigate("/");

        axiosPublic.post("/user", signInUserInfo).then((res) => {
          if (res.data.insertedId > 0) {
            console.log("User Create successfully");
          }
        });
      })
      .catch((error) => {
        console.log("Singed Up error:", error);
      });
  };

  const handleGoogleSignUp = async () => {
    await googleSigninUser().then(() => {
      // Sweet Alert__
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
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
        title: "Signed in successfully",
      });

      navigate("/");
    });
  };

  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <div className="flex flex-row-reverse w-full max-w-sm mx-auto overflow-hidden bg-white text-[#151515] rounded-lg shadow-lg lg:max-w-4xl">
          <div
            className="hidden bg-cover lg:block lg:w-1/2"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
            }}
          ></div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <p className="mt-3 text-2xl font-semibold text-center">
              Register Now
            </p>
            <a
              href="#"
              onClick={handleGoogleSignUp}
              className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg  hover:bg-gray-100"
            >
              <div className="px-4 py-2 text-2xl">
                <FcGoogle />
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </a>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b lg:w-1/4"></span>

              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase hover:underline"
              >
                or login with email
              </a>

              <span className="w-1/5 border-b  lg:w-1/4"></span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <p className="pl-1 pb-3 font-semibold text-gray-600">
                  Enter Name
                </p>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                />
                <div>
                  {errors.name?.type === "required" && (
                    <p className="text-sm text-red-400">Name is required</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <p className="pl-1 pb-3 font-semibold text-gray-600">
                  Select Role
                </p>
                <select
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  {...register("role")}
                >
                  <option value={"buyer"}>Buyer</option>
                  <option value={"seller"}>Seller</option>
                </select>
              </div>

              <div className="mt-4">
                <p className="pl-1 pb-3 font-semibold text-gray-600">
                  Enter Email
                </p>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                />
                <div>
                  {errors.email?.type === "required" && (
                    <p className="text-sm text-red-400">Email is required</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <p className="pl-1 pb-3 font-semibold text-gray-600">
                  Enter Password
                </p>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                  })}
                  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$*])(?=.*\d).*$/
                  type="Password"
                  name="password"
                />
                <div>
                  <div>
                    {errors.password?.type === "required" && (
                      <span className="text-sm text-red-500">
                        Password is required
                      </span>
                    )}
                  </div>

                  <div>
                    {errors.password?.type === "minLength" && (
                      <span className="text-sm text-red-500">
                        Password should be at least 8 characters
                      </span>
                    )}
                  </div>

                  <div>
                    {errors.password?.type === "pattern" && (
                      <span className="text-sm text-red-500">
                        Use at least one uppercase(A-Z), lowercase(a-z) also
                        number(0 -9) and special character(@, #, $, *) to go.
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#2563eb] rounded-lg hover:bg-[#3562c4] focus:outline-none"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b md:w-1/4"></span>

              <Link
                to="/signIn"
                href="#"
                className="text-xs text-gray-500 uppercase hover:underline"
              >
                or sign in
              </Link>

              <span className="w-1/5 border-b md:w-1/4"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
