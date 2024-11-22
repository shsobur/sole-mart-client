import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";

function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { signInUser, googleSigninUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Calling user sign in aip__ __!
    signInUser(data.email, data.password)
      .then(() => {
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
      })
      .catch((error) => {
        setError("Invalid! user or password. Try again");
        console.log("Sing in error: ", error);
      });
  };

  const handleGoogleSignUp = () => {
    googleSigninUser()
      .then(() => {
        // Sweet Alert__ __!
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
      })
      .catch((error) => {
        console.log("Google sing in error: ", error.message);
      });
  };

  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white text-[#151515] rounded-lg shadow-lg lg:max-w-4xl">
          <div
            className="hidden bg-cover lg:block lg:w-1/2"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
            }}
          ></div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <p className="mt-3 text-2xl font-semibold text-center">
              Welcome back!
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
                <p className="pl-1 pb-3 font-semibold text-gray-600">Email</p>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                />
                <div>
                  {errors.email && (
                    <span className="text-sm text-red-400">
                      Email field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <p className="pl-1 pb-3 font-semibold text-gray-600">
                  Password
                </p>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="Password"
                  name="password"
                  {...register("password", { required: true })}
                />
                <div>
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      Password field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#2563eb] rounded-lg hover:bg-[#3562c4] focus:outline-none"
                >
                  Sign In
                </button>
              </div>
              <div className="text-red-600 pb-5">
                <span>{error}</span>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b md:w-1/4"></span>

              <Link
                to="/signUp"
                href="#"
                className="text-xs text-gray-500 uppercase hover:underline"
              >
                or sign up
              </Link>

              <span className="w-1/5 border-b md:w-1/4"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;