import "./ProductCard.css";
import PropTypes from "prop-types";
import useUserData from "../../Hooks/UserData/UserData";
import useAxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";
import Swal from "sweetalert2";

const ProductCard = ({ cardItem }) => {
  const axiosSecure = useAxiosSecure();
  const userData = useUserData();

  // Add product to cart__ __!
  const handleAddToCart = (cardItem) => {
    const productInfo = {
      id: cardItem._id,
      name: cardItem.name,
      oldPrice: cardItem.oldPrice,
      newPrice: cardItem.newPrice,
      savings: cardItem.savings,
      category: cardItem.category,
      image: cardItem.image,
      userEmail: userData.userEmail,
    };

    axiosSecure.post("/cart", productInfo).then((res) => {
      if (res.data.acknowledged) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Cart added successfully",
        });
      }
      if (res.data.message === "already exists") {
        Swal.fire({
          text: "You alrady added the product to the cart",
          icon: "error",
        });
      }
    });
  };

  // Add product to wish list__ __!
  const handleAddToWishList = (cardItem) => {
    const productInfo = {
      id: cardItem._id,
      name: cardItem.name,
      oldPrice: cardItem.oldPrice,
      newPrice: cardItem.newPrice,
      savings: cardItem.savings,
      category: cardItem.category,
      image: cardItem.image,
      userEmail: userData.userEmail,
    };

    axiosSecure.post("/wish-list", productInfo).then((res) => {
      if (res.data.acknowledged) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Added to wishlist successfully",
        });
      }
      if (res.data.message === "already exists") {
        Swal.fire({
          text: "You alrady added the product to the wish list",
          icon: "error",
        });
      }
    });
  };

  return (
    <>
      <section>
        <div className="main_container">
          <div className="all_cart_section_outer_container">
            <div className="main_all_cart_section_container">
              <div className="ptodict_cart_image_container">
                <img src={cardItem.image} alt="Prodict image" />
              </div>

              <div className="product_item_info_container">
                <div className="product_cart_header_container">
                  <h2>{cardItem.name}</h2>
                  <h4>{cardItem.category}</h4>
                </div>

                <div className="product_cart_footer_container">
                  <h2>${cardItem.newPrice}</h2>
                  <h3>${cardItem.oldPrice}</h3>
                  <h4>{cardItem.savings}</h4>
                </div>

                <div>
                  {userData.userRole === "buyer" && (
                    <div className="product_button_container">
                      <button onClick={() => handleAddToCart(cardItem)}>
                        Add to cart
                      </button>
                      <button onClick={() => handleAddToWishList(cardItem)}>
                        Add to wish list
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ProductCard.propTypes = {
  cardItem: PropTypes.object,
};

export default ProductCard;