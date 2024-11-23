import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import CartItemCard from "../../Components/CartItemCard/CartItemCard";
import Swal from "sweetalert2";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/carts/${user?.email}`).then((res) => {
      setCarts(res.data);
    });
  }, [axiosSecure, user]);

  const handleCartDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0808",
      cancelButtonColor: "#088408",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount === 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            const remaining = carts.filter((item) => item._id !== id);
            setCarts(remaining);
          }
        });
      }
    });
  };

  return (
    <>
      {carts.length === 0 ? (
        <div className="flex items-center justify-center text-center h-screen text-5xl font-semibold">
          <h2>No! product in your cart.</h2>
        </div>
      ) : (
        <div className="main_cart_top_container">
          <div className="cart_title_container">
            <h2>YOUR CART ITEM_</h2>
          </div>

          <div className="cart_display_main_container">
            {carts.map((cart) => (
              <CartItemCard
                key={cart._id}
                cartItem={cart}
                handleCartDelete={handleCartDelete}
              ></CartItemCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
